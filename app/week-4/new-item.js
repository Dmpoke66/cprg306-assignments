'use client';

import { useState } from 'react';

export default function NewItem() {
  const [quantity, setQuantity] = useState(1);

  const increment = () => {
    if (quantity < 20) {
      setQuantity(quantity + 1);
    }
  };

  const decrement = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  return (
    <div className="bg-white p-6 rounded-xl shadow-lg w-64 text-center">
      <h2 className="text-xl font-semibold mb-4">Select Quantity</h2>
      <div className="flex items-center justify-center mb-4 space-x-4">
        <button
          onClick={decrement}
          disabled={quantity === 1}
          className={`px-4 py-2 rounded-full font-bold text-white ${
            quantity === 1 ? 'bg-gray-400 cursor-not-allowed' : 'bg-blue-500 hover:bg-blue-600'
          }`}
        >
          -
        </button>

        <span className="text-lg font-medium">{quantity}</span>

        <button
          onClick={increment}
          disabled={quantity === 20}
          className={`px-4 py-2 rounded-full font-bold text-white ${
            quantity === 20 ? 'bg-gray-400 cursor-not-allowed' : 'bg-blue-500 hover:bg-blue-600'
          }`}
        >
          +
        </button>
      </div>
      <p className="text-sm text-gray-600">Quantity of item must be between 1 and 20 no more, no less</p>
    </div>
  );
}
