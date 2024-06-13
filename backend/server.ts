import express, { json } from "express"
import cors from "cors"
import { TodoModel } from "./models/mysql/todo"
import { createTodoRouter } from "./routes/todo"
import 'dotenv/config'

const app = express()
app.use(json())
app.use(cors())

const port = process.env.PORT ?? 3000

app.get("/", (req, res) => {
  res.json({ message: "Hello TransVip Challenge! 🚀" })
})

app.use('/todos', createTodoRouter({ todoModel: TodoModel }))

app.listen(port, () => {
  console.log(`Server is running on port http://localhost:${port}`)
})
