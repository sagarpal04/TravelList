import { useState } from "react";
import Logo from "./Logo";
import Form from "./Form";
import PackingList from "./PackingList";
import Stats from "./Stats";

export default function App() {
  const [items, setItems] = useState([]);
  function handleAddItems(list) {
    setItems((prevItems) => {
      const updatedItem = [...prevItems, list];
      return updatedItem;
    });
  }
  function handleDeleteItem(id) {
    setItems((prevItems) => {
      const updatedItem = prevItems.filter((item) => item.id !== id);
      return updatedItem;
    });
  }
  function handleToggleItem(id) {
    setItems((prevItems) => {
      const updatedItems = prevItems.map((item) => {
        if (item.id === id) {
          return { ...item, packed: !item.packed };
        }
        return item;
      });
      return updatedItems;
    });
  }
  return (
    <div className="app">
      <Logo />
      <Form addItems={handleAddItems} items={items} />
      <PackingList
        listItem={items}
        deleteItem={handleDeleteItem}
        toggleItem={handleToggleItem}
        setItem={setItems}
      />
      <Stats items={items} />
    </div>
  );
}
