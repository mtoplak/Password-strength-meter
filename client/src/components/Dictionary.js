import React from "react";

function Dictionary({ isFoundIndictionary, isLoading }) {
  return (
    <div>
      {isLoading && "Loading... "}
      Your password
      <b>
        {isLoading
          ? " ? "
          : isFoundIndictionary === false
          ? " WAS NOT "
          : " WAS "}
      </b>
      found in online dictionary!
      {isFoundIndictionary === false && " Great!"}
    </div>
  );
}

export default Dictionary;
