import React, { useState } from "react";

function ItemForm() {
  const [formData, setFormData] = useState({
    name: "",
    desc: "",
    price: "",
  });

  function handleChange(event) {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  }

  function handleSubmit(event) {
    event.preventDefault();

    const newItem = { ...formData };

    fetch("/items", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newItem),
    })
      .then((r) => r.json())
      .then((newItem) => {
        setFormData({
          name: "",
          desc: "",
          price: "",
        });
        console.log(newItem);
        // onAddToy(newToy);
      });
  }

  return (
    <div>
      <h3>List a new item</h3>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Name:</label>
        <input
          id="name-input"
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
        />
        <label htmlFor="desc">Desc:</label>
        <input
          id="desc-input"
          type="text"
          name="desc"
          value={formData.desc}
          onChange={handleChange}
        />
        <label htmlFor="price">Enter Price:</label>
        <input
          id="price-input"
          type="text"
          name="price"
          pattern="\d{1,3}(,\d{3})*(\.\d+)?$"
          placeholder="$0.00"
          data-type="currency"
          value={formData.price}
          onChange={handleChange}
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default ItemForm;
