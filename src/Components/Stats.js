const Stats = ({ numItem, numPackedItems, packedItemsPercent }) => {
  return (
    <footer className="stats">
      {numItem === 0 ? (
        <em>
          Start Packing your items ASAP🚀!
        </em>
      ) : ( 
         packedItemsPercent === 100 ? 
         "Everything is packed. You're ready to go✈️ !" : 
         `You have ${numItem} items in your list, and
          you already packed ${numPackedItems} (${packedItemsPercent}%)`
      )}
      <em>
      
        
      </em>
    </footer>
  )
}

export default Stats;
