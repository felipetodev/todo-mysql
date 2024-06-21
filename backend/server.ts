import express, { json } from "express"
import cors from "cors"
import { TodoModel } from "./models/mysql/todo"
import { createTodoRouter } from "./routes/todo"
import { APP_PORT } from "./config"
import 'dotenv/config'

const app = express()
app.use(json())
app.use(cors())

app.get("/", (req, res) => {
  res.json([
    {
      Welcome: "Hello MySQL Todo List API"
    },
    {
      endpoints: {
        todos: {
          GET: "/todos",
          POST: "/todos",
          PATCH: "/todos/:id",
          DELETE : "/todos/:id"
        }
      }
    }
  ])
})

app.use('/todos', createTodoRouter({ todoModel: TodoModel }))

app.listen(APP_PORT, () => {
  console.log(`Server is running on port http://localhost:${APP_PORT}`)
})
