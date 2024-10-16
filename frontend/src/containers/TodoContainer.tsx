import React, { useEffect } from 'react';
import { useAppSelector, useAppDispatch } from '../hooks/useTodos';
import TodoList from '../components/TodoList';
import AddTodoForm from '../components/AddTodoForm';
import { Box } from '@mui/material';
import {
    fetchTodosAsync,
    addTodoAsync,
    toggleCompleteAsync,
    deleteTodoAsync,
    editTodoAsync, // Nouvelle action pour l'édition
} from '../redux/thunks/todosThunks';

const TodoContainer: React.FC = () => {
    const todos = useAppSelector((state) => state.todos.todos);
    const dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(fetchTodosAsync());
    }, [dispatch]);

    const handleAddTodo = (title: string) => {
        dispatch(addTodoAsync(title));
    };

    const handleToggleComplete = (id: number, completed: boolean) => {
        dispatch(toggleCompleteAsync({ id, completed }));
    };

    const handleDelete = (id: number) => {
        dispatch(deleteTodoAsync(id));
    };

    const handleEdit = (id: number, title: string) => {
        dispatch(editTodoAsync({ id, title })); // Appelle l'action d'édition
    };

    return (
        <>
            <Box sx={{ marginBottom: 2 }}> {/* Ajout d'un espacement en bas du formulaire */}
              <AddTodoForm onAddTodo={handleAddTodo} />
            </Box>
            <TodoList todos={todos} onToggleComplete={handleToggleComplete} onDelete={handleDelete} onEdit={handleEdit} />
        </>
    );
};

export default TodoContainer;
