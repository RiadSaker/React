import React, {useState} from 'react';
import './App.css';
import PersonCard from './PersonCard';

function App() {
  return (
    <div className="App">
      <PersonCard
    firstname={"Jane"}
    lastname={"Doe"}
    age={45}
    hair={"Black"}/> 
      <PersonCard
    firstname={"John"}
    lastname={"Smith"}
    age={88}
    hair={"Brown"}/>
    </div>
  );
}

export default App;
