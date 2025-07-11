'use client';

import { useState } from 'react';
import Item from './item';
import itemsData from './items.json';

export default function ItemList() {
  const [items, setItems] = useState(itemsData);
  const [sortBy, setSortBy] = useState("name");

  const sortedItems = [...items].sort((a, b) => {
    if (sortBy === "name") {
      return a.name.localeCompare(b.name);
    } else {
      return a.category.localeCompare(b.category);
    }
  });

  return (
    <div className="p-4">
      <div className="flex space-x-4 mb-4">
        <button
          onClick={() => setSortBy("name")}
          className={`px-4 py-2 rounded ${
            sortBy === "name" ? "bg-blue-600 text-white" : "bg-gray-200 text-black"
          }`}
        >
          Sort by Name
        </button>
        <button
          onClick={() => setSortBy("category")}
          className={`px-4 py-2 rounded ${
            sortBy === "category" ? "bg-blue-600 text-white" : "bg-gray-200 text-black"
          }`}
        >
          Sort by Category
        </button>
      </div>

      <ul className="space-y-4">
        {sortedItems.map((item) => (
          <Item
            key={item.id}
            name={item.name}
            quantity={item.quantity}
            category={item.category}
          />
        ))}
      </ul>
    </div>
  );
}
