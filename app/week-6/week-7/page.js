'use client';

import { useState } from 'react';

import NewItem from './new-item.js' 
import ItemList from './item-list.js';
import itemsData from './items.json'



export default function Page() {
  
  

  const [itemList, setItemList] = useState(itemsData);
  const [AddItem, setAddItem] = useState ('name');
  


  let itemArray = itemsData.map((Item) => ({...Item}));
  const addNewItem = (newItem) => {
    setItems([...items,newItem]);
  }
  const handleAddItem = (newItem) =>{
    setItemList([...itemList,newItem])
      
    
  };

  const addItem = () => setAddItem(true);
  const onAddItem = () => setAddItem(false)
  
  return (
    <main className="p-6">
      <h1 className="text-2xl font-bold mb-4">Shopping List</h1>
     
      {AddItem && <NewItem onAddItem = {handleAddItem} />}
      <div className="absolute top-5 right-5 rounded-full w-8 h-8 overflow-hidden z-0">
        <button className="bg-blue-600 text-black text-3xl w-full h-full 
        leading-none cursor-pointer"
        onClick={addItem}>+</button>

      
      
      
      </div>
    <ItemList items = {itemList} />
    </main>
  );
}
