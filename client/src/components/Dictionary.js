import React from "react";

function Dictionary({ isFoundIndictionary, isLoading }) {
  return (
    <div className="container">
      {isLoading && <div className="loader"></div>}
      {isLoading === false && (
        <div className="text">
          Vaše geslo
          <b>{isFoundIndictionary === false ? " ni " : " je "}</b>
          bilo najdeno v slovarju, ki je na voljo na spletu!
          {isFoundIndictionary === false && " Super!"}
        </div>
      )}
    </div>
  );
}

export default Dictionary;
