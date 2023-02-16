import React, { useState } from "react";

function Hello() {
  const [name, setName] = useState("World");
  const changeName = () => {
    let newName = name === "World" ? "Mopati" : "World";
    setName(newName);
  };
  return (
    <div>
      <div className="HelloUser">Hello {name}</div>
      <button onClick={changeName}>Change</button>
    </div>
  );
}

export default Hello;
