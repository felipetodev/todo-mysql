import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import {
  addTodo,
  deleteTodo,
  completedTodo,
  fetchTodos,
} from "@/features/todoSlice"
import { type AppDispatch, type RootState } from "@/app/store"

export function useStore() {
  const { todos } = useSelector((state: RootState) => state.todos)
  const dispatch: AppDispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchTodos())
  }, [])

  const onAddTodo = async ({ description }: { description: string }) => {
    dispatch(addTodo({ description }))
  }

  const onDeleteTodo = ({ id }: { id: string }) => {
    dispatch(deleteTodo({ id }))
  }

  const onCompletedTodo = ({ id, value }: { id: string, value: boolean }) => {
    dispatch(completedTodo({ id, value }))
  }

  return {
    todos,
    onAddTodo,
    onDeleteTodo,
    onCompletedTodo
  }
}
