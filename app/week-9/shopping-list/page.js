"use client";

import { useState } from "react";
import { useUserAuth } from "../_utils/auth-context.js";
import NewItem from "./new-item.js";
import ItemList from "./item-list.js";
import itemsData from "./items.json";
import MealIdeas from "./meal-ideas.js";

export default function Page() {

  if (!user){

    return <p>You must be logged in to view this page</p>
  }
  const [itemList, setItemList] = useState(itemsData);
  const [AddItem, setAddItem] = useState("name");
  const [selectedItemName, setSelectedItemName] = useState("name");

  let itemArray = itemsData.map((Item) => ({ ...Item }));
  const addNewItem = (newItem) => {
    setItems([...items, newItem]);
  };
  const handleAddItem = (newItem) => {
    setItemList([...itemList, newItem]);
  };
  const handleItemSelect = (event) => {
    // console.log(event.target.id);
    let itemName = event.target.id;
    const simpleName = itemName
      .split(",")[0]
      .toLowerCase()
      .replace(/[^\p{L}\s]/gu, "")
      .trim();

    setSelectedItemName(simpleName);
  };

  const addItem = () => setAddItem(true);

  return (
    <main className="p-6">
      <h1 className="text-2xl font-bold mb-4">Shopping List</h1>

      {AddItem && <NewItem onAddItem={handleAddItem} />}
      <div className="absolute top-5 right-5 rounded-full w-8 h-8 overflow-hidden z-0">
        <button
          className="bg-blue-600 text-black text-3xl w-full h-full 
        leading-none cursor-pointer"
          onClick={addItem}
        >
          +
        </button>
      </div>
      <ItemList items={itemList} onItemSelect={handleItemSelect} />
      <div className="w-1/2">
        <MealIdeas ingredient={selectedItemName} />
      </div>
    </main>
  );
}
