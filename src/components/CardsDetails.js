import React from 'react'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
const CardsDetails = () => {
    return (
        <div>
            <div className='container mt-4'>
                <div className="header mb-5"><h2>Product Detial</h2></div>
                <Row className="text-left mb-3" >
                    <Col xs={12} md={4}><img variant="top" src="https://b.zmtcdn.com/data/pictures/9/18857339/8f53919f1175c08cf0f0371b73704f9b_o2_featured_v2.jpg?output-format=webp" style={{ maxWidth: '100%' }} /></Col>
                    <Col xs={12} md={8}>
                        <h2>Product name</h2>
                        <p>$200</p>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                        <div class="product-count">
                            <label for="size">Quantity</label>
                            <form action="#" class="d-flex">
                                <div class="qtyminus btn btn-primary" style={{ borderRadius: "0" }}>-</div>
                                <input type="text" name="quantity" value="1" class="qty" style={{ borderRadius: "0", border: "1px solid #000", width: "40px", textAlign: "center" }} />
                                <div class="qtyplus btn btn-primary" style={{ borderRadius: "0" }}>+</div>
                            </form>
                            <br />
                            <Button variant="primary">Add to Cart</Button>
                        </div>

                    </Col>
                </Row>
            </div>
        </div >
    )
}
export default CardsDetails;