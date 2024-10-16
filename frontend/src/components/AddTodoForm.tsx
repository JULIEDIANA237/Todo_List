import React, { useState } from 'react';
import { TextField, Button, Box } from '@mui/material';

interface AddTodoFormProps {
  onAddTodo: (title: string) => void;
}

const AddTodoForm: React.FC<AddTodoFormProps> = ({ onAddTodo }) => {
  const [title, setTitle] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (title.trim()) {
      onAddTodo(title);
      setTitle('');
    }
  };

  return (
    <Box component="form" onSubmit={handleSubmit} sx={{ display: 'flex', gap: 2 }}>
      <TextField
        label="New Task"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        fullWidth
      />
      <Button variant="contained" type="submit">
        Add
      </Button>
    </Box>
  );
};

export default AddTodoForm;
