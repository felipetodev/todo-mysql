import { useState } from "react"
import { Checkbox } from "@/components/ui/checkbox"
import { TodoListTools } from "@/components/todo-list-tools"
import { TodoEdit } from "@/components/todo-edit"
import { cn } from "@/lib/utils"
import { type Todo } from "@/lib/types"

type TodoListProps = Todo & {
  onCompletedChange: (value: { id: string, value: boolean }) => void
}

export function TodoList({ id, description, completed, onCompletedChange }: TodoListProps) {
  const [isEdit, setIsEdit] = useState(false)
  return (
    <div className="flex items-center rounded border w-full h-[50px] border-ring bg-primary/20 hover:bg-primary/10 transition-colors">
      <div className="flex gap-x-2 items-center p-2 w-full">
        <Checkbox
          checked={Boolean(completed)}
          onCheckedChange={(value: boolean) => onCompletedChange({ id, value })}
        />
        {isEdit ? (
          <TodoEdit
            description={description}
            todoId={id}
            onCancelEdit={() => setIsEdit(false)}
          />
        ) : (
          <>
            <p title={description} className={cn("w-full truncate max-w-[25ch] sm:max-w-full", { "line-through": completed })}>
              {description}
            </p>
            <TodoListTools
              todoId={id}
              isCompleted={completed}
              onEditChange={() => setIsEdit(!isEdit)}
            />
          </>
        )}
      </div>
    </div>
  )
}