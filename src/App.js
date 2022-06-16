import React from 'react';
import './App.css';
import Landing from './components/LandingPage';
import LoadMoreButton from './components/LoadMoreButton';

const App = () => {
  return (
    <div className="App">
      <h1>News Portal</h1>
      <Landing />
      <LoadMoreButton />
    </div>
  );
}

export default App;
