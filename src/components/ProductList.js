//this will be our product list component responsible for presenting
//our products in a nice listed format
import React from "react";
import Product from "./Product";
import "../stylesheets/Products.css";
//we import all our product images here
import BurberyTrenchCoat from "../images/Burbery Trench Coat.png";
import BlackRedSki from "../images/Black and Red Vintage Ski Jacket.png";
import BlueRetro from "../images/Blue Retro Sports Jacket.png";
import BrownLeather from "../images/Brown leather Jacket.png";
import BrownSuede from "../images/Brown Suede Jacket.png";
import LetsSki from "../images/LEts Ski Jumper.png";
import RetroSports from "../images/80s Retro Sports Jacket.png";
import LeatherBomber from "../images/Men Leather Bomber.png";
import TweedBlazer from "../images/Tweed Blazer.png";
//then we set up an array of product objects
//which include the name price and an image of the item
const products = [
  { id: 1, name: "Burbery Coat", price: 1200, image: BurberyTrenchCoat },
  { id: 2, name: "Black and Red Ski", price: 500, image: BlackRedSki },
  { id: 4, name: "Brown Leather Jacket", price: 800, image: BrownLeather },
  { id: 5, name: "Brown Suede Jacket", price: 350, image: BrownSuede },
  { id: 6, name: "Lets Ski Jumper", price: 150, image: LetsSki },
  { id: 7, name: "Retro Sports Jacket", price: 300, image: RetroSports },
  { id: 8, name: "Leather Bomber", price: 1000, image: LeatherBomber },
  { id: 9, name: "Blue Retro jacket", price: 200, image: BlueRetro },
  { id: 10, name: "Tweed Blazer", price: 500, image: TweedBlazer },
];
//then we set up some basic rendered elements like a heading
const ProductList = () => (
  <div className="product-container">
    <h1>Products</h1>
    <div className="row">
      {/*we use the .map method to map the products in our list to our product card in Product.js
      with product.id as the key */}
      {products.map((product) => (
        <div className="col-md-4" key={product.id}>
          <Product product={product} />
        </div>
      ))}
    </div>
  </div>
);
//export the component
export default ProductList;
