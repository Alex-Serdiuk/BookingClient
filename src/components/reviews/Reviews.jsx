import React from 'react'
import './reviews.css';
import ReviewCards from './reviewCards/ReviewCards';

const Reviews = () => {
  const reviewsData = {
    overallRating: 9.8,
    totalReviews: 1200,
    categories: [
      { name: 'Staff', score: 9.6 },
      { name: 'Facilities', score: 10 },
      { name: 'Cleanliness', score: 9.9 },
      { name: 'Comfort', score: 9.7 },
      { name: 'Value for money', score: 8.9 },
      { name: 'Location', score: 9.5 },
      { name: 'Free Wi-Fi', score: 8.7 }
    ],
    reviews: [
      { name: 'Ihor', date: '8.09.2023', comment: 'SPA, location, beautiful view from the window, friendly staff' },
      { name: 'Maxim', date: '10.01.2023', comment: 'Liked absolutely everything - service, room, dolphin presentation. The staff is just great! Hotels in Ukraine should take an example. We will definitely come again!!!' },
      { name: 'Anna', date: '8.07.2023', comment: 'Very satisfied, clean, cozy, warm, comfortable!!! Breakfast is a separate love. Also convenient SPA and restaurant hours! 🙏 until 00.00' }
    ]
  };

  return (
    <div className="reviews">
      <div className="overall-rating">
        <div className="score">{reviewsData.overallRating}</div>
        <div className="rating-label">Excellent</div>
        <div className="total-reviews">{reviewsData.totalReviews} reviews</div>
        <div className="read-reviews">Read all reviews</div>
      </div>
      <div className="categories">
        {reviewsData.categories.map((category, index) => (
          <div className="category" key={index}>
            <div className="category-name">{category.name}</div>
            <div className="category-score">{category.score}</div>
            <div className="category-bar">
              <div className="filled-bar" style={{ width: `${category.score * 10}%` }}></div>
            </div>
          </div>
        ))}
      </div>
      <ReviewCards />
    </div>
  )
}

export default Reviews
