import React, { useEffect, useState } from 'react';
import useReviews from '../../Hooks/useReviews';
import EachReview from '../EachReview/EachReview';

const ReviewRoute = () => {
    const [eachReviews, setEachReviews] = useReviews();

    return (
        <div>
            <h2 className="text-center mt-3">What Our Customer Says!</h2>
            <div className="row mt-5 gx-0">
                {eachReviews.map(eachReview => <EachReview eachReview={eachReview} key={eachReview.id}></EachReview>)}
            </div>
        </div>
    );
};

export default ReviewRoute;