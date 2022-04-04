import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import './NotFound.css';
const NotFound = () => {
    const location = useLocation();
    const navigate = useNavigate();
    return (
        <div className='error-container d-flex justify-content-center align-items-center'>
            <div>
                <h1>404</h1>
                <h3>This site can't be reached!</h3>
                <h6>Check if there is a typo in {location?.search + location?.pathname}</h6>
                <button onClick={() => navigate('/')} className='home-btn btn'>Take Me Home</button>
            </div>
        </div>
    );
};

export default NotFound;