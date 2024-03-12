// Snack.js
import React from "react";
import { useParams, Link } from "react-router-dom";

function Snack() {
  const { snackId } = useParams();

  const snackData = {
    chips: { name: "Chips", description: "Delicious crunchy snack" },
    soda: { name: "Soda", description: "Refreshing fizzy drink" },
    chocolate: { name: "Chocolate", description: "Sweet treat for chocolate lovers" }
  };

  const snack = snackData[snackId];

  return (
    <div>
      <h1>{snack.name}</h1>
      <p>{snack.description}</p>
      <Link to="/">Go back to vending machine</Link>
    </div>
  );
}

export default Snack;
