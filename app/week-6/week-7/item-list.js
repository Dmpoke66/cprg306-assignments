'use client';

import { useState } from 'react'
import Item from './item';

export default function ItemList({items}) {

  const [sortBy, setSortBy] = useState("name");

  const sortedItems = [...items].sort((a,b) => {
  if (sortBy === 'name') {
     
      return a.name.localeCompare(b.name);
      } else {
        return a.category.localeCompare(b.category)
      }
        
     
    });
  
  return (
    <div>
      <div>
         <button
      className="bg-orange-500 text-black px-2 py-1 rounded"
      onClick={() => setSortBy ("name")}>Name</button>

      <button
      className="bg-orange-500 text-black px-2 py-1 rounded"
      onClick={() => setSortBy ("category")}>Category</button>
      </div>

      
   
    <ul className="space-y-4 mt-4">
     
      {sortedItems.map((item, index) => (
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
