import React, { useState } from "react";

const Nom = () => {
  const [nom, setNom] = useState("Iphone 14");

  return (
    <div>
      <h2>{nom}</h2>
    </div>
  );
};

export default Nom;

