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
  static async getAll() { // : Promise<Todo[]>
    const connection = await mysql.createConnection(config)

    const [result] = await connection.query(
      "SELECT *, BIN_TO_UUID(id) id FROM todo;"
    )

    return result as Todo[]
  }

  // static async update(id: number, data: any) { }

  // static async delete(id: number) { }
}