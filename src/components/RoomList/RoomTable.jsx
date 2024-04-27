import { useContext, useEffect, useState } from "react";
import { SearchContext } from "../../context/SearchContext";
import useFetch from "../../hooks/useFetch";
import "./roomTable.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";

const RoomTable = ({hotelId}) => 
{
  const [selectedRoomNumbers, setSelectedRoomNumbers] = useState([]);
  const [availableRoomNumbers, setAvailableRoomNumbers] = useState([]);
  const {data, loading, error} = useFetch(`/Hotel/GetRoomsByHotelId/${hotelId}`);
  const { dates } = useContext(SearchContext);
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();

  const getDatesInRange = (startDate, endDate) => {
    // const start = new Date(startDate);
    // const end = new Date(endDate);

    // const date = new Date(start.getTime());

    // const dates = [];

    // while (date <= end) {
    //   dates.push(new Date(date).getTime());
    //   date.setDate(date.getDate() + 1);
    // }

    // return dates;
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

  const MILLISECONDS_PER_DAY = 1000 * 60 * 60 * 24;
  function dayDifference(date1, date2) {
    const timeDiff = Math.abs(date2.getTime() - date1.getTime());
    const diffDays = Math.ceil(timeDiff / MILLISECONDS_PER_DAY);
    return diffDays;
  }

  const days = dayDifference(dates[0].endDate, dates[0].startDate);

  const isAvailable = (roomNumber) => {
    // const isFound = roomNumber.unavailableDates.some((unavailableDate) =>
    //   alldates.includes(new Date(unavailableDate.date).getTime())
    // );
    const isFound = roomNumber.unavailableDates.some(unavailableDate => {
      const unavailableDayStart = new Date(unavailableDate.date);
      unavailableDayStart.setHours(0, 0, 0, 0);  // Нормалізація до початку дня
      const unavailableDayTime = unavailableDayStart.getTime();
  
      return alldates.some(date => date === unavailableDayTime);
    });

    return !isFound;
  };

  useEffect(()=>{
    if (!loading && !error && data) {
      setAvailableRoomNumbers(data.map((room) => 
        (room.roomNumbers.filter(roomNumber => isAvailable(roomNumber)))
      )
      ) // Оновлюємо стан даними, якщо дані були успішно завантажені з сервера
    }
  }, [data, loading, error]);

console.log(availableRoomNumbers);

  const handleSelect = (roomId, e) => {

    const numberSelected = parseInt(e.target.value);

    const roomNumbersToAdd = availableRoomNumbers[roomId]?.slice(0, numberSelected).map(room => room.id) || [];

    if (numberSelected > 0) {
      // Merge new selections while preserving previous ones that are not from this room
      const newSelectedRoomNumbers = Array.isArray(selectedRoomNumbers) ? [...selectedRoomNumbers] : [];
      const currentRoomIds = new Set(availableRoomNumbers[roomId]?.map(room => room.id));

      // Remove previous selections of the same room
      const filteredRoomNumbers = newSelectedRoomNumbers.filter(id => !currentRoomIds.has(id));
      // Add new selections
      setSelectedRoomNumbers([...filteredRoomNumbers, ...roomNumbersToAdd]);
    } else {
      // If '0' is selected, remove all IDs from this room
      const currentRoomIds = new Set(availableRoomNumbers[roomId]?.map(room => room.id));
      const filteredRoomNumbers = Array.isArray(selectedRoomNumbers) ? selectedRoomNumbers.filter(id => !currentRoomIds.has(id)) : [];
      setSelectedRoomNumbers(filteredRoomNumbers);
    }
  };
  console.log(selectedRoomNumbers);

  const handleClick = async () => {
      // try {
      //   await Promise.all(
      //     selectedRoomNumbers.map((roomId) => {
      //       const res = axios.put(`/RoomNumber/availability/${roomId}`, {
      //         dates: alldates.map(timestamp => new Date(timestamp).toISOString()),
      //       });
      //       return res.data;
      //     })
      //   );
        
      //   navigate("/");
      // } catch (err) {}

      if (selectedRoomNumbers.length === 0 || !user) {
        console.error("No room selected or user data missing.");
        return;
      }
    
      try {
        const payload = {
          roomIds: selectedRoomNumbers,
          userId: user.id,
          dates: alldates.map(timestamp => new Date(timestamp).toISOString()),
        };
    
        const response = await axios.post(`/Booking`, payload);
        console.log("Booking response:", response.data);
        navigate("/bookings");
      } catch (err) {
        console.error("Failed to book rooms:", err);
    
    };
  }

  return (
    <div className="room-table-container">
      <table className="room-table">
        <thead>
          <tr>
            <th>Room type</th>
            <th>Number of guests</th>
            <th>Price for {days} nights</th>
            <th>Your choices</th>
            <th>Select rooms</th>
          </tr>
        </thead>
        <tbody>
          {data.map((room, index) => (
            <tr key={room.id}>
              <td>
                <div className="rTitle">{room.title}</div>
                <div className="rDesc">{room.description}</div>
              </td>
              <td>Max People: {room.maxPeople}</td>
              <td>${room.price.toFixed(2) * days}</td>
              <td>
                {/* Тут ви можете вставити логіку для вибору опцій, таких як можливість безкоштовної відміни бронювання */}
              </td>
              <td>
                <select onChange={(e) => handleSelect(index, e)}>
                        {/* Генеруємо список доступних кімнат */}
                        {[...Array(availableRoomNumbers[index] ? availableRoomNumbers[index].length + 1 : 1).keys()].map((number) => (
                          <option 
                          key={number} 
                          value={number}
                          >
                            {number}
                          </option>
                        ))}
                </select>
              </td>
            </tr>
          ))}
        </tbody>
        <tfoot>
          <tr>
            <td colSpan="6">
              <button onClick={handleClick} disabled={selectedRoomNumbers.length === 0}>
                Confirm Booking
              </button>
            </td>
          </tr>
        </tfoot>
      </table>
    </div>
  )
}

export default RoomTable;