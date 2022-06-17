import React, { useState } from 'react';
import './App.css';
import Landing from './components/LandingPage';
import LoadMoreButton from './components/LoadMoreButton';
import { Container } from '@material-ui/core';

const App = () => {

  const [page, setPage] = useState(1);

  return (
    <Container className="App">
      <h1>News Portal</h1>
      <Landing page={page} />
      <LoadMoreButton setPage={setPage} />
    </Container>
  );
}

export default App;
