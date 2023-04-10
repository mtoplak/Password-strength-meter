import React from "react";

function Dictionary({ isFoundIndictionary, isLoading }) {
  return (
    <div className="container">
      {isLoading && <div className="loader"></div>}
      {isLoading === false && (
        <div className="text">
          Your password
          <b>{isFoundIndictionary === false ? " was not " : " was "}</b>
          found in an online dictionary!
          {isFoundIndictionary === false && " Great!"}
        </div>
      )}
    </div>
  );
}

export default Dictionary;
