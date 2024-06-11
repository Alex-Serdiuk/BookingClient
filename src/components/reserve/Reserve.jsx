import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./reserve.css";
import { faCircleXmark } from "@fortawesome/free-solid-svg-icons";
import useApi from "../../hooks/useApi";
import { useContext, useState, useEffect } from "react";
import axios from "axios";
import { SearchContext } from "../../context/SearchContext";
import { useNavigate } from "react-router";

const Reserve = ({ setOpen, hotelId }) => {
    const [selectedRooms, setSelectedRooms] = useState([]);
    const { dates } = useContext(SearchContext);
    const { data, loading, error, get } = useApi(`/Hotel/GetRoomsByHotelId/${hotelId}`);
    
    useEffect(() => {
        get();
    }, [get, hotelId]);

    const getDatesInRange = (startDate, endDate) => {
        let currentDate = new Date(startDate);
        currentDate.setHours(0, 0, 0, 0);

        const end = new Date(endDate);
        end.setHours(0, 0, 0, 0);

        const dates = [];

        while (currentDate <= end) {
            dates.push(currentDate.getTime());
            currentDate = new Date(currentDate.setDate(currentDate.getDate() + 1));
        }

        return dates;
    };

    const alldates = getDatesInRange(dates[0].startDate, dates[0].endDate);

    const isAvailable = (roomNumber) => {
        const isFound = roomNumber.unavailableDates.some(unavailableDate => {
            const unavailableDayStart = new Date(unavailableDate.date);
            unavailableDayStart.setHours(0, 0, 0, 0);  // Нормалізація до початку дня
            const unavailableDayTime = unavailableDayStart.getTime();

            return alldates.some(date => date === unavailableDayTime);
        });

        return !isFound;
    };

    const handleSelect = (e) => {
        const checked = e.target.checked;
        const value = e.target.value;
        setSelectedRooms(
            checked
                ? [...selectedRooms, value]
                : selectedRooms.filter((item) => item !== value)
        );
    };

    const navigate = useNavigate();

    const handleClick = async () => {
        try {
            await Promise.all(
                selectedRooms.map((roomId) => {
                    const res = axios.put(`/RoomNumber/availability/${roomId}`, {
                        dates: alldates.map(timestamp => new Date(timestamp).toISOString()),
                    });
                    return res.data;
                })
            );
            setOpen(false);
            navigate("/");
        } catch (err) {
            console.error(err);
        }
    };

    return (
        <div className="reserve">
            <div className="rContainer">
                <FontAwesomeIcon 
                    icon={faCircleXmark} 
                    className="rClose" 
                    onClick={() => setOpen(false)}
                />
                <span>Select your rooms:</span>
                {loading ? "Loading..." : (
                    data && data.map(item => (
                        <div className="rItem" key={item.id}>
                            <div className="rItemInfo">
                                <div className="rTitle">{item.title}</div>
                                <div className="rDesc">{item.description}</div>
                                <div className="rMax">
                                    Max people: <b>{item.maxPeople}</b>
                                </div>
                                <div className="rPrice">{item.price}</div>
                            </div>
                            <div className="rSelectRooms">
                                {item.roomNumbers.map((roomNumber) => (
                                    <div className="room" key={roomNumber.id}>
                                        <label>{roomNumber.number}</label>
                                        <input
                                            type="checkbox"
                                            value={roomNumber.id}
                                            onChange={handleSelect}
                                            disabled={!isAvailable(roomNumber)}
                                        />
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))
                )}
                <button 
                    onClick={handleClick} 
                    className="rButton"
                >
                    Reserve Now!
                </button>
            </div>
        </div>
    );
}

export default Reserve;
