import React from 'react';
import { useParams } from 'react-router';

const Booking = () => {

    const { servesId } = useParams()
    return (
        <div>
            <h3>Congratulation you are booked!! {servesId}</h3>
        </div>
    );
};

export default Booking;