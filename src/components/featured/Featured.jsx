import { useNavigate } from "react-router-dom";
import useFetch from "../../hooks/useFetch";

import "./featured.css"
import { SearchContext } from "../../context/SearchContext";
import { useContext } from "react";

const Featured = () => {
  const { data, loading, error } = useFetch(
    "/Hotel/countByCity?cities=berlin,madrid,london"
  );
  const { dispatch } = useContext(SearchContext);
  const navigate = useNavigate();

  const defaultDates = [{
    startDate: new Date(),
    endDate: new Date(),
    key: 'selection'
  }];

  const handleFeaturedClick = (city) => {
    dispatch({ type: "NEW_SEARCH", payload: { destination: city, dates: defaultDates, options: { adult: 1, children: 0, room: 1 } } });
    navigate("/hotels", { state: { destination: city, dates: defaultDates, options: { adult: 1, children: 0, room: 1 } } });
  };
  
  return (
    <div className="featured">
      {loading ? (
        "Loading please wait"
      ) : (
        <>
        <div className="featuredItem" onClick={() => handleFeaturedClick("berlin")}>
            <img 
            src="https://dynamic-media-cdn.tripadvisor.com/media/photo-o/28/54/58/97/blick-richtung-osten.jpg?w=500&h=500&s=1" 
            alt=""
            className="featuredImg" 
            />
            <div className="featuredTitles">
                <h1>Berlin</h1>
                <h2>{data["berlin"]} properties</h2>
            </div>
        </div>
        <div className="featuredItem" onClick={() => handleFeaturedClick("madrid")}>
            <img
            src="https://strawberrytours.com/_next/image?url=https%3A%2F%2Fimagedelivery.net%2FxtVVrgn04XP6bhrBt0jaJQ%2Fcd831f21-e0b3-4ff2-a296-7cdd096c6c00%2F500x500&w=1080&q=75"
            alt=""
            className="featuredImg"
            />
            <div className="featuredTitles">
            <h1>Madrid</h1>
            <h2>{data["madrid"]} properties</h2>
            </div>
      </div>
      <div className="featuredItem" onClick={() => handleFeaturedClick("london")}>
        <img
          src="https://www.zurich.co.uk/-/media/about-us/images/components/hero-banner/london.jpg?h=500&la=en&w=500"
          alt=""
          className="featuredImg"
        />
        <div className="featuredTitles">
          <h1>London</h1>
          <h2>{data["london"]} properties</h2>
        </div>
      </div>
      </>
      )}
    </div>
  )
}

export default Featured