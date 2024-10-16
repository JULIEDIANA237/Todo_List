import React from 'react';
import { Todo } from '../interfaces/Todo';
import TodoItem from './TodoItem';

interface TodoListProps {
    todos: Todo[];
    onToggleComplete: (id: number, completed: boolean) => void;
    onDelete: (id: number) => void;
    onEdit: (id: number, title: string) => void; // Nouvelle prop pour l'édition
}

const TodoList: React.FC<TodoListProps> = ({ todos, onToggleComplete, onDelete, onEdit }) => {
    return (
        <div>
            {todos.map((todo) => (
                <TodoItem
                    key={todo.id}
                    todo={todo}
                    onToggleComplete={onToggleComplete}
                    onDelete={onDelete}
                    onEdit={onEdit} // Passe la fonction d'édition
                />
            ))}
        </div>
    );
};

export default TodoList;
