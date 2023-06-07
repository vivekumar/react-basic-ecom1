import React, { useEffect, useState } from 'react'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import { useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';

import { incNumber } from '../redux/actions/action';
import { decNumber } from '../redux/actions/action';
const CardsDetails = () => {

    const [data, setData] = useState([]);
    //console.log(data);
    const { id } = useParams();


    const getdata = useSelector((state) => state.cartreducer.carts)
    const incDec = useSelector((state) => state.incDecreducer)
    //console.log(incDec);
    const compare = () => {
        let comparedata = getdata.filter((e) => {
            return e.id == id;
        });
        setData(comparedata);
    }

    const dispatch = useDispatch();
    const incriment = () => {
        dispatch(incNumber());
    }
    const decriment = () => {
        dispatch(decNumber());
    }
    useEffect(() => {
        compare();
    }, [id])

    return (
        <div>
            <div className='container mt-4'>
                <div className="header mb-5"><h2>Product Detial</h2></div>
                {
                    data.map((ele, i) => {
                        return (
                            <Row className="text-left mb-3" key={i}>
                                <Col xs={12} md={4}><img variant="top" src="https://b.zmtcdn.com/data/pictures/9/18857339/8f53919f1175c08cf0f0371b73704f9b_o2_featured_v2.jpg?output-format=webp" style={{ maxWidth: '100%' }} /></Col>
                                <Col xs={12} md={8}>
                                    <h2>{ele.rname}</h2>
                                    <p>${ele.price}</p>
                                    <p>{ele.somedata}</p>
                                    <div className="product-count">
                                        <label >Quantity</label>
                                        <form action="#" className="d-flex">
                                            <div className="qtyminus btn btn-primary" onClick={() => decriment()} style={{ borderRadius: "0" }}>-</div>
                                            <input type="text" name="quantity" value={incDec} className="qty" style={{ borderRadius: "0", border: "1px solid #000", width: "40px", textAlign: "center" }} />
                                            <div className="qtyplus btn btn-primary" onClick={() => incriment()} style={{ borderRadius: "0" }}>+</div>
                                        </form>
                                        <br />
                                        <Button variant="primary">Add to Cart</Button>
                                    </div>

                                </Col>
                            </Row>
                        )
                    })
                }

            </div>
        </div >
    )
}
export default CardsDetails;