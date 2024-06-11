import { useContext, useEffect } from "react";
import { SearchContext } from "../../context/SearchContext";
import useApi from "../../hooks/useApi";
import "./featuredProperties.css";
import { useNavigate } from "react-router-dom";

const FeaturedProperties = () => {
  const { dispatch } = useContext(SearchContext);
  const navigate = useNavigate();
  const { data, loading, error, get } = useApi("/Hotel?Featured=true&Limit=4");

  useEffect(() => {
    get();
  }, [get]);

  const getRatingWord = (rating) => {
    if (rating >= 9) return "Superb";
    if (rating >= 8) return "Very Good";
    if (rating >= 7) return "Good";
    if (rating >= 6) return "Pleasant";
    return "Average";
  };

  const defaultDates = [{
    startDate: new Date(),
    endDate: new Date(),
    key: 'selection'
  }];
  
  const defaultOptions = {
    adult: 1,
    children: 0,
    room: 1
  };

  const handleFpItemClick = (item) => {
    dispatch({ type: "NEW_SEARCH", payload: { destination: item.city, dates: defaultDates, options: defaultOptions } });
    navigate(`/hotels/${item.id}`);
  };

  return (
    <div className="fp">
       {loading ? (
        "Loading"
      ) : (
        <>
          {data && data.map((item) => (
            <div className="fpItem" key={item.id} onClick={() => handleFpItemClick(item)}>
              <img
                src={item.hotelImages[0]?.url}
                alt=""
                className="fpImg"
              />
              <span className="fpName">{item.name}</span>
              <span className="fpCity">{item.city}</span>
              <span className="fpPrice">Starting from ${item.cheapestPrice}</span>
              {item.rating && <div className="fpRating">
                <button>{item.rating}</button>
                <span>{getRatingWord(item.rating)}</span>
              </div>}
            </div>
          ))}
        </>
      )}
    </div>
  );
}

export default FeaturedProperties;
