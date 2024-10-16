// src/store/todos/todosThunks.ts
import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { Todo } from '../../interfaces/Todo';

// URL de base pour les appels API
const API_URL = 'http://localhost:4000/api/todos';

// Thunk pour récupérer les tâches
export const fetchTodosAsync = createAsyncThunk('todos/fetchTodos', async () => {
  const response = await axios.get(API_URL);
  return response.data as Todo[];
});

// Thunk pour ajouter une nouvelle tâche
export const addTodoAsync = createAsyncThunk('todos/addTodo', async (title: string) => {
  const response = await axios.post(API_URL, { title, completed: false });
  return response.data as Todo; // Retourner la nouvelle tâche ajoutée
});

// Thunk pour supprimer une tâche
export const deleteTodoAsync = createAsyncThunk('todos/deleteTodo', async (id: number) => {
  await axios.delete(`${API_URL}/${id}`);
  return id;
});

// Thunk pour marquer une tâche comme terminée
export const toggleCompleteAsync = createAsyncThunk(
  'todos/toggleComplete',
  async ({ id, completed }: { id: number; completed: boolean }) => {
    try {
      // Ajoute un log pour voir les données envoyées
      console.log(`Updating todo with ID: ${id}, completed: ${completed}`);
      
      const response = await axios.patch(`${API_URL}/${id}/complete`, {
        completed: completed, // Envoyer l'état mis à jour
      });
      
      console.log("Response from API:", response.data); // Voir la réponse API
      return response.data.todo; // Retourner le todo mis à jour
    } catch (error) {
      console.error('Error updating todo:', error);
      throw error;
    }
  }
);

export const editTodoAsync = createAsyncThunk(
    'todos/editTodo',
    async ({ id, title }: { id: number; title: string }) => {
        const response = await axios.patch(`${API_URL}/${id}/title`, { title });
        return response.data.todo; // Retourner la tâche mise à jour
    }
);