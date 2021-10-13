import React from 'react';
import { Link } from 'react-router-dom';
import img404 from '../../images/404.png'

const NotFound = () => {
    return (
        <div>
            <img className="w-50" src={img404} alt="" /><br />
            <Link to="/home"><button>Go back</button></Link>
        </div>
    );
};

export default NotFound;