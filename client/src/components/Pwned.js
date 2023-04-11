import React, { useEffect, useState } from "react";
import sha1 from "sha1";

// check if password was present in data breach
function Pwned(props) {
  const geslo = props.geslo;
  const [numberOfBreaches, setNumberOfBreaches] = useState(0);

  useEffect(() => {
    const hashedPassword = sha1(geslo);
    console.log(hashedPassword);

    const firstFiveChars = hashedPassword.substring(0, 5);
    console.log("First five chars: " + firstFiveChars);

    const restOfHash = hashedPassword.substring(5).toUpperCase();
    console.log("Rest of hash: " + restOfHash);

    fetch("https://api.pwnedpasswords.com/range/" + firstFiveChars)
      .then((response) => response.text())
      .then((result) => {
        if (result.includes(restOfHash)) {
          console.log("Your password was found in a data breach!");
          const index = result.indexOf(restOfHash);
          const colonIndex = result.indexOf(":", index);
          const endIndex = result.indexOf("\n", colonIndex);
          const numberBreaches = parseInt(
            result.substring(colonIndex + 1, endIndex)
          );
          console.log(`Password found in data breach(es): ${numberBreaches}`);
          setNumberOfBreaches(numberBreaches);
        } else {
          setNumberOfBreaches(0);
        }
      })
      .catch((error) => console.error(error));
  }, [geslo]);

  return (
    <div>
      <div>
        {geslo && (
          <>
            Vaše geslo se je pojavilo v <b>{numberOfBreaches}</b> data
            breach-ih.
          </>
        )}
      </div>
      <div>
        {geslo &&
          numberOfBreaches > 0 &&
          "To geslo se je že pojavilo pri vdoru podatkov zato ga spremenite in ne uporabljajte več!"}
      </div>
    </div>
  );
}

export default Pwned;
