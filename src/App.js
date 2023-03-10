import { React, useEffect, useState } from "react";
import "./App.css";
import Frontend from "./components/Frontend";
import Noga from "./components/Noga";
import Pwned from "./components/Pwned";
function App() {
  const [geslo, setGeslo] = useState("");

  useEffect(() => {
    document.title = "Password Strength Checker";
  }, []);
  
  return (
    <div className="App">
      <Noga />
      <Frontend geslo={geslo} setGeslo={setGeslo} />
      <Pwned geslo={geslo} setGeslo={setGeslo} />
    </div>
  );
}

export default App;
