// this is our very basic home/landing component
//we import react and some custom css
import React from 'react';
import "../stylesheets/home.css"
//here is our component
const Home = () => (
  //we basically just handle the rendering of some headings
  <div className="home-comtainer">
    <h1>Welcome to Artful Dodgers</h1>
    <h3>Perveyors of fine second hand clothes</h3>
  </div>
);

export default Home;
