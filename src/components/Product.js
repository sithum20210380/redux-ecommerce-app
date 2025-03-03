import React, { useState, useEffect } from "react";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Alert from 'react-bootstrap/Alert';
import { useDispatch, useSelector } from "react-redux";
import { add } from "../store/CartSlice";
import { getProducts } from "../store/ProductSlice";
import StatusCode from "../utils/StatusCode";

const Product = () => {
    const dispatch = useDispatch();
    const {data: products,status} = useSelector(state => state.products);

    useEffect(() => {
        dispatch(getProducts());
    }, []);

    if (status === StatusCode.LOADING) {
        return <p>Loading...</p>
    }

    if(status === StatusCode.ERROR){
        return <Alert key="danger" variant="danger">Something went wrong! Try again later!</Alert>
    }

    const addToCart = (product) => {
        dispatch(add(product))
    };

    const cards = products.map(product => (
        <div className="col-md-3" style={{marginBottom: '10px'}} >
            <Card key={product.id} className="h-100">
                <div className="text-center">
                <Card.Img variant="top" src={product.image} style={{width : '100px', height : '130px'}} />
                </div>
            <Card.Body>
                <Card.Title>{product.title}</Card.Title>
                <Card.Text>
                INR: {product.price}
                </Card.Text>
            </Card.Body>
            <Card.Footer style={{background: 'white'}}>
            <Button variant="primary" onClick={() => addToCart(product)}>Add to cart</Button>
            </Card.Footer>
            </Card>
        </div>
    ));

    return (
        <div>
            <h1>Redux E-Commerce App</h1>
            <div className="row">
                {cards}
            </div>
        </div>
    );
}

export default Product;
