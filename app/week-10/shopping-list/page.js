"use client";

import React, { useEffect, useState } from "react";
import { useUserAuth } from "../_utils/auth-context";
import ItemList from "./item-list";
import NewItem from "./new-item";
import MealIdeas from "./meal-ideas";
import { addItem, getItems } from "../_services/shopping-list-service";
import { useUserAuth } from "../_utils/auth-context";

export default function Page() {
  const { user } = useUserAuth();

  const [items, setItems] = useState(itemsData);
  const [selectedItemName, setSelectedItemName] = useState("");

  const handleAddItem = (item) => {
    const id = addItem(user.uid, item);

    const newItem = {
      ...item,
      id,
    };

    setItems([...items, newItem]);
  };

  const handleItemSelect = (item) => {
    console.log(item);
    const cleanedName = item
      .replace(
        /([\u2700-\u27BF]|[\uE000-\uF8FF]|\uD83C[\uDC00-\uDFFF]|\uD83D[\uDC00-\uDFFF]|[\u2011-\u26FF]|\uD83E[\uDD10-\uDDFF])/g,
        ""
      )
      .split(",")[0]
      .trim();
    console.log(cleanedName);

    setSelectedItemName(cleanedName);
  };

  async function loadItems() {
    const items = await getItems(user.uid);
    setItems(items);
  }

  useEffect(() => {
    if (!user) return;
    loadItems();
  }, [user]);

  if (!user) {
    return (
      <div>
        <h2>Sign in to view this page.</h2>
      </div>
    );
  }

  return (
    <main className="flex bg-center bg-black min-h-screen text-gray-200 p-5">
      <div className="flex w-full">
        <div className="w-1/2 pr-4">
          <div className="flex flex-col justify-center items-center">
            <h1 className="p-5 text-6xl font-bold text-center rounded-md">
              Shopping List
            </h1>
            <NewItem onAddItem={handleAddItem} />
            <ItemList items={items} onItemSelect={handleItemSelect} />
          </div>
        </div>
        <div className="w-1/2 pl-4 mt-40 bg-transparent text-gray-200 p-5 h-fit rounded-md">
          <MealIdeas ingredient={selectedItemName} />
        </div>
      </div>
    </main>
  );
}

/**
 * "use client"

import React, { useEffect, useState } from 'react';
import ItemList from './item-list';
import NewItem from './new-item';
import MealIdeas from './meal-ideas';
import { addItem, getItems } from '../_services/shopping-list-service';
import { useUserAuth } from '../_utils/auth-context';

export default function Page() {

    const { user } = useUserAuth()

    const [items, setItems] = useState([])
    const [selectedItemName, setSelectedItemName] = useState('')

    const handleAddItem = (item) => {
        const id = addItem(user.uid, item)

        const newItem = {
            ...item,
            id
        }

        setItems([...items, newItem])
    }

    const handleItemSelect = itemName => {
        setSelectedItemName(itemName)
    }

    async function loadItems() {
        const items = await getItems(user.uid)
        setItems(items)
    }

    useEffect(() => {
        if (!user) return
        loadItems()
    }, [user])

    return (
        <main className='p-5'>
            {
                user === null ? <p>You need to sign in to view this page</p> : (
                    <>
                        <h1 className="text-3xl font-bold mb-4">Shopping List</h1>
                        <div className='flex'>
                            <div className='w-1/2'>
                                <NewItem onAddItem={handleAddItem} />
                                <ItemList items={items} onItemSelect={handleItemSelect} />
                            </div>
                            <MealIdeas ingredient={selectedItemName} />
                        </div>
                    </>
                )
            }
        </main>
    )
}
 */
