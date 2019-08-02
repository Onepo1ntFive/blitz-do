import React from 'react';
import './App.css';
import BottomBar from './components/BottomBar/Index';
import TasksList from './components/TasksList/Index';


function App() {
  return (
    <div className="App">
      <TasksList />
      <BottomBar />    
    </div>
  
  );
}

export default App;
