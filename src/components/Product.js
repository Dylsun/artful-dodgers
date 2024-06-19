//this is our product component where we map items from the Product list to our product cards
import React from "react";
import { Button } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { addItem } from "../features/cart/cartSlice.js";
//remember to import the cartSlice as we will be accessing it here when adding items to cart
const Product = ({ product }) => {
  //inside our product component we assign const dispatch to the Dispatch hook
  //so we can add items to our cart
  const dispatch = useDispatch();
  //we handle the rendering of the card
  return (
    <div className="product-card" style={{ width: "18rem" }}>
      <img src={product.image} className="card-img-top" alt={product.name} />
      <div className="card-body">
        <h5 className="card-title">{product.name}</h5>
        <p className="card-text">R{product.price}</p>
        {/* when the user clicks our add to cart button we dispatch our
         addItem reducer and the item is added to cart*/}
        <Button
          className="product-button"
          onClick={() => dispatch(addItem(product))}
        >
          Add to Cart
        </Button>
      </div>
    </div>
  );
};
//export the component
export default Product;
