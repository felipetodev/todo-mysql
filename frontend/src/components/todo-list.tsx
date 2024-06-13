import { Checkbox } from "@/components/ui/checkbox"
import { TodoListTools } from "@/components/todo-list-tools"
import { cn } from "@/lib/utils"
import { type Todo } from "@/lib/types"

type TodoListProps = Todo & {
  onCompletedChange: (value: { id: string, value: boolean }) => void
}

export function TodoList({ id, description, completed, onCompletedChange }: TodoListProps) {
  return (
    <div className="flex items-center rounded border w-full h-[50px] border-ring bg-primary/20 hover:bg-primary/10 transition-colors">
      <div className="flex gap-x-2 items-center p-2 w-full overflow-hidden">
        <Checkbox
          checked={Boolean(completed)}
          onCheckedChange={(value: boolean) => onCompletedChange({ id, value })}
        />
        <p className={cn("w-full", { "line-through": completed })}>
          {description}
        </p>
        <TodoListTools
          todoId={id}
          isCompleted={completed}
        />
      </div>
    </div>
  )
}