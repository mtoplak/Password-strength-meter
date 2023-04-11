import React, { useEffect, useState } from "react";
import { timeToCrackPassword } from "../utils/timeToCrackPassword";

function TimeToCrack({ geslo }) {
  const [timeToCrack, setTimeToCrack] = useState("");

  useEffect(() => {
    setTimeToCrack(timeToCrackPassword(geslo));
  }, [geslo]);

  return (
    <div>
      {geslo && (
        <>
          Čas potreben za razbitje vašega gesla s surovo silo:{" "}
          <b>{timeToCrack}</b>
        </>
      )}
    </div>
  );
}

export default TimeToCrack;
