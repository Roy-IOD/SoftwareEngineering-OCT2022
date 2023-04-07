import React, { useState } from "react";
import { Navbar, Container, Nav, NavDropdown, Badge, Button } from "react-bootstrap";

function NavScrollExample() {
  const [cartItems, setCartItems] = useState([]);

  const handleAddToCart = (item) => {
    setCartItems([...cartItems, item]);
  };

  const handleRemoveFromCart = (itemIndex) => {
    const newCartItems = [...cartItems];
    newCartItems.splice(itemIndex, 1);
    setCartItems(newCartItems);
  };

  const cartTotal = cartItems.reduce((total, item) => total + item.quantity, 0);

  return (
    <Navbar bg="light" expand="lg" style={{ fontFamily: 'Montserrat' }}>
      <Container fluid>
        <Navbar.Brand href="#">SIMPLY MAKEUP</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px', width:'100%', alignItems: 'center'}}
            navbarScroll
          >
            <Nav.Link href="/Home">HOME</Nav.Link>
            <NavDropdown title="SHOP" id="navbarScrollingDropdownShop">
              <NavDropdown.Item href="/Eyes"> EYES </NavDropdown.Item>
              <NavDropdown.Item href="/Skin"> SKIN </NavDropdown.Item>
              <NavDropdown.Item href="/Lips"> LIPS </NavDropdown.Item>
              <NavDropdown.Item href="/Eyebrows"> EYEBROWS </NavDropdown.Item>
            </NavDropdown>
          
            <NavDropdown
              title="ACCOUNT"
              id="navbarScrollingDropdownAccount"
              style={{ marginLeft: "auto" }}
            >
              <NavDropdown.Item href="/Signup"> SIGN UP </NavDropdown.Item>
              <NavDropdown.Item href="/Login"> LOGIN </NavDropdown.Item>
            </NavDropdown>
            <NavDropdown
              title={
                <Button href="/cart">
                  <Badge bg="secondary">{cartTotal}</Badge>
                  <i className="bi bi-cart-fill" style={{ marginLeft: "20px" }}></i>
                </Button>
              }
              id="navbarScrollingDropdownCart"
            >
              {cartItems.length === 0 ? (
                <NavDropdown.Item>Cart is empty</NavDropdown.Item>
              ) : (
                cartItems.map((item, index) => (
                  <NavDropdown.Item key={index}>
                    {item.quantity} x {item.name} - ${item.price * item.quantity}
                    <i
                      className="bi bi-trash-fill"
                      style={{ marginLeft: "20px", cursor: "pointer" }}
                      onClick={() => handleRemoveFromCart(index)}
                    ></i>
                  </NavDropdown.Item>
                ))
              )}
              <NavDropdown.Divider />
              <NavDropdown.Item href="/cart">View Cart</NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavScrollExample;
