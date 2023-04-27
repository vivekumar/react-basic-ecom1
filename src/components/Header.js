import React from "react";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Badge from '@mui/material/Badge';
import { useSelector } from "react-redux";
const Header = () => {

    const getdata = useSelector((state) => state.cartreducer)
    console.log(getdata);
    return (
        <>
            <Navbar bg="dark" variant="dark">
                <Container>
                    <Navbar.Brand href="#home"><i className="fa-solid fa-cart-shopping fa-2xl" style={{ color: "#f4f80d" }}></i> Vcart</Navbar.Brand>
                    <Nav className="me-auto">
                        <Nav.Link href="#home">Home</Nav.Link>
                        <Nav.Link href="#features">About</Nav.Link>
                        <Nav.Link href="#pricing">Product</Nav.Link>
                    </Nav>
                    <Badge badgeContent={4} color="primary">

                        <i className="fa-solid fa-cart-shopping text-light fa-xl"></i>
                    </Badge>
                </Container>
            </Navbar>
        </>
    )
}
export default Header;