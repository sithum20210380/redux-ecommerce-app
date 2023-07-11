import React, { useState, useEffect } from "react";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

const Product = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch('https://fakestoreapi.com/products')
        .then(data => data.json())
        .then(result => setProducts(result))
        .catch(error => console.log(error));
    }, []);

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
            <Button variant="primary">Add to cart</Button>
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
