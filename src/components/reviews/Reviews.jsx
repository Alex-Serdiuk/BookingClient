import React from 'react'
import './reviews.css';
import ReviewCards from './reviewCards/ReviewCards';

const Reviews = () => {
  const reviewsData = {
    overallRating: 9.8,
    totalReviews: 1200,
    categories: [
      { name: 'Персонал', score: 9.6 },
      { name: 'Зручності', score: 10 },
      { name: 'Чистота', score: 9.9 },
      { name: 'Комфорт', score: 9.7 },
      { name: 'Співвідношення ціна/якість', score: 8.9 },
      { name: 'Розташування', score: 9.5 },
      { name: 'Безкоштовний Wi-Fi', score: 8.7 }
    ],
    reviews: [
      { name: 'Ігор', date: '8.09.2023', comment: 'СПА, місце розташування, гарний вид з вікна, привітливий персонал' },
      { name: 'Максим', date: '10.01.2023', comment: 'Сподобалося повністю все - обслуговування, номер, представлення дельфінів, номер. Персонал просто супер! Готелям України треба брати приклад. Обов\'язково ще прийдемо !!!' },
      { name: 'Анна', date: '8.07.2023', comment: 'Дуже задоволена, чисто, затишно, тепло, комфортно!!! Сніданки то окрема любов Також зручні часи роботи СПА і ресторану! 🙏до 00.00' }
    ]
  };
  return (
    <div className="reviews">
      <div className="overall-rating">
        <div className="score">{reviewsData.overallRating}</div>
        <div className="rating-label">Відмінно</div>
        <div className="total-reviews">{reviewsData.totalReviews} відгуків</div>
        <div className="read-reviews">Читати всі відгуки</div>
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
      {/* <div className="individual-reviews">
        {reviewsData.reviews.map((review, index) => (
          <div className="review" key={index}>
            <div className="review-header">
              <div className="review-name">{review.name}</div>
              <div className="review-date">{review.date}</div>
            </div>
            <div className="review-comment">{review.comment}</div>
            <div className="read-more">Докладніше...</div>
          </div>
        ))}
      </div>
      <div className="read-all-reviews">Читати усі відгуки</div> */}
      <ReviewCards/>
    </div>
  )
}

export default Reviews