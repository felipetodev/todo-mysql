import { Button } from "@/components/ui/button"
import { PencilIcon, TrashIcon } from "lucide-react"
import { Modal } from "@/components/modal"
import { type Todo } from "@/lib/types"

type Props = {
  todoId: Todo["id"],
  isCompleted: Todo["completed"]
  onEditChange: () => void
}

export function TodoListTools({ todoId, isCompleted, onEditChange }: Props) {
  return (
    <div className="flex gap-x-1 ml-auto">
      <Button disabled={isCompleted} size="sm" onClick={onEditChange}>
        <PencilIcon className="size-4" />
      </Button>
      <Modal todoId={todoId} type="delete">
        <Button variant="destructive" size="sm">
          <TrashIcon className="size-4" />
        </Button>
      </Modal>
    </div>
  )
}
