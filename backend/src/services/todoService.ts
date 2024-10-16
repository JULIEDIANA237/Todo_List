import todoRepository from '../repositories/todoRepository';

class TodoService {
  // Récupérer toutes les tâches
  async getAllTodos() {
    return await todoRepository.getAll();
  }

  // Créer une nouvelle tâche
  async createTodo(title: string) {
    return await todoRepository.create(title);
  }

  // Supprimer une tâche
  async deleteTodo(id: number) {
    return await todoRepository.delete(id);
  }

  // Mettre à jour le statut d'une tâche
  async updateTodoStatus(id: number, completed: boolean) {
    return await todoRepository.updateStatus(id, completed);
  }

  // Mettre à jour le titre d'une tâche
  async updateTodoTitle(id: number, title: string) {
    return await todoRepository.updateTitle(id, title); // Ajoute la méthode pour mettre à jour le titre
  }
}

export default new TodoService();
