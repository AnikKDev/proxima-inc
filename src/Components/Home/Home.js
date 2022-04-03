import React from 'react';
import './Home.css';
import background from './pakata-goh-RDolnHtjVCY-unsplash.jpg';
const Home = () => {
    return (
        <div className='container home-container'>
            <div className="row gx-0 align-items-center">
                <div className="col-md-8 home-heading pe-5">
                    <h1>Proxima Laptop</h1>
                    <h3 style={{ color: "#ed7440" }}>The Best You Can Ask For</h3>
                    <p className='text-muted pe-4'>Buying a laptop that suits your style isn't a walk in the park at all. But we got you covered. Here we are providing the best one can ask for - <b>The Proxima</b>.</p>
                </div>
                <div className="col-md-4 home-img">
                    <img className='img-fluid' src={background} alt="" />
                </div>
            </div>
        </div>
    );
};

export default Home;