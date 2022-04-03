import React from 'react';
import { Card } from 'react-bootstrap';
import './Review.css';
const Review = ({ review }) => {
    const { comment, name, rating } = review;
    return (
        <div className=" col-md-4 mb-5 d-flex justify-content-center">
            <Card className="review-container" style={{ width: '18rem' }}>
                <Card.Body>
                    <Card.Title className="name">{name}</Card.Title>

                    <Card.Text className="comments">
                        {comment}
                    </Card.Text>
                    <Card.Subtitle className="mb-2 text-muted rating">Rating: {rating}</Card.Subtitle>
                </Card.Body>
            </Card>
        </div>
    );
};

export default Review;