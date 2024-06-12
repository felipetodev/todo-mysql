import express from "express"
import cors from "cors"

const app = express()
const port = process.env.PORT ?? 3000

app.use(cors());

app.get("/", (req, res) => {
  res.json({ message: "Hello TransVip Challenge! 🚀" })
})

app.post("/task", (req, res) => {
  res.send("Task created!")
})

app.patch("/task/:id", (req, res) => {
  res.send("Task updated!")
})

app.delete("/task/:id", (req, res) => {
  res.send("Task deleted!")
})

app.listen(port, () => {
  console.log(`Server is running on port http://localhost:${port}`)
})
