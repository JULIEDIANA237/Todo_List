// src/store/todos/todosSlice.ts
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Todo } from '../../interfaces/Todo';
import { fetchTodosAsync, addTodoAsync, deleteTodoAsync, toggleCompleteAsync, editTodoAsync } from '../thunks/todosThunks'; // Import des thunks

interface TodosState {
  todos: Todo[];
  loading: boolean;
  error: string | null;
}

const initialState: TodosState = {
  todos: [],
  loading: false,
  error: null,
};

const todoSlice = createSlice({
  name: 'todos',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    // Cas pour la récupération des tâches
    builder.addCase(fetchTodosAsync.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(fetchTodosAsync.fulfilled, (state, action: PayloadAction<Todo[]>) => {
      state.loading = false;
      state.todos = action.payload;
    });
    builder.addCase(fetchTodosAsync.rejected, (state) => {
      state.loading = false;
      state.error = 'Failed to fetch todos';
    });

    // Cas pour l'ajout d'une tâche
    builder.addCase(addTodoAsync.fulfilled, (state, action: PayloadAction<Todo>) => {
      state.todos.push(action.payload); // Assure-toi que l'objet todo ajouté a bien un ID
    });

    // Cas pour supprimer une tâche
    builder.addCase(deleteTodoAsync.fulfilled, (state, action: PayloadAction<number>) => {
      state.todos = state.todos.filter((todo) => todo.id !== action.payload);
    });

    // Cas pour marquer une tâche comme terminée
    builder.addCase(toggleCompleteAsync.fulfilled, (state, action: PayloadAction<Todo>) => {
      const index = state.todos.findIndex((todo) => todo.id === action.payload.id);
      if (index !== -1) {
        state.todos[index] = action.payload; // Mise à jour de la tâche avec la nouvelle valeur de completed
      }
    });



    builder.addCase(editTodoAsync.fulfilled, (state, action: PayloadAction<Todo>) => {
      const index = state.todos.findIndex((todo) => todo.id === action.payload.id);
      if (index !== -1) {
          state.todos[index] = action.payload; // Met à jour la tâche avec le nouveau titre
      }
    });

  },
});

export default todoSlice.reducer;
