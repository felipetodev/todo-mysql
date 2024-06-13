import { type Request, type Response } from "express";
import { TodoModel } from "../models/mysql/todo";
import { type Todo } from "../types"

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

  create = async (req: Request, res: Response): Promise<void> => {
    const { description } = req.body as { description: Todo["description"] };

    if (!description) {
      res.status(400).json({ error: 'Description is required' });
      return;
    }

    try {
      const todo = await this.todoModel.create({ description });

      res.status(201).json(todo);
    } catch (error) {
      res.status(500).json({ error: 'Failed to create todo' });
    }
  }
}