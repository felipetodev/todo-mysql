import express from "express"
import cors from "cors"
import { TodoModel } from "./models/mysql/todo"
import { createTodoRouter } from "./routes/todo"

const app = express()
const port = process.env.PORT ?? 3000

app.use(cors());

app.get("/", (req, res) => {
  res.json({ message: "Hello TransVip Challenge! 🚀" })
})

app.use('/todos', createTodoRouter({ todoModel: TodoModel }))

app.listen(port, () => {
  console.log(`Server is running on port http://localhost:${port}`)
})
