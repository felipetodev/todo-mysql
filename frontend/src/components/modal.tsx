import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog"
import { useStore } from "@/lib/hooks/use-store"
import { PencilIcon, Trash2Icon } from "lucide-react"
import { type Todo } from "@/lib/types"

type Props = {
  todoId: Todo["id"],
  type: "delete",
  children: React.ReactNode
}

export function Modal({ todoId, type, children }: Props) {
  const { onDeleteTodo } = useStore()
  return (
    <AlertDialog>
      <AlertDialogTrigger asChild>
        {children}
      </AlertDialogTrigger>
      <AlertDialogContent>
        {type === "delete" ? (
          <AlertDialogHeader>
            <AlertDialogTitle className="flex">
              Eliminar tarea <Trash2Icon className="ml-3" />
            </AlertDialogTitle>
            <AlertDialogDescription>
              Estás a punto de eliminar una de tus tareas. ¿Deseas continuar?
            </AlertDialogDescription>
          </AlertDialogHeader>
        ) : (
          <AlertDialogHeader>
            <AlertDialogTitle className="flex">
              Editar tarea <PencilIcon className="ml-3" />
            </AlertDialogTitle>
            <AlertDialogDescription>
              Estás a punto de modificar una de tus tareas. ¿Deseas continuar?
            </AlertDialogDescription>
          </AlertDialogHeader>
        )
        }
        <AlertDialogFooter>
          <AlertDialogCancel>NO, VOLVER</AlertDialogCancel>
          <AlertDialogAction onClick={() => onDeleteTodo({ id: todoId })}>
            SI, CONTINUAR
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent >
    </AlertDialog >
  )
}
