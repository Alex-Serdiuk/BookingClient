import "./hotel.css"
import Navbar from "../../components/navabar/Navbar";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import MailList from "../../components/mailList/MailList";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircle, faCircleArrowLeft, faCircleArrowRight, faCircleXmark, faLocation, faLocationDot } from "@fortawesome/free-solid-svg-icons";
import { useContext, useEffect, useState } from "react";
import useFetch from "../../hooks/useFetch";
import { useLocation, useNavigate } from "react-router-dom";
import { SearchContext } from "../../context/SearchContext";
import { AuthContext } from "../../context/AuthContext";
import Reserve from "../../components/reserve/Reserve";
import RoomTable from "../../components/RoomList/RoomTable";

const Hotel = () => {
  const location = useLocation();
  const id = location.pathname.split("/")[2];
  const { user } = useContext(AuthContext);
  const { dates, options } = useContext(SearchContext);
  const navigate = useNavigate();

  const [slideNumber, setSlideNumber] = useState(0);
  const [open, setOpen] = useState(false);
  const [openModal, setOpenModal] = useState(false);

  const { data, loading, error } = useFetch(`/Hotel/${id}`);

  const [days, setDays] = useState(0);
  
  // useEffect(() => {
  //   if (!dates || dates.length === 0) {
  //     const storedDates = localStorage.getItem('search');
  //     if (storedDates) {
  //       dates = JSON.parse(storedDates.dates);
  //     }
  //   }
  // }, []);

  // useEffect(() => {
  //   reFetch();
  // }, [dates, options, reFetch]);

  // const dayDifference = (date1, date2) => {
  //   const parsedDate1 = new Date(date1);
  //   const parsedDate2 = new Date(date2);
  //   if (isNaN(parsedDate1.getTime()) || isNaN(parsedDate2.getTime())) {
  //     console.error("Invalid date(s) provided:", date1, date2);
  //     return 0;
  //   }
  //   const timeDiff = Math.abs(parsedDate2.getTime() - parsedDate1.getTime());
  //   return Math.ceil(timeDiff / (1000 * 60 * 60 * 24));
  // };

  // const days = dayDifference(dates[0].endDate, dates[0].startDate);

  const [dayCount, setDayCount] = useState(0);
  const [totalPrice, setTotalPrice] = useState(0);

  // useEffect(() => {
  //   function dayDifference(date1, date2) {
  //     const parsedDate1 = new Date(date1);
  //     const parsedDate2 = new Date(date2);
  //     if (isNaN(parsedDate1.getTime()) || isNaN(parsedDate2.getTime())) {
  //       console.error("Invalid date(s) provided:", date1, date2);
  //       return 0;
  //     }
  //     const timeDiff = Math.abs(parsedDate2.getTime() - parsedDate1.getTime());
  //     return Math.ceil(timeDiff / (1000 * 60 * 60 * 24));
  //   }

  //   if (dates && dates[0] && dates[0].startDate && dates[0].endDate) {
  //     const diffDays = dayDifference(dates[0].endDate, dates[0].startDate);
  //     setDays(diffDays);
  //   }
  // }, [dates]);

  useEffect(() => {
    function calculateDays() {
      if (dates && dates[0].startDate && dates[0].endDate) {
        const start = new Date(dates[0].startDate);
        const end = new Date(dates[0].endDate);
        const timeDiff = Math.abs(end.getTime() - start.getTime());
        const diffDays = Math.ceil(timeDiff / (1000 * 60 * 60 * 24));
        setDayCount(diffDays);
      }
    }

    function calculateTotalPrice() {
      if (dayCount && data && options) {
        setTotalPrice(dayCount * data.cheapestPrice * options.room);
      }
    }

    calculateDays();
    calculateTotalPrice();
  }, [dates, options, dayCount, data]);

  const handleOpen = (i)=>{
    setSlideNumber(i);
    setOpen(true);
  }

  const handleMove = (direction) =>{
    let newSlideNumber;
    const imagesCount = data.hotelImages.length;
  
    if(direction === "l"){
      newSlideNumber = slideNumber === 0 ? imagesCount - 1 : slideNumber - 1;
    } else {
      newSlideNumber = slideNumber === imagesCount - 1 ? 0 : slideNumber + 1;
    }
  
    setSlideNumber(newSlideNumber);
  };

  const handleClick = () => {
    if (user) {
      setOpenModal(true);
    } else {
      navigate("/login");
    }
  };

  function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  
  return (
    <div>
      <Navbar/>
      <Header type="list"/>
      {loading ? (
        "loading"
      ) : (
      <div className="hotelContainer">
        {open && <div className="slider">
          <FontAwesomeIcon icon={faCircleXmark} className="close" onClick={()=>setOpen(false)}/>
          <FontAwesomeIcon icon={faCircleArrowLeft} className="arrow" onClick={()=>handleMove("l")}/>
          <div className="sliderWrapper">
            <img src={data.hotelImages[slideNumber].url} alt="" className="sliderImg" />
          </div>
          <FontAwesomeIcon icon={faCircleArrowRight} className="arrow" onClick={()=>handleMove("r")}/>
        </div>}
        <div className="hotelWrapper">
          <button className="bookNow">Reserve or Book Now</button>
          <h1 className="hotelTitle">{data.name}</h1>
          <div className="hotelAddress">
            <FontAwesomeIcon icon={faLocationDot}/>
            <span>{data.address}</span>
          </div>
          <span className="hotelDistance">
            Excellent location – {data.distance}m from center
          </span>
          <span className="hotelPriceHighlight">
            Book a stay over ${data.cheapestPrice} at this property and get a free airport taxi
          </span>
          <div className="hotelImages">
            {data.hotelImages?.map((photo, i)=>(
              <div className="hotelImgWraper">
                <img id={i} onClick={()=>handleOpen(i)} src={photo.url} alt="" className="hotelImg" />
              </div>
            ))}
          </div>
          <div className="hotelDetails">
            <div className="hotelDetailsTexts">
              <h1 className="hotelTitle">{data.title}</h1>
              <p className="hotelDesc">
              {data.description}
              </p>
            </div>
            <div className="hotelDetailsPrice">
            <h1>Perfect for a {dayCount}-night stay!</h1>
              <span>
                Located in the real heart of {data.city}, this property has an
                excellent location score of 9.8!
              </span>
              <h2>
                <b>${totalPrice}</b> ({dayCount} nights)
              </h2>
              <button onClick={handleClick}>Reserve or Book Now!</button>
            </div>
          </div>
        </div>
        <RoomTable hotelId={id}/>
        <MailList/>
        <Footer/>
      </div>)}
      {openModal && <Reserve setOpen={setOpenModal} hotelId={id}/>}
    </div>
  )
}

export default Hotel