import React from 'react';
import { Card, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Service = (props) => {
    const { img, name, description, price, id } = props.serves
    return (
        <Col>
            <Card>
                <img src={img} alt="" />
                <Card.Title>{name}</Card.Title>
                <h6>Price: $ {price}</h6>
                <p>{description.slice(0, 80)}</p>
                <Link to={`/booking/${id}`}>
                    <button className="btn btn-warning">BOOKING {name}</button>
                </Link>
            </Card>
        </Col>
    );
};

export default Service;