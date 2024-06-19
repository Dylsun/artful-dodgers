//This is our Cart component first we need to import our various resources
//this includes redux, bootstrap elements and our custom css
import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeItem } from '../features/cart/cartSlice';
import { Dropdown, DropdownButton, Button, Modal } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../stylesheets/Cart.css';
//we want to establish our shipping options as objects in an array.
const shippingOptions = [
  { type: "Standard", cost: 70, info: "Delivered within 5-7 business days." },
  { type: "Express", cost: 150, info: "Delivered within 2-3 business days." },
  { type: "Overnight", cost: 200, info: "Delivered the next business day." },
];
//this is our Cart component that will be called in the App.js
const Cart = () => {
  const cart = useSelector(state => state.cart.items);
  const dispatch = useDispatch();

  // we set up a state to handle the selected shipping type and modal visibility
  const [selectedShipping, setSelectedShipping] = useState(shippingOptions[0]);
  const [showInfoModal, setShowInfoModal] = useState(false);

  // this is where handle the total cost of the cart
  const totalCart = cart.reduce((acc, item) => acc + item.price, 0);

  // this is where we handle combining the total with shipping to get the Grand total
  const combinedTotal = totalCart + selectedShipping.cost;

  // this is where we handle our Shipping options
  // we use .find to get the type of shipping option which we then make it our selected option
  const handleShippingSelect = (type) => {
    const shipping = shippingOptions.find(option => option.type === type);
    setSelectedShipping(shipping);
  };
  //this is where we handle the rendering of our component
  //we use the .map method to map our products that have been added to the cart
  //we display it as a list and include a button to remove items
  return (
    <div className="cart-container">
      <h1>Cart</h1>
      <ul className="list-group">
        {cart.map(item => (
          <li key={item.id} className="list-group-item customCart d-flex justify-content-between align-items-center">
            {item.name} - R{item.price}
            {/*we dispatch the removeItem reducer when the remove button is clicked*/}
            <Button className="custom-button" onClick={() => dispatch(removeItem(item.id))}>
              Remove
            </Button>
          </li>
        ))}
      </ul>
      
      {/* this is where we handle the rendering of our shipping drop down menu/button 
      this includes the info button which will call our info modal*/}
      <div className="my-3">
        <h5>Select Shipping:</h5>
        <DropdownButton
          id="shipping-dropdown"
          title={selectedShipping.type}
          onSelect={handleShippingSelect}
        >
          {shippingOptions.map(option => (
            <Dropdown.Item className = "custom-dropdown" key={option.type} eventKey={option.type}>
              {option.type} - R{option.cost}
            </Dropdown.Item>
          ))}
        </DropdownButton>
        <Button variant="info" onClick={() => setShowInfoModal(true)} className="custom-info">
          Info
        </Button>
      </div>

      {/* This is where we handle the rendering of our costs */}
      <div className='totals'>
      <h3>Shipping Cost: R{selectedShipping.cost}</h3>
      <h3>Total Cart Cost: R{totalCart}</h3>
      <h3>Combined Total: R{combinedTotal}</h3>
      </div>
      {/* This is where we handle the rendering of our Modal*/}
      <Modal show={showInfoModal} onHide={() => setShowInfoModal(false)}>
        <Modal.Header closeButton>
          <Modal.Title className = "modal-title">Shipping Information</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>{selectedShipping.info}</p>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShowInfoModal(false)}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};
//don't forget  to export the cart component!
export default Cart;
