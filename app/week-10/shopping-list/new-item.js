'use client';

import { useState } from "react";


export default function NewItem({ onAddItem }){
    
    const [name, setName] = useState('');
    const [quantity, setQuantity] = useState(1);
    const [category, setCategory] = useState("");

    
    const handleNameChange = (Event) => setName(Event.target.value);
    const handleQuantityChange = (Event) => setQuantity(Event.target.value);
    const handleCategoryChange = (Event) => setCategory(Event.target.value);

    const handleSubmit = (Event) => {
        Event.preventDefault();

        const newItem = {
            id: crypto.randomUUID(),
            name: name,
            quantity: quantity,
            category: category



        }
       

        onAddItem(newItem);
        setName("");
        setQuantity(1);
        setCategory('');



    }
    

    return(
        <div className="bg-green-500 rounded p-5 text-black max-w-md mx-auto my-4 shadow-lg">
  <form onSubmit={handleSubmit}>
    <h2 className="text-2xl mb-2">Add a new item to list</h2>

    <div className="mb-2">
      <label className="inline-block w-40">Item Name</label>
      <input
        className="bg-white rounded border px-2 py-1"
        type="text"
        onChange={handleNameChange}
        value={name}
        required
      />
    </div>

    <div className="mb-2">
      <label className="inline-block w-40">Quantity</label>
      <input
        className="bg-white rounded border px-2 py-1"
        type="number"
        onChange={handleQuantityChange}
        value={quantity}
        required
        min={1}
      />
    </div>

    <div className="mb-2">
      <label className="inline-block w-40">Category</label>
      <input
        className="bg-white rounded border px-2 py-1"
        type="text"
        onChange={handleCategoryChange}
        value={category}
        required
      />
    </div>

    <button
      type="submit"
      className="bg-green-600 text-black p-2 mt-2 rounded cursor-pointer"
    >
      Add New Item
    </button>
  </form>
</div>


    );
};

