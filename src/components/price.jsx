import React from "react";
import { useState } from "react";









const Price = () => {
  const [prix, setPrix] = useState(1000);
  return (
    <div>
      <h2>{prix}€</h2>
    </div>
  );
}
export default Price;