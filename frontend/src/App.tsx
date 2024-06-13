import { Header } from "@/components/header"
import { InputForm } from "@/components/input-form"
import { TodoList } from "@/components/todo-list"
import { useStore } from "@/lib/hooks/use-store"

function App() {
  const { todos, onCompletedTodo } = useStore()

  return (
    <>
      <Header />
      <main className="grid gap-y-10 place-items-center p-5 max-w-5xl mx-auto">
        <InputForm />
        {todos?.map((todo) => (
          <TodoList
            key={todo.id}
            onCompletedChange={onCompletedTodo}
            {...todo}
          />
        ))}
        {todos.length === 0 && (
          <div className="flex items-center justify-center rounded border w-full h-[50px] border-ring bg-primary/20">
            <p className="text-primary font-semibold">
              No hay tareas
            </p>
          </div>
        )}
      </main >
    </>
  )
}

export default App
