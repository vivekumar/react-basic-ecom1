import React, { useEffect, useState } from "react";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Badge from '@mui/material/Badge';
import { useDispatch, useSelector } from "react-redux";
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Table from 'react-bootstrap/esm/Table';
import { DEL } from '../redux/actions/action';
import { NavLink } from "react-bootstrap";
import { Link } from "react-router-dom";
const Header = () => {

    const [price, setPrice] = useState(0);
    const [anchorEl, setAnchorEl] = useState(null);

    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };

    const getdata = useSelector((state) => state.cartreducer.carts)

    const dispatch = useDispatch();
    const del = (id) => {
        dispatch(DEL(id))
    }

    const total = () => {
        let price = 0
        getdata.map((ele, k) => {
            price = ele.price + price
        })
        setPrice(price)
    }
    useEffect(() => {
        total()
    }, [total])
    return (
        <>
            <Navbar bg="dark" variant="dark">
                <Container>
                    <Navbar.Brand as={Link} to={`/`} ><i className="fa-solid fa-cart-shopping fa-2xl" style={{ color: "#f4f80d" }}></i> Vcart</Navbar.Brand>
                    <Nav className="me-auto">
                        <Nav.Link as={Link} to={`/`} >Home</Nav.Link>
                        <Nav.Link href="#features">About</Nav.Link>
                        <Nav.Link href="#pricing">Product</Nav.Link>
                    </Nav>
                    <Badge badgeContent={getdata.length} color="primary"
                        id="basic-button"
                        aria-controls={open ? 'basic-menu' : undefined}
                        aria-haspopup="true"
                        aria-expanded={open ? 'true' : undefined}
                        onClick={handleClick}

                    >

                        <i className="fa-solid fa-cart-shopping text-light fa-xl"></i>
                    </Badge>



                </Container>
                <Menu
                    id="basic-menu"
                    className="mt-3"
                    anchorEl={anchorEl}
                    open={open}
                    onClose={handleClose}
                    MenuListProps={{
                        'aria-labelledby': 'basic-button',
                    }}
                >
                    {
                        getdata.length ?
                            <div className='card_details' style={{ width: "24rem", padding: 10 }}>
                                <Table>
                                    <thead>
                                        <tr>
                                            <th>Photo</th>
                                            <th>Restaurant Name</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {
                                            getdata.map((e, i) => {
                                                return (

                                                    <tr key={i}>
                                                        <td>
                                                            <Nav.Link as={Link} to={`/cart/${e.id}`} onClick={handleClose} ><img src={e.imgdata} style={{ width: "5rem", height: "5rem" }} alt="" /></Nav.Link>
                                                        </td>
                                                        <td>
                                                            <p>{e.rname}</p>
                                                            <p>Price : ₹{e.price}</p>
                                                            <p>Quantity : {e.qnty}</p>
                                                            <p style={{ color: "red", fontSize: 20, cursor: "pointer" }} onClick={() => del(e.id)}>
                                                                <i className='fas fa-trash smalltrash'></i>
                                                            </p>
                                                        </td>

                                                        <td className='mt-5' style={{ color: "red", fontSize: 20, cursor: "pointer" }} onClick={() => del(e.id)}>
                                                            <i className='fas fa-trash largetrash'></i>
                                                        </td>
                                                    </tr>

                                                )
                                            })
                                        }
                                        <tr>
                                            <td className='text-center' colSpan="3">
                                                Total :₹ {price}
                                            </td>
                                        </tr>
                                    </tbody>

                                </Table>
                            </div> :
                            <div className='card_details d-flex justify-content-center align-items-center' style={{ width: "24rem", padding: 10, position: "relative" }}>
                                <i className='fas fa-close smallclose'
                                    onClick={handleClose}
                                    style={{ position: "absolute", top: 2, right: 20, fontSize: 23, cursor: "pointer" }}></i>
                                <p style={{ fontSize: 22 }}>Your carts is empty</p>
                                <img src="./cart.gif" alt="" className='emptycart_img' style={{ width: "5rem", padding: 10 }} />
                            </div>
                    }
                </Menu>
            </Navbar>
        </>
    )
}
export default Header;