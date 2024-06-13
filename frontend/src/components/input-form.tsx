import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

export function InputForm() {
  return (
    <form className="flex space-x-4 p-5 w-full max-w-3xl mt-4">
      <Input
        name="todo"
        placeholder="¿Qué te gustaría realizar?"
      />
      <Button>
        AGREGAR
      </Button>
    </form>
  )
}