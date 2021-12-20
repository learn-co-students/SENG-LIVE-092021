function Item({ item, onBuyNowClick }) {
  const categoriesList = item.categories.map((category) => (
    <li key={category.id}>{category.name}</li>
  ));

  return (
    <div className="item-div" id={`item-${item.id}`}>
      <h3>{item.name}</h3>
      <p>{item.desc}</p>
      {item.seller ? <p> By: {item.seller.username} </p> : null}
      <br />
      {item.price}{" "}
      <button onClick={() => onBuyNowClick(item.id)}>{item.status}</button>
      <br />
      <br />
      <b>Categories:</b>
      {categoriesList}
    </div>
  );
}

export default Item;
