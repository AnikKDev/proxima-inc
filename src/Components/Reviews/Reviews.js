import React, { useEffect, useState } from 'react';
import EachReview from '../EachReview/EachReview';

const Reviews = () => {
    const [eachReviews, setEachReviews] = useState([]);
    useEffect(() => {
        fetch('review.json')
            .then(res => res.json())
            .then(data => setEachReviews(data))
    }, []);
    return (
        <div>
            <h2 className="text-center mt-3">What Our Customer Says!</h2>
            <div className="row mt-5">
                {eachReviews.map(eachReview => <EachReview eachReview={eachReview} key={eachReview.id}></EachReview>)}
            </div>
        </div>
    );
};

export default Reviews;