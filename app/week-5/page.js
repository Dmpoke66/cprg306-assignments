"use client"


import { useState } from 'react';
import newItem from './new-item';

export default function QuantityPage() {
  
    const [name, setName] = useState("");
    const [category, setCategory] =useState("produce");
    const [quantity, setQuantity] =useState(1);


    const handleNewItemChange = (Event) => {
        setNewItem(Event.target.value);

    } 
    const handleNameChange = (Event) => setName(Event.target.value);
    const handleQuantityChange = (Event) => setQuantity(parseInt(Event.target.value) || 1);
    const handleCategoryChange = (Event) => setCategory(Event.target.value);


    const handleSubmit = (Event) => {
        Event.preventDefault();

        let item = {
            name : name,
            quantity: quantity,
            category: category
        }
        alert(`
            Name: ${item.name}
            Quantity: ${item.quantity}
            Category: ${item.category}
            `);

        setName("");
        setQuantity(1);
        setCategory("");    
    }
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
    <form onSubmit={handleSubmit} className="p-4 bg-blue-300">
        <input
        type="text"
        value={name}
        onChange={(Event) => setName(Event.target.value)}
        placeholder="Item name"
        className="border rounded px-2 py-1 text-black bg-purple-500"
        required
        />
        <select
        value={category}
        onChange={(Event) => setCategory(Event.target.value)}
        className="border rounded px-2.5 py-1.5 block text-black bg-purple-500"
        >
            <option value="produce">Produce</option>
            <option value="dairy">Dairy</option>
            <option value="bakery">Bakery</option>
            <option value="meat">Meat</option>
            <option value="frozen">Frozen</option>
            <option value="foods">Foods</option>
            <option value="canned goods">Canned Goods</option>
            <option value="dry goods">Dry Goods</option>
            <option value="beverages">Beverages</option>
            <option value="snacks">Snacks</option>
            <option value="household">Household</option>
            <option value="other">Other</option>
        </select>
        <button
            type="submit"
            className="bg-green-400 hover:bg-green-600 text-white px-6 py-2 rounded"
        >
            Submit
        </button>
         </form>
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

