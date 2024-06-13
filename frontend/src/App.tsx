import { useEffect, useState } from "react"
import { Header } from "./components/header"
import { InputForm } from "./components/input-form"
import { TodoList } from "./components/todo-list"
import { type Todo } from "@/lib/types"

function App() {
  const [todos, setTodos] = useState<Todo[]>([])

  useEffect(() => {
    const getTodos = () => {
      fetch("http://localhost:3000/todos")
        .then((res) => res.json())
        .then((data: Todo[]) => setTodos(data))
    }
    getTodos()
  }, [])

  return (
    <>
      <Header />
      <main className="grid gap-y-10 place-items-center p-5 max-w-5xl mx-auto">
        <InputForm />
        {todos.map((todo) => (
          <TodoList
            key={todo.id}
            onCompletedChange={({ id, value }: { id: string, value: boolean }) => {
              try {
                fetch(`http://localhost:3000/todos/${id}`, {
                  method: "PATCH",
                  headers: {
                    "Content-Type": "application/json",
                  },
                  body: JSON.stringify({ completed: value }),
                })

                setTodos((prev) => prev.map((todo) => {
                  if (todo.id === id) {
                    return { ...todo, completed: value }
                  }
                  return todo
                }))
              } catch (error) {
                alert("Failed to update todo")
              }
            }}
            {...todo}
          />
        ))}
      </main>
    </>
  )
}

export default App
