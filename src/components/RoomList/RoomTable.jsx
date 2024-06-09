import { useContext, useEffect, useState } from "react";
import { SearchContext } from "../../context/SearchContext";
import useFetch from "../../hooks/useFetch";
import "./roomTable.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalendarDays, faPerson } from "@fortawesome/free-solid-svg-icons";
import { format } from "date-fns";
import { DateRange } from "react-date-range";
import Room from "../Room/Room";

const RoomTable = ({hotelId}) => 
{
  const [selectedRoomNumbers, setSelectedRoomNumbers] = useState([]);
  const [availableRoomNumbers, setAvailableRoomNumbers] = useState([]);
  const {data, loading, error} = useFetch(`/Hotel/GetRoomsByHotelId/${hotelId}`);
  const { dates, options, destination, dispatch } = useContext(SearchContext);
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();
  
  const[openDate, setOpenDate] = useState(false);
  const [selectedDates, setSelectedDates] = useState(dates || [{
    startDate: new Date(),
    endDate: new Date(),
    key: 'selection'
  }]);
  const [selectedOptions, setSelectedOptions] = useState(options || {
    adult: 1,
    children: 0,
    room: 1
  });
  

  // Використання контексту для ініціалізації стану
  // useEffect(() => {
  //   if (dates && dates.length > 0) {
  //     setSelectedDates(dates);
  //   }
  //   if (options) {
  //     setSelectedOptions(options);
  //   }
    
  // }, [dates, options]); 

  useEffect(() => {
    setSelectedDates(dates);
    setSelectedOptions(options);
  }, [dates, options]); // Забезпечте, що ви використовуєте оновлені дані для ваших локальних станів.

  const[openOptions, setOpenOptions] = useState(false);
  
const handleOption = (name, operation) => {
  setSelectedOptions(prev => {
    const newOptions = {
      ...prev,
      [name]: operation === "i" ? prev[name] + 1 : (prev[name] > 0 ? prev[name] - 1 : 0)
    };
    updateLocalStorage(destination, selectedDates, newOptions);
    return newOptions;
  });
};

const handleSearch = () => {
  const searchPayload = { destination, dates: selectedDates, options: selectedOptions };
  dispatch({ type: "NEW_SEARCH", payload: searchPayload });
  updateLocalStorage(searchPayload.destination, searchPayload.dates, searchPayload.options);
};

const updateLocalStorage = (destination, dates, options) => {
  localStorage.setItem('search', JSON.stringify({
    destination,
    dates: dates.map(date => ({
      ...date,
      startDate: date.startDate.toISOString(),
      endDate: date.endDate.toISOString()
    })),
    options
  }));
};


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

  // const alldates = getDatesInRange(dates[0].startDate, dates[0].endDate);
  // Використовуйте selectedDates для обрахунків замість dates з контексту
  const alldates = getDatesInRange(selectedDates[0].startDate, selectedDates[0].endDate);

  const dayDifference = (date1, date2) => {
    const timeDiff = Math.abs(date2.getTime() - date1.getTime());
    const diffDays = Math.ceil(timeDiff / (1000 * 60 * 60 * 24));
    return diffDays;
  };

  // const days = dayDifference(dates[0].endDate, dates[0].startDate);
  // Використовуйте selectedDates для обрахунків замість dates з контексту
  const days = dayDifference(selectedDates[0].endDate, selectedDates[0].startDate);

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
  }, [data, loading, error, selectedDates]);

// console.log(availableRoomNumbers);

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
  // console.log(selectedRoomNumbers);

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

  const [openModalRoom, setOpenModalRoom] = useState(false);
  const [selectedRoomId, setSelectedRoomId] = useState("");

  const handleClickOpen = (id) => {
    if (user) {
      setOpenModalRoom(true);
      setSelectedRoomId(id);
    } else {
      navigate("/login");
    }
  };

  return (
    <>
    <div className="room-table-container">
      <h2>Availability</h2>
      <div className="roomSearch">
                <div className="roomSearchItem">
                    <FontAwesomeIcon icon={faCalendarDays} className="roomSearchIcon"/>
                    <span onClick={()=>setOpenDate(!openDate)} className="roomSearchText">
                      {`${format(selectedDates[0].startDate,"MM/dd/yyyy")} to ${format(selectedDates[0].endDate,"MM/dd/yyyy")}`}</span>
                      {openDate && (
                        <DateRange
                          editableDateInputs={true}
                          onChange={item => {
                            const newDates = [item.selection];
                            setSelectedDates(newDates);
                            updateLocalStorage(destination, newDates, selectedOptions);
                          }}
                          moveRangeOnFirstSelection={false}
                          ranges={selectedDates}
                          className="date"
                          minDate={new Date()}
                        />
                      )}
                </div>
                <div className="roomSearchItem">
                    <FontAwesomeIcon icon={faPerson} className="roomSearchIcon"/>
                    <span onClick={()=>setOpenOptions(!openOptions)} className="roomSearchText">
                      {`${selectedOptions.adult} adult · ${selectedOptions.children} children · ${selectedOptions.room} room`}</span>
                    {openOptions && <div className="options">
                        <div className="optionItem">
                            <span className="optionText">Adult</span>
                            <div className="optionCounter">
                                <button 
                                disabled={selectedOptions.adult <= 1}
                                className="optionCounterButton" 
                                onClick={()=>handleOption("adult", "d")}>-</button>
                                <span className="optionCounterNumber">{selectedOptions.adult}</span>
                                <button className="optionCounterButton" onClick={()=>handleOption("adult", "i")}>+</button>
                            </div>
                        </div>
                        <div className="optionItem">
                            <span className="optionText">Children</span>
                            <div className="optionCounter">
                                <button 
                                disabled={options.children <= 0}
                                className="optionCounterButton" 
                                onClick={()=>handleOption("children", "d")}>-</button>
                                <span className="optionCounterNumber">{selectedOptions.children}</span>
                                <button className="optionCounterButton" onClick={()=>handleOption("children", "i")}>+</button>
                            </div>
                        </div>
                        <div className="optionItem">
                            <span className="optionText">Room</span>
                            <div className="optionCounter">
                                <button 
                                disabled={options.room <= 1}
                                className="optionCounterButton" 
                                onClick={()=>handleOption("room", "d")}>-</button>
                                <span className="optionCounterNumber">{options.room}</span>
                                <button className="optionCounterButton" onClick={()=>handleOption("room", "i")}>+</button>
                            </div>
                        </div>
                    </div>}
                </div>
                <div className="">
                   <button className="roomBtn" onClick={handleSearch}>Search</button>
                </div>
            </div>
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
                <div className="rTitle" 
                onClick={() => handleClickOpen(room.id)}
                >{room.title}</div>
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
    {openModalRoom && <Room isOpen={openModalRoom} setOpen={setOpenModalRoom} roomId={selectedRoomId}/>}
    </>
  )
}

export default RoomTable;