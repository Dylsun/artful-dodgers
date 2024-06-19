//this is our Navbar component
import React, { useContext } from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import { UserContext } from "../UserContext";
import "../stylesheets/NavBar.css";
//we import the UserContext which allows us to put the user name in the navbar when a user has logged in
const AppNavbar = () => {
  //we assign the user to the value stored in userContext
  const { user } = useContext(UserContext);
  //we handle the rendering of our component using a bootstrap navbar and some custom css
  //we also set the navbar to fixed so it will always be on screen
  return (
    <Navbar className="custom-navbar" expand="lg" fixed="top">
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link as={Link} to="/">
            Home
          </Nav.Link>
          <Nav.Link as={Link} to="/products">
            Products
          </Nav.Link>
          <Nav.Link as={Link} to="/cart">
            Cart
          </Nav.Link>
          <Nav.Link as={Link} to="/register">
            Register
          </Nav.Link>
          <Nav.Link as={Link} to="/login">
            Login
          </Nav.Link>
        </Nav>
        <Container>
          <Navbar.Brand as={Link} to="/" className="artful-heading">
            Artful Dodgers
          </Navbar.Brand>
        </Container>
        <Container className="welcome-user">
          {user && (
            <Navbar.Text className="welcome-user">Welcome: {user}</Navbar.Text>
          )}
        </Container>
      </Navbar.Collapse>
    </Navbar>
  );
};
//export the component
export default AppNavbar;
