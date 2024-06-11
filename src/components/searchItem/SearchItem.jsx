import "./searchItem.css"
import { Link } from "react-router-dom";

const SearchItem = ({item}) => {
    // Функція для обрізання рядка до певної довжини
  const truncateDescription = (text, maxLength) => {
    if (text.length > maxLength) {
      return text.slice(0, maxLength) + '...';
    } else {
      return text;
    }
  };

  // Функція для визначення тексту залежно від рейтингу
  // const getRatingWord = (rating) => {
  //   if (rating >= 9) return "Superb";
  //   if (rating >= 8) return "Very Good";
  //   if (rating >= 7) return "Good";
  //   if (rating >= 6) return "Pleasant";
  //   return "Average";
  // };

  return (
    <div className="searchItem">
       <img 
        src={item.hotelImages[0]?.url} 
        alt="" 
        className="siImg" />
        <div className="siDesc">
            <h1 className="siTitle">{item.name}</h1>
            <span className="siDistance">{item.distance}m from center</span>
            <span className="siTaxiOp">Free airport taxi</span>
            <span className="siSubtitle">
                Studio Apartment with Air conditioning
            </span>
            <span className="siFeatures">{truncateDescription(item.description, 120)}</span>
            <span className="siCancelOp">Free cancellation </span>
            <span className="siCancelOpSubtitle">
                You can cancel later, so lock in this great price today!
            </span>
        </div>
        <div className="siDetails">
            {item.rating !== 0 && <div className="siRating">
                {/* <span>{getRatingWord(item.rating)}</span> */}
                <button>{item.rating}</button>
            </div>}
            <div className="siDetailTexts">
                <span className="siPrice">${item.cheapestPrice}</span>
                <span className="siTaxOp">Includes taxes and fees</span>
                <Link to={`/hotels/${item.id}`}>
                    <button className="siCheckButton">See availability</button>
                </Link>
            </div>
        </div>
    </div>
  )
}

export default SearchItem