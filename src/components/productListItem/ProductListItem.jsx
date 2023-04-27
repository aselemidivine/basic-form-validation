import React from "react";


// We are going to display the product items on the screen. after they havee been added.
const ProductListItem = ({ item, deleteProductProp }) => {
  const deleteProduct = _ => deleteProductProp(item);
  return (
    <div>
      <div>{item.name}</div>
      <div>{item.quantity}</div>
      <div>{item.price}</div>
      <div>
        <input type="button" value="Delete" onClick={deleteProduct} />
      </div>
    </div>
  );
};

export default ProductListItem;
