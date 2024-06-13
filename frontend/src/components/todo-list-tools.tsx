import { Button } from "@/components/ui/button"
import { PencilIcon, TrashIcon } from "lucide-react"
import { Modal } from "./modal"

export function TodoListTools({ isCompleted }: { isCompleted: boolean }) {
  return (
    <div className="flex gap-x-1">
      <Button disabled={isCompleted} size="sm">
        <PencilIcon className="size-4" />
      </Button>
      <Modal type="delete">
        <Button disabled={isCompleted} variant="destructive" size="sm" onClick={(({ target }) => console.log(target))}>
          <TrashIcon className="size-4" />
        </Button>
      </Modal>
    </div>
  )
}

