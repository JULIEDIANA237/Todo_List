import { Router } from 'express';
import todoController from '../controllers/todoController';

const router = Router();

// Récupérer toutes les tâches
router.get('/todos', todoController.getTodos);

// Créer une nouvelle tâche
router.post('/todos', todoController.createTodo);

// Supprimer une tâche
router.delete('/todos/:id', todoController.deleteTodo);

// Mettre à jour le statut d'une tâche
router.patch('/todos/:id/complete', todoController.updateTodoStatus);

// Mettre à jour le titre d'une tâche
router.patch('/todos/:id/title', todoController.updateTodoTitle); // Ajoute une route pour modifier le titre

export default router;
