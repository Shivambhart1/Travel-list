import { useState } from "react";

const Form = ({ onAddItems }) => {

  function handleSubmit(e)
  {
    e.preventDefault();
    const newItem = {id: Date.now(), description, quantity, packed: false};
    console.log(newItem);
    onAddItems(newItem);

    if (!description) return;
    setDescription("");
    setQuantity(1);
  }

  const [description, setDescription] = useState("");
  const [quantity, setQuantity] = useState(1);

  return (
    <form className="add-form" onSubmit={handleSubmit}>
      <h3>What do you want to add in your list</h3>
      <select
      value={quantity}
      onChange={(e) => setQuantity(e.target.value)}
      >
        {Array.from({ length: 20 }, (_, i) => i + 1).map
          ((num) => (
            <option value={num} key={num}>
              {num}
            </option>
          ))}
      </select>
      <input 
      type="text"s
      placeholder="Item..." 
      value = {description}
      onChange={(e) => setDescription(e.target.value)}
      />
      <button>ADD</button>
    </form>
  );
}

export default Form;