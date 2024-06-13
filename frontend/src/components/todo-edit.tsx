import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { useStore } from "@/lib/hooks/use-store"
import { XIcon } from "lucide-react"
import { toast } from "sonner"

type Props = {
  todoId: string
  description: string
  onCancelEdit: () => void
}

export function TodoEdit({ todoId, description, onCancelEdit }: Props) {
  const { onEditTodo } = useStore()
  return (
    <form
      className="flex items-center space-x-2 w-full"
      onSubmit={(e) => {
        e.preventDefault()

        // get form data input value
        const formData = new FormData(e.target as HTMLFormElement)
        const description = formData.get("edit") as string

        if (!description.trim()) {
          return toast.warning("La descripción no puede estar vacía")
        }

        onEditTodo({ id: todoId, description })
        e.currentTarget.reset()
        onCancelEdit()
      }}
    >
      <Input
        name="edit"
        placeholder={description}
        className="size-full p-2 rounded"
      />
      <Button size="sm">
        GUARDAR
      </Button>
      <Button variant="destructive" size="sm" className="p-2" onClick={onCancelEdit}>
        <XIcon />
      </Button>
    </form>
  )
}
