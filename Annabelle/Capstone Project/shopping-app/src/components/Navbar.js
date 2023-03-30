import React, { useState } from "react";

import {
  Navbar,
  Container,
  Nav,
  NavDropdown,
  Badge,
  Button,
} from "react-bootstrap";

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

  return (
    <Navbar bg="light" expand="lg" style={{fontFamily:'Montserrat'}}>
      <Container fluid>
        <Navbar.Brand href="#">SIMPLY MAKEUP</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px', width:'100%'}}
            navbarScroll
          >
            <Nav.Link href="/Home">HOME</Nav.Link>
            <NavDropdown title="SHOP" id="navbarScrollingDropdown">
              <NavDropdown.Item href="/eyes"> EYES </NavDropdown.Item>
              <NavDropdown.Item href="/Skin"> SKIN </NavDropdown.Item>
              <NavDropdown.Item href="/Lips"> LIPS </NavDropdown.Item>
              <NavDropdown.Item href="/Eyebrows"> EYEBROWS </NavDropdown.Item>
            </NavDropdown>
          
            <NavDropdown
              title="ACCOUNT"
              id="navbarScrollingDropdown"
              style={{ marginLeft: "auto" }}
            >
              <NavDropdown.Item href="/Signup"> SIGN UP </NavDropdown.Item>
              <NavDropdown.Item href="/login"> LOGIN </NavDropdown.Item>
            </NavDropdown>
            <NavDropdown style={{ display: "flex", alignItems: "center", }}
              title={
                <div style={{ display: "flex", alignItems: "center" }}>
                  <Button href="/cart">
                    <Badge bg="secondary">{cartItems.length}</Badge>
                    <i
                      className="bi bi-cart-fill"
                      style={{ marginLeft: "20px" }}
                    ></i>
                  </Button>
                </div>
              }
              id="navbarScrollingDropdown"
            >
              {cartItems.length === 0 ? (
                <NavDropdown.Item>Cart is empty</NavDropdown.Item>
              ) : (
                <>
                  {cartItems.map((item, index) => (
                    <NavDropdown.Item key={index}>
                      {item.name} - ${item.price}
                      <Button
                        variant="outline-danger"
                        size="sm"
                        style={{ marginLeft: "5px" }}
                        onClick={() => handleRemoveFromCart(index)}
                      >
                        <i className="bi bi-x"></i>
                      </Button>
                    </NavDropdown.Item>
                  ))}
                  <NavDropdown.Divider />
                  <NavDropdown.Item disabled>Total: ${cartItems.reduce((acc, item) => acc + item.price, 0).toFixed(2)}</NavDropdown.Item>
                </>
              )}
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavScrollExample;