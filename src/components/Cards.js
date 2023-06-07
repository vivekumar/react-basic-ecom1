import React, { useState } from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import CardData from './CardsData';
import { useDispatch } from 'react-redux';
import { ADD } from '../redux/actions/action';

const Cards = () => {
    const [data, setData] = useState(CardData);
    //console.log(data);
    const arrayChunk = (arr, n) => {
        const array = arr.slice();
        const chunks = [];
        while (array.length) chunks.push(array.splice(0, n));
        return chunks;
    };

    const dispatch = useDispatch();
    const send = (items) => {
        //console.log(items);
        dispatch(ADD(items));
    }
    return (
        <div>
            <div className='container mt-4'>
                <div className="header mb-5"><h2>Product List</h2></div>

                {
                    arrayChunk(data, 4).map((row, id) => {
                        return (
                            <Row className="mb-3 " key={id}>
                                {row.map((col, i) => (

                                    <Col key={i}>
                                        <Card >
                                            <Card.Img variant="top" src={col.imgdata} style={{ maxHeight: '200px', maxWidth: 'auto' }} />
                                            <Card.Body>
                                                <Card.Title>{col.rname}</Card.Title>
                                                <Card.Text>
                                                    {col.somedata}
                                                </Card.Text>
                                                <Button variant="primary" onClick={() => send(col)}><i className="fa-solid fa-cart-shopping text-light fa-xl"></i></Button>
                                            </Card.Body>
                                        </Card>
                                    </Col>
                                ))}
                            </Row>
                        )
                    })
                }



            </div>
        </div>
    )
}
export default Cards;