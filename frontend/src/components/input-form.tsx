import { useRef } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

export function InputForm() {
  const inputRef = useRef<HTMLInputElement>(null)
  return (
    <form
      onSubmit={e => e.preventDefault()}
      className="flex space-x-4 p-5 w-full max-w-3xl mt-4"
    >
      <Input
        name="todo"
        ref={inputRef}
        autoComplete="off"
        placeholder="¿Qué te gustaría realizar?"
      />
      <Button
        onClick={() => {
          if (!inputRef.current?.value) return alert("Por favor, ingrese una tarea")
          try {
            fetch("http://localhost:3000/todos", {
              method: "POST",
              headers: {
                "Content-Type": "application/json"
              },
              body: JSON.stringify({
                description: inputRef.current.value,
              })
            })
          } catch (e) {
            alert(e)
          } finally {
            inputRef.current.value = ""
          }
        }}
      >
        AGREGAR
      </Button>
    </form>
  )
}