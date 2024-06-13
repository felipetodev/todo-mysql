import { useRef } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { useStore } from "@/lib/hooks/use-store"
import { toast } from 'sonner'

export function InputForm() {
  const { onAddTodo } = useStore()
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
          if (!inputRef.current?.value.trim()) return toast.warning("Por favor, ingrese una tarea")
          onAddTodo({ description: inputRef.current.value })
          inputRef.current.value = ""
        }}
      >
        AGREGAR
      </Button>
    </form>
  )
}