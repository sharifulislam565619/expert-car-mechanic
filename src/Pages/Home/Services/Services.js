import React, { useEffect, useState } from 'react';
import { Container, Row } from 'react-bootstrap';
import Service from '../Service/Service';

const Services = () => {
    const [services, setServices] = useState([])

    useEffect(() => {
        fetch('services.json')
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])
    return (
        <div id="services">
            <h2 className="mt-3 text-success">Our services</h2>
            <hr className="w-25 mx-auto" />
            <Container>
                <Row xs={1} md={3} className="g-5">
                    {
                        services.map(serves => <Service
                            key={serves.id}
                            serves={serves}
                        ></Service>)
                    }
                </Row>
            </Container>
        </div>
    );
};

export default Services;