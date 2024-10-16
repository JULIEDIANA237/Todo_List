import { Request, Response } from 'express';
import todoService from '../services/todoService'; // Utiliser le service

class TodoController {
  // Récupérer toutes les tâches
  async getTodos(req: Request, res: Response) {
    try {
      const todos = await todoService.getAllTodos();
      res.status(200).json(todos);
    } catch (error) {
      if (error instanceof Error) {
        res.status(500).json({ message: error.message });
      } else {
        res.status(500).json({ message: 'Unknown error occurred' });
      }
    }
  }

  // Créer une nouvelle tâche
  async createTodo(req: Request, res: Response) {
    try {
      const { title } = req.body;
      const newTodo = await todoService.createTodo(title);
      res.status(201).json(newTodo);
    } catch (error) {
      if (error instanceof Error) {
        res.status(500).json({ message: error.message });
      } else {
        res.status(500).json({ message: 'Unknown error occurred' });
      }
    }
  }

  // Supprimer une tâche
  async deleteTodo(req: Request, res: Response) {
    try {
      const { id } = req.params;
      await todoService.deleteTodo(Number(id));
      res.status(204).send();
    } catch (error) {
      if (error instanceof Error) {
        res.status(500).json({ message: error.message });
      } else {
        res.status(500).json({ message: 'Unknown error occurred' });
      }
    }
  }

  // Mettre à jour le statut d'une tâche
  async updateTodoStatus(req: Request, res: Response) {
    try {
      const { id } = req.params;
      const { completed } = req.body; // Vérifie si 'completed' est bien passé dans le corps de la requête
  
      const updatedTodo = await todoService.updateTodoStatus(Number(id), completed);
  
      if (updatedTodo) {
        res.status(200).json({ message: 'Todo updated successfully', todo: updatedTodo });
      } else {
        res.status(404).json({ message: 'Todo not found' });
      }
    } catch (error) {
      if (error instanceof Error) {
        res.status(500).json({ message: error.message });
      } else {
        res.status(500).json({ message: 'Unknown error occurred' });
      }
    }
  }

  // Mettre à jour le titre d'une tâche
  async updateTodoTitle(req: Request, res: Response) {
    try {
      const { id } = req.params;
      const { title } = req.body;

      const updatedTodo = await todoService.updateTodoTitle(Number(id), title);

      if (updatedTodo) {
        res.status(200).json({ message: 'Todo title updated successfully', todo: updatedTodo });
      } else {
        res.status(404).json({ message: 'Todo not found' });
      }
    } catch (error) {
      if (error instanceof Error) {
        res.status(500).json({ message: error.message });
      } else {
        res.status(500).json({ message: 'Unknown error occurred' });
      }
    }
  }
}

export default new TodoController();
