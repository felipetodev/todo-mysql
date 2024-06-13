import { Todo } from '@/lib/types'
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { toast } from 'sonner'
import { type PayloadAction } from '@reduxjs/toolkit'

const API_URL = 'http://localhost:3000/todos';

type TodosState = {
  todos: Todo[]
}

const initialState: TodosState = {
  todos: []
}


export const fetchTodos = createAsyncThunk('todos/fetchTodos', async () => {
  const resp = await fetch(API_URL)

  if (!resp.ok) {
    throw new Error('Failed to fetch todos')
  }

  return await resp.json()
})

export const addTodo = createAsyncThunk('todos/addTodo', async ({ description }: { description: string }) => {
  const resp = await fetch(API_URL, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ description })
  })

  if (!resp.ok) {
    toast.error("Error al agregar tarea")
  }

  return await resp.json() as Todo[]
})

export const editTodo = createAsyncThunk('todos/editTodo', async ({ id, description }: { id: string, description: string }) => {
  const resp = await fetch(`${API_URL}/${id}`, {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ description })
  })

  if (!resp.ok) {
    toast.error("Error al editar tarea")
  }

  return await resp.json() as Todo[]
})

export const todosSlice = createSlice({
  name: 'todos',
  initialState,
  reducers: {
    setTodos: (state, action: PayloadAction<{ todos: Todo[] }>) => {
      const { todos } = action.payload

      return { ...state, todos }
    },
    deleteTodo: (state, action: PayloadAction<{ id: Todo["id"] }>) => {
      const { id } = action.payload

      try {
        fetch(`${API_URL}/${id}`, {
          method: "DELETE",
          headers: {
            "Content-Type": "application/json"
          }
        })

        toast.success("Tarea eliminada con éxito")
        return {
          ...state,
          todos: state.todos.filter((todo) => todo.id !== id)
        }
      } catch (e) {
        console.error(e)
        toast.error("Failed to delete todo")
      }
    },
    completedTodo: (state, action: PayloadAction<{ id: string, value: boolean }>) => {
      const { id, value: isComplete } = action.payload
      try {
        fetch(`${API_URL}/${id}`, {
          method: "PATCH",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ completed: isComplete }),
        })

        isComplete
          ? toast.success("Tarea completada")
          : toast.info("Tarea desmarcada")

        return {
          ...state,
          todos: state.todos.map((todo) => {
            if (todo.id === id) {
              return { ...todo, completed: isComplete }
            }
            return todo
          })

        }
      } catch (error) {
        toast.error("Failed to update todo")
      }
    }
  },
  extraReducers: (builder) => {
    builder.addCase(editTodo.fulfilled, (state, action: PayloadAction<Todo[]>) => {
      const todos = action.payload

      toast.success("Tarea editada con éxito")
      return {
        ...state,
        todos: state.todos.map((todo) => {
          const updatedTodo = todos.find((t) => t.id === todo.id)
          return updatedTodo ? updatedTodo : todo
        })
      }
    }),
      builder.addCase(fetchTodos.fulfilled, (state, action: PayloadAction<Todo[]>) => {
        const todos = action.payload

        return { ...state, todos }
      }),
      builder.addCase(addTodo.fulfilled, (state, action: PayloadAction<Todo[]>) => {
        const todo = action.payload

        toast.success("Tarea agregada con éxito")
        return { ...state, todos: [...state.todos, ...todo] }
      })
  }
})

export const {
  setTodos,
  deleteTodo,
  completedTodo
} = todosSlice.actions

export default todosSlice.reducer
