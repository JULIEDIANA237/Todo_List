// src/services/todoService.ts

import apiClient from '../utils/apiClient';
import { Todo } from '../interfaces/Todo';

const todoService = {
  async createTodo(title: string): Promise<Todo> {
    const response = await apiClient.post('/todos', { title });
    return response.data; // La tâche complète avec l'ID
  },

  async getTodos(): Promise<Todo[]> {
    const response = await apiClient.get('/todos');
    return response.data;
  },

  async deleteTodo(id: number): Promise<void> {
    await apiClient.delete(`/todos/${id}`);
  },

  async toggleTodoComplete(id: number): Promise<Todo> {
    const response = await apiClient.patch(`/todos/${id}/toggle`);
    return response.data;
  },
};

export default todoService;
