import { faCircleXmark } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react'
import "./room.css";
import useFetch from '../../hooks/useFetch';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";

const Room = ({setOpen, roomId}) => {
    const {data, loading, error} = useFetch(`/Room/${roomId}`);
  // builder******************************************************
    function StarIcon({ filled }) {
        return (
          <img
            loading="lazy"
            src={filled ? "https://cdn.builder.io/api/v1/image/assets/TEMP/b92801e00fd32e49a033126703dc2afc34a3ad335939a3ca7db36637bcd961df?apiKey=7cdb7fcd050c4f1d8d8a5a08cb239f8c&" : "https://cdn.builder.io/api/v1/image/assets/TEMP/5a2eb8b90ddb2f4ed65562e1d15cfc78273e6ea5a9dd23de3a1463ee2db61c66?apiKey=7cdb7fcd050c4f1d8d8a5a08cb239f8c&"}
            className="star-icon"
          />
        );
      }
      
      function RoomFeature({ icon, text }) {
        return (
          <div className="room-feature">
            <img loading="lazy" src={icon} className="feature-icon" />
            <div className="feature-text">{text}</div>
          </div>
        );
      }

      function MyComponent() {
        const stars = [true, true, true, true, false];
        const roomFeatures = [
          { icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/ca5189d7a623700cb6117d6cc0e3f3e0c5de981ea6ab5872db0915f0098e07cc?apiKey=7cdb7fcd050c4f1d8d8a5a08cb239f8c&", text: "Номер" },
          { icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/ca5189d7a623700cb6117d6cc0e3f3e0c5de981ea6ab5872db0915f0098e07cc?apiKey=7cdb7fcd050c4f1d8d8a5a08cb239f8c&", text: "Кондиціонер" },
          { icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/d4a264c8f0f25ea621d45a92a9043f6b65cfd9bb88b1cfdead213b622aaa114b?apiKey=7cdb7fcd050c4f1d8d8a5a08cb239f8c&", text: "Вид на внутрішній двір" },
          { icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/d4a264c8f0f25ea621d45a92a9043f6b65cfd9bb88b1cfdead213b622aaa114b?apiKey=7cdb7fcd050c4f1d8d8a5a08cb239f8c&", text: "Власна ванна кімната" },
          { icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/ca5189d7a623700cb6117d6cc0e3f3e0c5de981ea6ab5872db0915f0098e07cc?apiKey=7cdb7fcd050c4f1d8d8a5a08cb239f8c&", text: "Телевізор з плоским екраном" },
          { icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/d4a264c8f0f25ea621d45a92a9043f6b65cfd9bb88b1cfdead213b622aaa114b?apiKey=7cdb7fcd050c4f1d8d8a5a08cb239f8c&", text: "Міні-бар" },
          { icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/ca5189d7a623700cb6117d6cc0e3f3e0c5de981ea6ab5872db0915f0098e07cc?apiKey=7cdb7fcd050c4f1d8d8a5a08cb239f8c&", text: "Звукоізоляція" },
          { icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/d4a264c8f0f25ea621d45a92a9043f6b65cfd9bb88b1cfdead213b622aaa114b?apiKey=7cdb7fcd050c4f1d8d8a5a08cb239f8c&", text: "Безкоштовний Wi-Fi" },
        ];
      
        const roomAmenities = [
          "Сейф",
          "На верхні поверхи можна піднятися тільки сходами",
          "Телевізор з плоским екраном",
          "Послуга дзвінок-\"будильник\"",
          "Рушники",
          "Розетка поблизу з ліжком",
          "Телевізор",
          "Холодильник",
          "Білизна",
          "Міні-бар",
          "Килимове покриття",
          "Опалення",
          "Гардеробна",
          "Кабельні канали",
          "Звукоізоляція",
          "Москітна сітка",
          "Кондиціонер",
          "Вішалка для одягу",
          "Робочий стіл",
        ];
      
        return (
          <>
            <article className="room-details">
              {/* <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/e8cd4fed-b66d-4603-8fa8-8369025ea802?apiKey=7cdb7fcd050c4f1d8d8a5a08cb239f8c&" className="room-image" /> */}
              <h1 className="room-title">
                Двомісний номер економ-класу з мансардою
              </h1>
              <div className="star-rating">
                {stars.map((filled, index) => (
                  <StarIcon key={index} filled={filled} />
                ))}
              </div>
              <section className="room-features">
                {roomFeatures.map(({ icon, text }, index) => (
                  <RoomFeature key={index} icon={icon} text={text} />
                ))}
              </section>
              <h2 className="amenities-title">Зручності у номері:</h2>
              <section className="room-amenities">
                <ul className="amenities-list">
                  {roomAmenities.map((amenity, index) => (
                    <li key={index}>{amenity}</li>
                  ))}
                </ul>
              </section>
              <h2 className="bathroom-title">У вашій власній ванній кімнаті:</h2>
            </article>
            <style jsx>{`
              .room-details {
                display: flex;
                flex-direction: column;
                margin-bottom: -1px;
              }
      
              @media (max-width: 991px) {
                .room-details {
                  max-width: 100%;
                  margin-top: 40px;
                }
              }
      
              .room-image {
                aspect-ratio: 1;
                object-fit: cover;
                width: 100%;
                border: 1px solid rgba(0, 0, 0, 1);
                align-self: flex-end;
              }
      
              .room-title {
                color: #111;
                margin-top: 5px;
                font: 700 32px Inter, sans-serif;
              }
      
              @media (max-width: 991px) {
                .room-title {
                  max-width: 100%;
                }
              }
      
              .star-rating {
                align-self: flex-start;
                display: flex;
                margin-top: 17px;
                gap: 13px;
              }
      
              .star-icon {
                width: 27px;
                height: 27px;
                object-fit: contain;
              }
      
              .room-features {
                display: flex;
                flex-wrap: wrap;
                margin-top: 28px;
                margin
                font-size: 20px;
                color: #000;
                font-weight: 400;
                padding: 0 80px 0 11px;
                gap: 14px 20px;
              }
      
              @media (max-width: 991px) {
                .room-features {
                  max-width: 100%;
                  padding-right: 20px;
                }
              }
      
              @media (max-width: 640px) {
                .room-features {
                  margin-right: auto;
                }
              }
      
              .room-feature {
                display: flex;
                gap: 20px;
                white-space: nowrap;
              }
      
              @media (max-width: 991px) {
                .room-feature {
                  white-space: initial;
                }
              }
      
              .feature-icon {
                width: 16px;
                height: 16px;
                object-fit: contain;
                fill: #ff4a00;
                align-self: flex-start;
                margin-top: 4px;
              }
      
              .feature-text {
                font-family: Inter, sans-serif;
                flex-grow: 1;
                flex-basis: auto;
              }
      
              .amenities-title {
                color: #111;
                margin-top: 20px;
                font: 400 32px Inter, sans-serif;
              }
      
              @media (max-width: 991px) {
                .amenities-title {
                  max-width: 100%;
                  margin-top: 40px;
                }
              }
      
              .room-amenities {
                margin-top: 24px;
              }
      
              @media (max-width: 991px) {
                .room-amenities {
                  max-width: 100%;
                }
              }
      
              .amenities-list {
                display: flex;
                flex-wrap: wrap;
                gap: 20px;
                color: #000;
                font: 400 20px Inter, sans-serif;
              }
      
              @media (max-width: 991px) {
                .amenities-list {
                  flex-direction: column;
                  align-items: stretch;
                  gap: 0px;
                }
              }
      
              .amenities-list li {
                width: calc(50% - 10px);
                margin-top: 34px;
              }
      
              @media (max-width: 991px) {
                .amenities-list li {
                  width: 100%;
                }
              }
      
              .bathroom-title {
                color: #111;
                margin-top: 57px;
                font: 400 32px Inter, sans-serif;
              }
      
              @media (max-width: 991px) {
                .bathroom-title {
                  max-width: 100%;
                  margin-top: 40px;
                }
              }

              
            `}</style>
          </>
        );
      }

    return (
    <>
    <div className='roomModal'>
        <div className="modal-content">
            <FontAwesomeIcon 
                icon={faCircleXmark} 
                className="roomClose" 
                onClick={() => setOpen(false)}
            />
            <div className="modal-container">
                <div className="left-column">
                <Carousel dynamicHeight={true} 
                showArrows={true}
                // thumbWidth={132}
                // autoPlay interval={2000} infiniteLoop
                >
                      {data.roomImages?.map((photo, i) =>(<div key={i}>
                        <img src={photo.url} alt="" />
                      </div>
                      ))}
                    </Carousel>
                </div>
                <div className="right-column">
                    <MyComponent/>
                </div>
            </div>
        
        </div>
    </div>
    
</>
    
  )
}

export default Room