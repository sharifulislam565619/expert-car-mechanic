import React from 'react';
import { Container, Row } from 'react-bootstrap';

import mechanic1 from '../../../images/mechanic/mechanic-1.jpg';
import mechanic2 from '../../../images/mechanic/mechanic-2.jpg'
import mechanic3 from '../../../images/mechanic/mechanic-3.jpg'
import mechanic4 from '../../../images/mechanic/mechanic-4.jpg'
import Expert from '../Expert/Expert';


const experts = [
    {
        img: mechanic1,
        name: 'Andrew Smith',
        expertize: '-Engine Expert-'
    },
    {
        img: mechanic2,
        name: 'John Anderson',
        expertize: '-Polish Expert-'
    },
    {
        img: mechanic4,
        name: 'Sakib Anderson',
        expertize: '-Alrounder Expert-'
    }
]



const Experts = () => {
    return (
        <div id="about">
            <h2 className="mt-3 text-success">Our Experts</h2>
            <hr className="w-25 mx-auto" />
            <Container>
                <Row xs={1} md={3} className="g-4">
                    {
                        experts.map(expert => <Expert
                            key={expert.name}
                            expert={expert}
                        ></Expert>)
                    }
                </Row>
            </Container>
        </div>
    );
};

export default Experts;