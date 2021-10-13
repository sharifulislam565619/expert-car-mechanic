import React from 'react';
import { Card, Col } from 'react-bootstrap';

const Expert = (props) => {
    const { img, name, expertize } = props.expert
    return (
        <Col>
            <Card>
                <Card.Img src={img}></Card.Img>
                <Card.Title>{name}</Card.Title>
                <Card.Text className="text-primary">{expertize}</Card.Text>
            </Card>
        </Col>
    );
};

export default Expert;