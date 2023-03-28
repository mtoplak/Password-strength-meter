import { React, useEffect, useState } from "react";
import "./App.css";
import Dictionary from "./components/Dictionary";
import Frontend from "./components/Frontend";
import Noga from "./components/Noga";
import Pwned from "./components/Pwned";
import StrengthTest from "./components/StrengthTest";
function App() {
  const [geslo, setGeslo] = useState("");
  const [isFoundInDictionary, setIsFoundInDictionary] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    document.title = "Password Strength Checker";
  }, []);

  return (
    <div className="App">
      <Noga />
      <Frontend
        geslo={geslo}
        setGeslo={setGeslo}
        setIsFoundInDictionary={setIsFoundInDictionary}
        setIsLoading={setIsLoading}
      />
      <Pwned geslo={geslo} setGeslo={setGeslo} />
      {isFoundInDictionary !== null && geslo !== "" && (
        <Dictionary
          isFoundIndictionary={isFoundInDictionary}
          isLoading={isLoading}
        />
      )}
      <StrengthTest geslo = {geslo}/>
    </div>
  );
}

export default App;
