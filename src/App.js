
import { React, useState } from 'react';
import './App.css';
import Frontend from './components/Frontend';
import Noga from './components/Noga';
function App() {
  const [geslo, setGeslo] = useState("");
  return (
    <div className="App">
      <Noga/>
      <Frontend geslo={geslo} setGeslo={setGeslo} />
    </div>
  );
}

export default App;
