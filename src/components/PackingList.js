import { useState } from "react";
import Item from "./Item";

export default function PackingList({
  listItem,
  deleteItem,
  toggleItem,
  setItem,
}) {
  const [sortBy, setSortBy] = useState("input");
  function handleClear() {
    const confirmed = window.confirm(
      "Are you sure you want to delete all items? "
    );
    if (confirmed) setItem([]);
  }
  let itemsArray;
  if (sortBy === "input") {
    itemsArray = [...listItem];
  } else if (sortBy === "description") {
    itemsArray = [...listItem].sort((a, b) =>
      a.description.localeCompare(b.description)
    );
  } else if (sortBy === "packed") {
    itemsArray = [...listItem].sort(
      (a, b) => Number(a.packed) - Number(b.packed)
    ); // Compare boolean values directly
  }
  return (
    <div className="list">
      <ul>
        {itemsArray.map((item) => (
          <Item
            key={item.id}
            item={item}
            deleteItem={deleteItem}
            toggleItem={toggleItem}
          />
        ))}
      </ul>
      <div className="actions">
        <select value={sortBy} onChange={(e) => setSortBy(e.target.value)}>
          <option value="input">Sort by input order</option>
          <option value="description">Sort by description</option>
          <option value="packed">Sort by packed status</option>
        </select>
        <button onClick={handleClear}>Clear list</button>
      </div>
    </div>
  );
}
