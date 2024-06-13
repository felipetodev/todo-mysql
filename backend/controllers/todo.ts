import { type Request, type Response } from "express";
import { TodoModel } from "../models/mysql/todo";

export class TodoController {
  private todoModel: typeof TodoModel;

  constructor({ todoModel }: { todoModel: typeof TodoModel }) {
    this.todoModel = todoModel
  }

  getAll = async (req: Request, res: Response): Promise<void> => {
    try {
      const todos = await this.todoModel.getAll();

      res.json(todos)
    } catch (error) {
      res.status(500).json({ error: 'Failed to retrieve todos' });
    }
  };
}