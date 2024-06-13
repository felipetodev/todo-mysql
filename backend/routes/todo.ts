import { Router } from "express";
import { TodoController } from "../controllers/todo";
import { TodoModel } from "../models/mysql/todo";

interface RouterOptions {
  todoModel: typeof TodoModel;
}

export const createTodoRouter = ({ todoModel }: RouterOptions) => {
  const todoRouter = Router();

  const todoController = new TodoController({ todoModel });

  todoRouter.get("/", todoController.getAll);
  todoRouter.post("/", todoController.create);

  todoRouter.patch('/:id', todoController.update)
  todoRouter.delete('/:id', todoController.delete)

  return todoRouter;
}