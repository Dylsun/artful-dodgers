//this is our main App component responsible for handling the routing of our components
//we import all the components and any other relevant resources like App.css
import React, { useContext } from "react";
import { Route, Routes } from "react-router-dom";
import AppNavbar from "./components/NavBar";
import Home from "./components/Home";
import Products from "./components/ProductList";
import Cart from "./components/Cart";
import Register from "./components/Register";
import Login from "./components/Login";
import { UserProvider, UserContext } from "./UserContext";
import "./stylesheets/App.css";

function App() {
  return (
    <UserProvider>
      <div>
        <AppNavbar />
        <div className="container">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/products" element={<Products />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/register" element={<Register />} />
            <Route path="/login" element={<LoginWrapper />} />
          </Routes>
        </div>
      </div>
    </UserProvider>
  );
}

// we use a wrapper to handle setting the logged in user
const LoginWrapper = () => {
  const { setUser } = useContext(UserContext);
  return <Login setLoggedInUser={setUser} />;
};

export default App;
