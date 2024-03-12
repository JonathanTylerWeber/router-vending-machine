import React from "react";
import { Link } from "react-router-dom";


function VendingMachine() {


  return (
    <div>
      <h1>Vending Machine</h1>
      <p>What would you like to eat?</p>
      <Link to="/snack/chips">Chips</Link>
      <Link to="/snack/soda">Soda</Link>
      <Link to="/snack/chocolate">Chocolate</Link>
    </div>
  );
}



export default VendingMachine;