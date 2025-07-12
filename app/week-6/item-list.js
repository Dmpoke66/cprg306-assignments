'use client';

import { useState } from 'react'
import itemsData from './items.json';
import Item from './item';

export default function ItemList() {

 
  const [items, setItems] = useState(itemsData);
  const [sortBy, setSortBy] = useState("name");

  const handleSortByChange = (Event) => {
    setSortBy(Event.target.value);
  };

  let sortedItems = [...items];

  if (sortBy != "none") {
    sortedItems.sort((a,b) => {
      return a[sortBy].localeCompare(b[sortBy]);
        
      
    });
  }
  return (
    <div>
      <div>
         <button
      className="bg-orange-500 text-black px-2 py-1 rounded"
      onClick={() => setSortBy ("name")}>Name</button>

      <button
      className="bg-orange-500 text-black px-2 py1 rounded"
      onClick={() => setSortBy ("category")}>Category</button>
      </div>

      
   
    <ul className="space-y-4 mt-4">
     
      {sortedItems.map((item, index) => (
        <Item
          key={index}
          name={item.name}
          quantity={item.quantity}
          category={item.category}
        />
      ))}
    </ul>
     </div>
  );
}
