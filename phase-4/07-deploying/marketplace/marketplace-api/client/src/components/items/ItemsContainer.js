import { useState, useEffect } from "react";
import Item from "./Item";

const ItemsContainer = () => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    fetch("/items")
      .then((r) => r.json())
      .then(setItems);
  }, []);

  const onBuyNowClick = (id) => {
    fetch(`/items/${id}/purchased`)
      .then((resp) => resp.json())
      .then((item) => updateUnsoldItems(id));
  };

  const addItems = (item) => {
    setItems([...items, item]);
  };

  const updateUnsoldItems = (itemID) => {
    const updatedItems = items.filter((item) => item.id !== itemID);
    setItems(updatedItems);
  };

  return (
    <div>
      {items.map((item) => (
        <Item key={item.id} item={item} onBuyNowClick={onBuyNowClick} />
      ))}
    </div>
  );
};

export default ItemsContainer;
