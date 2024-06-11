import { faCircleXmark } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useEffect } from 'react';
import Modal from 'react-modal';
import "./room.css";
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import useApi from '../../hooks/useApi';

const Room = ({ isOpen, setOpen, roomId }) => {
    const { data, loading, error, get } = useApi(`/Room/${roomId}`);

    useEffect(() => {
        get();
    }, [get, roomId]);

    const RoomFeature = ({ icon, text }) => (
        <div className="room-feature">
            <img src={icon} alt="" className="feature-icon" />
            <div className="feature-text">{text}</div>
        </div>
    );

    const RoomFeatures = () => {
        const features = [
            { icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/a23243cdb86cfef2210cc820f1d023dac40d1b0646839b15390b6e0b5683ee26?apiKey=7cdb7fcd050c4f1d8d8a5a08cb239f8c&", text: "Room" },
            { icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/a23243cdb86cfef2210cc820f1d023dac40d1b0646839b15390b6e0b5683ee26?apiKey=7cdb7fcd050c4f1d8d8a5a08cb239f8c&", text: "Courtyard View" },
            { icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/a23243cdb86cfef2210cc820f1d023dac40d1b0646839b15390b6e0b5683ee26?apiKey=7cdb7fcd050c4f1d8d8a5a08cb239f8c&", text: "Air Conditioning" },
            { icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/a23243cdb86cfef2210cc820f1d023dac40d1b0646839b15390b6e0b5683ee26?apiKey=7cdb7fcd050c4f1d8d8a5a08cb239f8c&", text: "Private Bathroom" },
            { icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/a23243cdb86cfef2210cc820f1d023dac40d1b0646839b15390b6e0b5683ee26?apiKey=7cdb7fcd050c4f1d8d8a5a08cb239f8c&", text: "Flat-screen TV" },
            { icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/a23243cdb86cfef2210cc820f1d023dac40d1b0646839b15390b6e0b5683ee26?apiKey=7cdb7fcd050c4f1d8d8a5a08cb239f8c&", text: "Minibar" },
            { icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/a23243cdb86cfef2210cc820f1d023dac40d1b0646839b15390b6e0b5683ee26?apiKey=7cdb7fcd050c4f1d8d8a5a08cb239f8c&", text: "Soundproofing" },
            { icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/a23243cdb86cfef2210cc820f1d023dac40d1b0646839b15390b6e0b5683ee26?apiKey=7cdb7fcd050c4f1d8d8a5a08cb239f8c&", text: "Free Wi-Fi" },
        ];

        return (
            <div className="room-features">
                {features.map((feature, index) => (
                    <RoomFeature key={index} icon={feature.icon} text={feature.text} />
                ))}
            </div>
        );
    };

    const RoomAmenities = () => {
        const amenities = [
            "Safe",
            "Upper floors accessible by stairs only",
            "Flat-screen TV",
            "Wake-up service",
            "Towels",
            "Socket near the bed",
            "TV",
            "Refrigerator",
            "Linen",
            "Minibar",
            "Carpeted",
            "Heating",
            "Wardrobe",
            "Cable channels",
            "Soundproofing",
            "Mosquito net",
            "Air conditioning",
            "Clothes rack",
            "Desk",
        ];

        return (
            <div className="room-amenities">
                <div className="amenities-list">
                    <ul className="amenities-column">
                        {amenities.slice(0, Math.ceil(amenities.length / 2)).map((amenity, index) => (
                            <li key={index} className="amenity-item">
                                {amenity}
                            </li>
                        ))}
                    </ul>
                    <ul className="amenities-column">
                        {amenities.slice(Math.ceil(amenities.length / 2)).map((amenity, index) => (
                            <li key={index} className="amenity-item">
                                {amenity}
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        );
    };

    function RoomDetails() {
        if (!data) {
            return null;
        }
        return (
            <>
                <article className="room-details">
                    <h1 className="room-title">{data?.title}</h1>
                    <div className="image-gallery">
                        <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/b92801e00fd32e49a033126703dc2afc34a3ad335939a3ca7db36637bcd961df?apiKey=7cdb7fcd050c4f1d8d8a5a08cb239f8c&" alt="" className="gallery-image" />
                        <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/b92801e00fd32e49a033126703dc2afc34a3ad335939a3ca7db36637bcd961df?apiKey=7cdb7fcd050c4f1d8d8a5a08cb239f8c&" alt="" className="gallery-image" />
                        <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/b92801e00fd32e49a033126703dc2afc34a3ad335939a3ca7db36637bcd961df?apiKey=7cdb7fcd050c4f1d8d8a5a08cb239f8c&" alt="" className="gallery-image" />
                        <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/5a2eb8b90ddb2f4ed65562e1d15cfc78273e6ea5a9dd23de3a1463ee2db61c66?apiKey=7cdb7fcd050c4f1d8d8a5a08cb239f8c&" alt="" className="gallery-image inactive" />
                        <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/5a2eb8b90ddb2f4ed65562e1d15cfc78273e6ea5a9dd23de3a1463ee2db61c66?apiKey=7cdb7fcd050c4f1d8d8a5a08cb239f8c&" alt="" className="gallery-image inactive" />
                    </div>
                    <RoomFeatures />
                    <h2 className="amenities-title">Room Amenities:</h2>
                    <RoomAmenities />
                </article>

                <style jsx>{`
                    .room-details {
                        display: flex;
                        margin-top: 6px;
                        flex-grow: 1;
                        flex-direction: column;
                    }

                    @media (max-width: 991px) {
                        .room-details {
                            max-width: 100%;
                            margin-top: 40px;
                        }
                    }

                    .room-title {
                        color: #111;
                        font: 700 32px Inter, sans-serif;
                    }

                    @media (max-width: 991px) {
                        .room-title {
                            max-width: 100%;
                        }
                    }

                    .image-gallery {
                        align-self: start;
                        display: flex;
                        margin-top: 17px;
                        gap: 13px;
                    }

                    .gallery-image {
                        aspect-ratio: 1.04;
                        object-fit: cover;
                        object-position: center;
                        width: 27px;
                    }

                    .gallery-image.inactive {
                        filter: grayscale(1);
                    }

                    .room-features {
                        display: flex;
                        margin-top: 28px;
                        font-size: 20px;
                        color: #000;
                        font-weight: 400;
                        gap: 34px;
                        flex-wrap: wrap;
                    }

                    @media (max-width: 991px) {
                        .room-features {
                            max-width: 100%;
                        }
                    }

                    .room-feature {
                        display: flex;
                        gap: 19px;
                        align-items: center;
                    }

                    .feature-icon {
                        width: 16px;
                        height: auto;
                    }

                    .feature-text {
                        font-family: Inter, sans-serif;
                    }

                    .amenities-title {
                        color: #111;
                        margin-top: 67px;
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
                        gap: 20px;
                    }

                    @media (max-width: 991px) {
                        .amenities-list {
                            flex-direction: column;
                            align-items: stretch;
                            gap: 0px;
                        }
                    }

                    .amenities-column {
                        display: flex;
                        flex-direction: column;
                        line-height: normal;
                        width: 50%;
                    }

                    @media (max-width: 991px) {
                        .amenities-column {
                            width: 100%;
                        }
                    }

                    .amenity-item {
                        color: #000;
                        font: 400 20px Inter, sans-serif;
                        margin-top: 10px;
                    }

                    @media (max-width: 991px) {
                        .amenity-item {
                            margin-top: 34px;
                        }
                    }
                `}</style>
            </>
        );
    }

    function RoomDetails2({ roomData }) {
        return (
            <article className="room-details">
                <h2 className="room-view-heading">View:</h2>
                <p className="room-view-description">{roomData.view}</p>
                <h2 className="room-size-heading">Room size {roomData.size} m²</h2>
                <p className="room-bed-description">{roomData.bedDescription}</p>
                <p className="room-bed-rating">{roomData.bedRating}</p>
                <p className="room-description">{roomData.description}</p>
                <h2 className="room-smoking-heading">Smoking:</h2>
                <p className="room-smoking-description">{roomData.smoking}</p>
            </article>
        );
    }

    function App() {
        const roomData = {
            view: "Courtyard View",
            size: 10,
            bedDescription: data?.description,
            bedRating: "Comfortable beds (rating 8.9) – based on 791 reviews",
            description: "Double room with private bathroom with shower, hairdryer, slippers, and free toiletries. This soundproof double room features air conditioning, a flat-screen TV with cable channels, a minibar, and a safe. The windows offer a view of the courtyard. This accommodation option has 1 bed.",
            smoking: "Non-smoking",
        };

        return (
            <>
                <RoomDetails2 roomData={roomData} />
                <style jsx>{`
                    .room-details {
                        display: flex;
                        flex-direction: column;
                        position: relative;
                    }
                    .room-view-heading {
                        color: #111;
                        margin: 38px 0 0 0px;
                        font: 400 32px Inter, sans-serif;
                    }
                    @media (max-width: 991px) {
                        .room-view-heading {
                            margin-top: 40px;
                        }
                    }
                    .room-view-description {
                        color: #000;
                        margin: 33px 0 0 0px;
                        font: 400 20px Inter, sans-serif;
                    }
                    .room-size-heading {
                        color: #111;
                        margin: 58px 20px 0 0;
                        font: 400 32px Inter, sans-serif;
                    }
                    @media (max-width: 991px) {
                        .room-size-heading {
                            margin: 40px 10px 0 0;
                        }
                    }
                    .room-bed-description {
                        color: #000;
                        margin: 26px 0 0 0px;
                        font: 400 20px Inter, sans-serif;
                    }
                    .room-bed-rating {
                        color: #000;
                        align-self: end;
                        margin: 27px 88px 0 0;
                        font: 400 20px Inter, sans-serif;
                    }
                    @media (max-width: 991px) {
                        .room-bed-rating {
                            max-width: 100%;
                            margin-right: 10px;
                        }
                    }
                    .room-description {
                        color: #000;
                        align-self: end;
                        margin: 27px 20px 0 0;
                        font: 400 20px Inter, sans-serif;
                    }
                    @media (max-width: 991px) {
                        .room-description {
                            max-width: 100%;
                            margin-right: 10px;
                        }
                    }
                    .room-smoking-heading {
                        color: #111;
                        margin: 55px 0 0 0px;
                        font: 400 32px Inter, sans-serif;
                    }
                    @media (max-width: 991px) {
                        .room-smoking-heading {
                            margin-top: 40px;
                        }
                    }
                    .room-smoking-description {
                        color: #000;
                        margin: 11px 0 0 0px;
                        font: 400 20px Inter, sans-serif;
                    }
                `}</style>
            </>
        );
    }

    return (
        <>
            <Modal   
                isOpen={isOpen}
                onRequestClose={() => setOpen(false)}
                contentLabel="Room Details"
                className="Modal"
                overlayClassName="Overlay"
            >
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
                            >
                                {data?.roomImages?.map((photo, i) => (
                                    <div key={i}>
                                        <img src={photo.url} alt="" />
                                    </div>
                                ))}
                            </Carousel>
                        </div>
                        <div className="right-column">
                            {RoomDetails()}
                            {App()}
                        </div>
                    </div>
                </div>
            </Modal>
        </>
    );
}

export default Room;
