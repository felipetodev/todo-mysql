import mysql from "mysql2/promise"
import { type Todo } from "../../types";

const config = {
  host: 'localhost',
  user: 'root',
  port: 3306,
  password: '',
  database: 'todolistdb'
}

export class TodoModel {
  static async getAll() {
    const connection = await mysql.createConnection(config)

    const [result] = await connection.query(
      "SELECT *, BIN_TO_UUID(id) id FROM todo;"
    )

    return result as Todo[]
  }

  static async create({ description }: { description: Todo["description"] }) {
    const connection = await mysql.createConnection(config)

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

  // static async update(id: number, data: any) { }

  // static async delete(id: number) { }
}