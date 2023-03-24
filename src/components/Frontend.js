import { React, useState } from "react";
import showPwdImg from "../assets/show-password.svg";
import hidePwdImg from "../assets/hide-password.svg";

const Frontend = ({ geslo, setGeslo }) => {
  const [isShownPassword, setIsShownPassword] = useState(false);

  return (
    <div id="geslo">
      <div className="pwd-container">
        <input
          name="pwd"
          placeholder="Vpišite geslo"
          type={isShownPassword ? "text" : "password"}
          value={geslo}
          onChange={(e) => setGeslo(e.target.value)}
        />
        <img
          title={isShownPassword ? "Hide password" : "Show password"}
          src={isShownPassword ? hidePwdImg : showPwdImg}
          onClick={() => setIsShownPassword((prevState) => !prevState)}
        />
      </div>
      <br></br>
      <br></br>
      Vaše geslo vsebuje: <b>{geslo.length}</b> znakov!
    </div>
  );
};
export default Frontend;
