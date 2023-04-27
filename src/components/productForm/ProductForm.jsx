import React, { useState } from "react";

const ProductForm = ( {addProductProp} ) => { // Taking this prop from the app component
  const [name, setName] = useState("");
  const [quantity, setQuantity] = useState("");
  const [price, setPrice] = useState("");

  const addProduct = _ => {
    addProductProp({
        id: (new Date).getTime(), // This will give us a unique id for the product
        name, quantity, price // These are the key values.
    })
    //This will set back the state properties to an empty string. This occurs when the product is completely added.
    setName('');
    setQuantity('');
    setPrice('');
  };

  return (
    <div>
      <h1>Add Product</h1>
      <input
        type="text"
        placeholder="Product Name"
        value={name}
        onChange={(event) => {
          setName(event.target.value);
        }}
      />
      <input
        type="text"
        placeholder="Quantity"
        value={quantity}
        onChange={(event) => {
          setQuantity(event.target.value);
        }}
      />
      <input
        type="text"
        placeholder="Price"
        value={price}
        onChange={(event) => {
          setPrice(event.target.value);
        }}
      />
      <input type="button" value="Add" onClick={addProduct} />
    </div>
  );
};

export default ProductForm;
