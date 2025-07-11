"use client"


import { useState } from 'react';
import newItem from './new-item';

export default function QuantityPage() {
  
  const [quantity, setQuantity] =useState(1);

  const incrementQuantity = () => {
    let currentQuantity = quantity.valueOf();
    if (currentQuantity < 20) {
        setQuantity(currentQuantity + 1);
    
    }
};
  const decrementQuantity = () => {
    let currentQuantity = quantity.valueOf();
    if (currentQuantity > 1) {
        setQuantity(currentQuantity - 1);
    }
  };


  let incrementButtonStyles = "block bg-blue-500 hover:bg-blue-300 text white rounded px-2 py-1 mb-1";
  let decrementButtonStyles = "block bg-blue-500 hover:bg-blue-300 text white rounded px-2 py-1 mb-1";

  if (quantity === 20){
    incrementButtonStyles = "bg-gray-500 text-white rounded px-2 py-1 mb-1";
   
    }
  if (quantity === 1) {
    decrementButtonStyles= "bg-gray-500 text-white rounded px-2 py-1 mb-1";
}    

    return (
   <main>
    <h1>Quantity</h1>
    <p>Current Quantity: {quantity}</p>
    <button
    className={incrementButtonStyles}
    onClick={incrementQuantity}>Increase</button>
    <button
    className={decrementButtonStyles}
    onClick={decrementQuantity}>Decrease</button>
  

    
   </main>
  );
}

