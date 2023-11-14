import { useState } from "react";
import Item from "./Item";

const List = ({ items, onDeleteItem, onToggleItem , handleClearButtonClick}) => {
  const [sortBy, setSortBy] = useState("input"); 

  return (
    <div className="list">
      <ul>
        {items.map((item) => (
          <Item 
          item = {item} 
          onDeleteItem={onDeleteItem} 
          onToggleItem={onToggleItem}
          key={item.id}
          />
        ))}
      </ul>
      <div className="actions">
        <button onClick={handleClearButtonClick}>Clear List</button>
      </div>
    </div>
  );
}

export default List;