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

  update = async (req: Request, res: Response): Promise<void> => {
    const { id } = req.params;
    const todo = req.body as Todo;

    if (!id || !todo) {
      res.status(400).json({ error: 'Missing data' });
      return;
    }

    try {
      const todoUpdated = await this.todoModel.update({ id, todo });

      res.json(todoUpdated);
    } catch (error) {
      res.status(500).json({ error: 'Failed to update todo' });
    }
  }

  delete = async (req: Request, res: Response): Promise<void> => {
    const { id } = req.params;

    console.log({ id })

    if (!id) {
      res.status(400).json({ error: 'Missing data' });
      return;
    }

    try {
      await this.todoModel.delete({ id });

      res.status(204).send();
    } catch (error) {
      res.status(500).json({ error: 'Failed to delete todo' });
    }
  }
}