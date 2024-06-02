import "./bookings.css"
import React, { useContext, useEffect, useState } from 'react'
import Navbar from '../../components/navabar/Navbar'
import Header from '../../components/header/Header'
import { AuthContext } from '../../context/AuthContext';
import useFetch from '../../hooks/useFetch';
import axios from 'axios';
import MailList from "../../components/mailList/MailList";
import Footer from "../../components/footer/Footer";

const Bookings = () => {
    const { user } = useContext(AuthContext);
    const { data, loading, error } = useFetch(`/Booking/GetBookingsByUserId/${user.id}`);

    const [bookings, setBookings] = useState([]);

    useEffect(() => {
        if (data) {
            setBookings(data);
        }
    }, [data]);

    const handleCancelBooking = async (bookingId) => {
        try {
            const response =  await axios.delete(`/Booking/${bookingId}`);
          if (response.status === 200) {
            setBookings(prevBookings => prevBookings.filter(booking => booking.id !== bookingId));
            alert('Booking has been cancelled successfully');
        }
        } catch (error) {
          alert('Failed to cancel the booking');
        }
      };

  return (
    <div>
        <Navbar/>
        {/* <Header type="list"/> */}
        {loading ? (
                "Loading..."
            ) : bookings && bookings.length > 0 ? (
                <div className="bookingContainer">
                    <table className="tableBooking">
                        <thead>
                            <tr >
                                <th>Booking ID</th>
                                <th>Hotel Image</th>
                                <th>Hotel Name</th>
                                <th>Room Title</th>
                                <th>Description</th>
                                <th>Price per Night</th>
                                <th>Room Number</th>
                                <th>Start Date</th>
                                <th>End Date</th>
                                <th>Total</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {bookings.map(booking => {
                                const startDate = new Date(booking.unavailableDates[0].date);
                                const endDate = new Date(booking.unavailableDates[booking.unavailableDates.length - 1].date);
                                const totalDays = (endDate - startDate) / (1000 * 3600 * 24) + 1;
                                return (
                                    <tr key={booking.id} >
                                        <td>{booking.id}</td>
                                        <td>
                                            <img src={booking.unavailableDates[0].roomNumber.room.hotel.hotelImages[0].url} alt="Hotel" style={{ width: "100px" }} />
                                        </td>
                                        <td>{booking.unavailableDates[0].roomNumber.room.hotel.name}</td>
                                        <td>{booking.unavailableDates[0].roomNumber.room.title}</td>
                                        <td>{booking.unavailableDates[0].roomNumber.room.description}</td>
                                        <td>${booking.unavailableDates[0].price.toFixed(2)}</td>
                                        <td>{booking.unavailableDates[0].roomNumber.number}</td>
                                        <td>{startDate.toLocaleDateString()}</td>
                                        <td>{endDate.toLocaleDateString()}</td>
                                        <td>${(booking.unavailableDates[0].price * totalDays).toFixed(2)}</td>
                                        <td>
                                            <button onClick={() => handleCancelBooking(booking.id)}>
                                                Cancel
                                            </button>
                                        </td>
                                    </tr>
                                );
                            })}
                        </tbody>
                    </table>
                </div>
            ) : (
                <div className="bookingContainer">
                    <p>No bookings available.</p>
                </div>
        )}
        <Footer/>
    </div>
  )
}

export default Bookings