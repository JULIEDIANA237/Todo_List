import Todo from '../models/todo'; // Assurez-vous que Todo est correctement importé comme un modèle Sequelize

class TodoRepository {
  // Récupérer toutes les tâches
  async getAll() {
    return await Todo.findAll(); // Sequelize renvoie tous les enregistrements
  }

  // Créer une nouvelle tâche
  async create(title: string) {
    const newTodo = await Todo.create({ title }); // Sequelize crée un nouveau Todo avec le titre
    return newTodo; // Renvoie l'objet créé
  }

  // Supprimer une tâche
  async delete(id: number) {
    const result = await Todo.destroy({ where: { id } }); // Supprime le Todo où l'ID correspond
    if (result === 0) {
      throw new Error('Todo not found');
    }
  }

  // Mettre à jour le statut d'une tâche (completed)
  async updateStatus(id: number, completed: boolean) {
    const todo = await Todo.findByPk(id);  // Vérifie si la tâche existe
  
    if (!todo) {
      throw new Error('Todo not found');
    }
  
    todo.completed = completed;
    await todo.save();
  
    return todo;
  }

  // Mettre à jour le titre d'une tâche (édition)
  async updateTitle(id: number, newTitle: string) {
    const todo = await Todo.findByPk(id);  // Vérifie si la tâche existe

    if (!todo) {
      throw new Error('Todo not found');
    }

    todo.title = newTitle;  // Met à jour le titre
    await todo.save();      // Sauvegarde les modifications dans la base de données

    return todo;
  }
}

export default new TodoRepository();
