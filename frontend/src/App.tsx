import React from 'react';
import { Container, Typography } from '@mui/material';
import TodoContainer from './containers/TodoContainer';

const App: React.FC = () => {
  return (
    <Container maxWidth="md">
      <Typography variant="h3" component="h1" gutterBottom>
        Todo List
      </Typography>
      <TodoContainer />
    </Container>
  );
};

export default App;
