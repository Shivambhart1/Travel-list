import "./index.css";
import { useState } from "react";
import Logo from "./Components/Logo";
import Form from "./Components/Form";
import List from './Components/List';
import Stats from "./Components/Stats";


const App = () => {

  const [items, setItem] = useState([]);
  const numItem = items.length;
  const numPackedItems = items.filter((item) => item.packed).length;
  const packedItemsPercent = Math.round((numPackedItems / numItem) * 100);

  const handleClearButtonClick = () => {
    const confirmed = window.confirm("Do you want to delete the items?");
    if(confirmed) setItem([]);
  }

  const handleAddItems = (item) => {
    setItem((items)  => [...items, item]);
  }

  const handleDeleteItem = (id) => {
    setItem(items => items.filter(item => item.id !== id));
  }

  const handleToggleItem = (id) => {
    setItem((items) => 
      items.map((item) =>
        item.id === id ? {...item, packed: !item.packed}
        : item
      )
    );
  }

  return (
    <div className="app">
      <Logo /> 
      <Form onAddItems={handleAddItems} />
      <List 
      items = {items}
      onDeleteItem = {handleDeleteItem}
      onToggleItem = {handleToggleItem}
      handleClearButtonClick={handleClearButtonClick}
      />
      <Stats numItem={numItem} numPackedItems={numPackedItems} packedItemsPercent={packedItemsPercent}/>
    </div>
  );
}

export default App;
