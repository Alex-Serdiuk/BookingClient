import React from 'react'
import './reviewCards.css';

const ReviewCards = () => {

    function ReviewCard({ avatarSrc, name, date, review, altText }) {
        return (
          <article className="review-card">
            <div className="review-header">
              <img loading="lazy" src={avatarSrc} alt={altText} className="avatar" />
              <div className="review-info">
                <p className="reviewer-name">{name}</p>
                <time className="review-date">{date}</time>
              </div>
            </div>
            <p className="review-text">{review}</p>
            <a href="/" className="details-link">Докладніше...</a>
          </article>
        );
      }

      const reviews = [
        {
          avatarSrc: "https://cdn.builder.io/api/v1/image/assets/TEMP/d03121f7d9f112593e510d65641ca8170b19379d31825b673ce79faecdace8d0?apiKey=7cdb7fcd050c4f1d8d8a5a08cb239f8c&",
          name: "Ihor",
          date: "8.09.2023",
          review: "СПА, місце розташування, гарний вид з вікна, привітливий персонал",
          altText: "Avatar of Ihor",
        },
        {
          avatarSrc: "https://cdn.builder.io/api/v1/image/assets/TEMP/e70aa89ddf0a2bf714c0ffc074e77463a838400c62f219567a08634dcb5300c3?apiKey=7cdb7fcd050c4f1d8d8a5a08cb239f8c&",
          name: "Максим",
          date: "10.01.2023",
          review: "Сподобалося повністю все - обслуговування, номер, представлення дельфінів, номер. Персонал просто супер! Готелям України треба брати приклад. Обов'язково ще приїдемо !!!",
          altText: "Avatar of Максим",
        },
        {
          avatarSrc: "https://cdn.builder.io/api/v1/image/assets/TEMP/391c944aa53f0a22882197aad2264e07fad046a734ec3e6171db0dc794f7258c?apiKey=7cdb7fcd050c4f1d8d8a5a08cb239f8c&",
          name: "Anna",
          date: "8.07.2023",
          review: "Дуже задоволена, чисто, затишно, тепло, комфортно!!! Завтраки то окрема любовь🩷 Також зручні часи роботи СПА і ресторану!🙏🏽до 00.00",
          altText: "Avatar of Anna",
        },
      ];
      

  return (
    <>
      <main className="reviews-container">
        <section className="reviews-grid">
          {reviews.map((review, index) => (
            <ReviewCard key={index} {...review} />
          ))}
        </section>
        <a href="/" className="all-reviews-link">Читати усі відгуки</a>
      </main>
      <style jsx>{`
        
      `}</style>
    </>
  )
}

export default ReviewCards