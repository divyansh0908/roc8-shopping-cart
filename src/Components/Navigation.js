import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import Button from "react-bootstrap/Button";
import { Badge } from "react-bootstrap";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

const Navigationbar = () => {
  const cart = useSelector((state) => state.cart);
  const { items, totalQuantity } = cart;

  return (
    <Navbar expand="lg">
      <Container fluid>
        <Link to="/">
          <Navbar.Brand href="#home">
            <img
              src={require("../Assets/logo.png")}
              width="100px"
              className="d-inline-block align-top logo"
              alt="React Bootstrap logo"
            />
          </Navbar.Brand>
        </Link>
        <Navbar.Toggle />
        <Navbar.Collapse>
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: "100px" }}
          ></Nav>
          <Link to="/addproduct">
<Button variant="outline-success" >Add Product</Button></Link>
          <Link to="/cart">
            <Button variant="primary">
              Go To Cart <Badge bg="danger">{totalQuantity}</Badge>
              <span className="visually-hidden">unread messages</span>
            </Button>
          </Link>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Navigationbar;
