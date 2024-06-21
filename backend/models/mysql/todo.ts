import mysql, { Connection } from "mysql2/promise"
import { mysqlConfig as config } from "../../config";
import { type Todo } from "../../types";

class Model {
  private connection!: Connection

  constructor() {
    this.initConnection()
  }

  private initConnection = async () => {
    try {
      this.connection = await mysql.createConnection(config)
    } catch (e) {
      console.error(e)
      throw new Error("Failed to connect to MySQL ❌")
    }
  }

  getAll = async () => {
    const [result] = await this.connection.query(
      "SELECT *, BIN_TO_UUID(id) id FROM todo;"
    )

    return result as Todo[]
  }

  create = async ({ description }: { description: Todo["description"] }) => {
    const [uuidResult] = await this.connection.query('SELECT UUID() uuid;')
    const [{ uuid }] = uuidResult as [{ uuid: string }]

    try {
      await this.connection.query(
        `INSERT INTO todo (id, description, completed)
        VALUES (UUID_TO_BIN("${uuid}"), ?, ?);`,
        [description, false]
      )
    } catch (error) {
      throw new Error('Failed to create todo')
    }

    const [todos] = await this.connection.query(
      "SELECT *, BIN_TO_UUID(id) id FROM todo WHERE id = UUID_TO_BIN(?);",
      [uuid]
    )

    return todos as Todo[]
  }

  update = async ({ id, todo }: { id: Todo["id"], todo: Todo }) => {
    try {
      await this.connection.query(
        `UPDATE todo
        SET description = IFNULL(?, description), completed = IFNULL(?, completed)
        WHERE id = UUID_TO_BIN(?);`,
        [todo.description, todo.completed, id]
      )
    } catch (error) {
      throw new Error('Failed to update todo')
    }

    const [todos] = await this.connection.query(
      "SELECT *, BIN_TO_UUID(id) id FROM todo WHERE id = UUID_TO_BIN(?);",
      [id]
    )

    return todos as Todo[]
  }

  delete = async ({ id }: { id: Todo["id"] }) => {
    try {
      await this.connection.query(
        "DELETE FROM todo WHERE id = UUID_TO_BIN(?);",
        [id]
      )
    } catch (error) {
      throw new Error('Failed to delete todo')
    }
  }
}

export const TodoModel = new Model();
