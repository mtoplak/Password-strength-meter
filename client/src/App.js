import { React, useEffect, useState } from "react";
import "./App.css";
import Dictionary from "./components/Dictionary";
import Frontend from "./components/Frontend";
import Noga from "./components/Noga";
import Pwned from "./components/Pwned";
import StrengthTest from "./components/StrengthTest";
import TimeToCrack from "./components/TimeToCrack";

function App() {
  const [geslo, setGeslo] = useState("");
  const [isFoundInDictionary, setIsFoundInDictionary] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    document.title = "Napredni preverjalnik gesel";
  }, []);

  return (
    <div className="App">
      <Noga />
      <br />
      <div className="results">
        <Frontend
          geslo={geslo}
          setGeslo={setGeslo}
          setIsFoundInDictionary={setIsFoundInDictionary}
          setIsLoading={setIsLoading}
        />
        <br />
        <TimeToCrack geslo={geslo} />
        <br />
        <Pwned geslo={geslo} setGeslo={setGeslo} />
        <br />
        {geslo !== "" && (
          <Dictionary
            isFoundIndictionary={isFoundInDictionary}
            isLoading={isLoading}
          />
        )}
        <br />
        <StrengthTest geslo={geslo} />
      </div>
    </div>
  );
}

export default App;
