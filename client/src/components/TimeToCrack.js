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
          It would take <b>{timeToCrack}</b> to crack your password with brute
          force.
        </>
      )}
    </div>
  );
}

export default TimeToCrack;
