import React, { useState } from 'react';
import { Box, Typography, Checkbox, Button, TextField } from '@mui/material';
import { Todo } from '../interfaces/Todo';

interface TodoItemProps {
  todo: Todo;
  onToggleComplete: (id: number, completed: boolean) => void;
  onDelete: (id: number) => void;
  onEdit: (id: number, title: string) => void; // Nouvelle prop pour l'édition
}

const TodoItem: React.FC<TodoItemProps> = ({ todo, onToggleComplete, onDelete, onEdit }) => {
  const [isEditing, setIsEditing] = useState(false); // État pour le mode d'édition
  const [newTitle, setNewTitle] = useState(todo.title); // État pour le nouveau titre

  const handleToggle = () => {
    console.log(`Checkbox clicked for Todo ID: ${todo.id}, Completed: ${!todo.completed}`);
    onToggleComplete(todo.id, !todo.completed);
  };

  const handleEdit = () => {
    onEdit(todo.id, newTitle); // Appelle la fonction d'édition avec le nouvel titre
    setIsEditing(false); // Ferme le mode d'édition
  };

  return (
    <Box
      sx={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: '8px',
        border: '1px solid #ccc',
        borderRadius: '4px',
        marginBottom: '8px',
        backgroundColor: todo.completed ? '#f0f0f0' : 'white',
      }}
    >
      <Box sx={{ display: 'flex', alignItems: 'center' }}>
        <Checkbox
          checked={Boolean(todo.completed)}
          onChange={handleToggle}
          disabled={todo.completed}
        />
        {isEditing ? (
          <TextField
            value={newTitle}
            onChange={(e) => setNewTitle(e.target.value)}
            variant="outlined"
            size="small"
            sx={{ marginRight: '8px' }} // Espacement entre le champ et le bouton
          />
        ) : (
          <Typography
            variant="body1"
            sx={{
              textDecoration: todo.completed ? 'line-through' : 'none',
              color: todo.completed ? '#999' : 'black',
            }}
          >
            {todo.title}
          </Typography>
        )}
      </Box>
      <Box>
        {isEditing ? (
          <Button
            variant="contained"
            color="primary"
            onClick={handleEdit}
            sx={{ marginRight: '8px' }} // Espacement entre les boutons
          >
            Sauvegarder
          </Button>
        ) : (
          <Button
            variant="contained"
            color="secondary"
            onClick={() => setIsEditing(true)} // Passer en mode d'édition
            sx={{ marginRight: '8px' }} // Espacement entre les boutons
          >
            Modifier
          </Button>
        )}
        <Button
          variant="contained"
          color="error"
          onClick={() => onDelete(todo.id)}
          disabled={todo.completed}
        >
          Supprimer
        </Button>
      </Box>
    </Box>
  );
};

export default TodoItem;
