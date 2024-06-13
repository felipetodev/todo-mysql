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

  return todoRouter;
}