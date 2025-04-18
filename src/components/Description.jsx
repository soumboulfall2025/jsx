import React from "react";
import { useState } from "react";








const Description = () => {
  const [description, setDescription] = useState("C'est un super téléphone !");

  return (
    <div>
      <h2>{description}</h2>
    </div>
  );
}
export default Description;