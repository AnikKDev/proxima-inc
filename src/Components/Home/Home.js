import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Review from '../Review/Review';
import './Home.css';
import background from './pakata-goh-RDolnHtjVCY-unsplash.jpg';
const Home = () => {
    // customer review

    const [reviews, setReviews] = useState([]);
    useEffect(() => {
        fetch('review.json')
            .then(res => res.json())
            .then(data => setReviews(data))
    }, []);
    const navigate = useNavigate();
    // console.log(reviews);
    return (
        <div className='container home-container mb-5'>
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

            <div className='mt-5 pt-5'>
                <h2 className='text-center fw-bold'>Customer Reviews ({reviews.length})</h2>
                <div className='row mt-5'>
                    {
                        reviews.slice(0, 3).map(review => <Review review={review} key={review.id}></Review>)
                    }
                </div>

                <div className="d-flex justify-content-center">
                    <button onClick={() => navigate("/reviews")} className='btn see-all-btn'>See All Reviews</button>
                </div>
            </div>
        </div>
    );
};

export default Home;