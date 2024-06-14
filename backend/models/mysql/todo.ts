import mysql, { Connection } from "mysql2/promise"
import { type Todo } from "../../types";

const config = {
  host: 'localhost', // Your MySQL host
  user: 'root', // Your MySQL username
  port: 3306, // Your MySQL port
  password: '', // Your MySQL password
  database: 'todolistdb'
}

let connection: Connection;

export class TodoModel {
  static async init() {
    if (!connection) {
      connection = await mysql.createConnection(config);
    }
  }

  static async getAll() {
    await this.init();

    const [result] = await connection.query(
      "SELECT *, BIN_TO_UUID(id) id FROM todo;"
    )

    return result as Todo[]
  }

  static async create({ description }: { description: Todo["description"] }) {
    await this.init();

    const [uuidResult] = await connection.query('SELECT UUID() uuid;')
    const [{ uuid }] = uuidResult as [{ uuid: string }]

    try {
      await connection.query(
        `INSERT INTO todo (id, description, completed)
        VALUES (UUID_TO_BIN("${uuid}"), ?, ?);`,
        [description, false]
      )
    } catch (error) {
      throw new Error('Failed to create todo')
    }

    const [todos] = await connection.query(
      "SELECT *, BIN_TO_UUID(id) id FROM todo WHERE id = UUID_TO_BIN(?);",
      [uuid]
    )

    return todos as Todo[]
  }

  static async update({ id, todo }: { id: Todo["id"], todo: Todo }) {
    await this.init();

    try {
      await connection.query(
        `UPDATE todo
        SET description = IFNULL(?, description), completed = IFNULL(?, completed)
        WHERE id = UUID_TO_BIN(?);`,
        [todo.description, todo.completed, id]
      )
    } catch (error) {
      throw new Error('Failed to update todo')
    }

    const [todos] = await connection.query(
      "SELECT *, BIN_TO_UUID(id) id FROM todo WHERE id = UUID_TO_BIN(?);",
      [id]
    )

    return todos as Todo[]
  }

  static async delete({ id }: { id: Todo["id"] }) {
    await this.init();

    try {
      await connection.query(
        "DELETE FROM todo WHERE id = UUID_TO_BIN(?);",
        [id]
      )
    } catch (error) {
      throw new Error('Failed to delete todo')
    }
  }
}