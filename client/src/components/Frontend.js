import { React, useRef, useState } from "react";
import showPwdImg from "../assets/show-password.svg";
import hidePwdImg from "../assets/hide-password.svg";

const Frontend = ({
  geslo,
  setGeslo,
  setIsFoundInDictionary,
  setIsLoading,
}) => {
  const [isShownPassword, setIsShownPassword] = useState(false);
  const timeoutRef = useRef(null);

  const checkDictionary = (geslo) => {
    // Clear any previous timeouts
    clearTimeout(timeoutRef.current);

    // Set a new timeout to fetch data after 3.5 seconds
    timeoutRef.current = setTimeout(() => {
      fetchData(geslo);
    }, 2000);
  };

  const fetchData = async (geslo) => {
    // If the input value is empty, don't fetch data
    if (geslo === "") {
      setIsFoundInDictionary(null);
      setIsLoading(false);
      return;
    }
    // Fetch data based on the input value
    console.log(`Fetching data for ${geslo}`);
    const response = await fetch("http://localhost:3001/password", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ password: geslo }),
    });
    const data = await response.json();
    console.log("Password is in dictionary: ");
    console.log(data.result);
    const result = data.result;
    setIsFoundInDictionary(result);
    setIsLoading(false);
  };

  return (
    <div id="geslo">
      <div className="pwd-container">
        <input
          name="pwd"
          placeholder="Vpišite geslo"
          type={isShownPassword ? "text" : "password"}
          value={geslo}
          onChange={(e) => {
            setGeslo(e.target.value);
            checkDictionary(e.target.value);
            setIsLoading(true);
          }}
        />
        <img
          title={isShownPassword ? "Skrij geslo" : "Pokaži geslo"}
          src={isShownPassword ? hidePwdImg : showPwdImg}
          alt="Show/Hide password"
          onClick={() => setIsShownPassword((prevState) => !prevState)}
        />
      </div>
      <br />
      <br></br>
      {geslo.length > 0 && (
        <>
          Vaše geslo vsebuje <b>{geslo.length}</b> znakov!
        </>
      )}
    </div>
  );
};
export default Frontend;
