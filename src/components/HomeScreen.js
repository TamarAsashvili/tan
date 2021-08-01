import React from 'react'
import Product from './Product'
import { Row, Col, Container } from 'react-bootstrap'
import products from '../server.js'


const HomeScreen = () => {
    console.log(products)

    return (
        <>
            <h1>Latest Products</h1>
            <Container>
                <Row>
                    {products.map((product) => (
                        <Col sm={12} md={6} lg={4} xl={3} key={product._id}>
                            <Product product={product} />
                        </Col>
                    ))}
                </Row>
            </Container>
        </>)

}

export default HomeScreen;