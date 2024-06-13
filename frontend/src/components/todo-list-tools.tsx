import { Button } from "@/components/ui/button"
import { PencilIcon, TrashIcon } from "lucide-react"
import { Modal } from "@/components/modal"
import { type Todo } from "@/lib/types"

type Props = {
  todoId: Todo["id"],
  isCompleted: Todo["completed"]
}

export function TodoListTools({ todoId, isCompleted }: Props) {
  return (
    <div className="flex gap-x-1">
      <Button disabled={isCompleted} size="sm">
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

