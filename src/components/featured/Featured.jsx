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
            src="https://cf.bstatic.com/xdata/images/city/max500/957801.webp?k=a969e39bcd40cdcc21786ba92826063e3cb09bf307bcfeac2aa392b838e9b7a5&o=" 
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
            src="https://cf.bstatic.com/xdata/images/city/max500/690334.webp?k=b99df435f06a15a1568ddd5f55d239507c0156985577681ab91274f917af6dbb&o="
            alt=""
            className="featuredImg"
            />
            <div className="featuredTitles">
            <h1>Maidrid</h1>
            <h2>{data["madrid"]} properties</h2>
            </div>
      </div>
      <div className="featuredItem" onClick={() => handleFeaturedClick("london")}>
        <img
          src="https://cf.bstatic.com/xdata/images/city/max500/689422.webp?k=2595c93e7e067b9ba95f90713f80ba6e5fa88a66e6e55600bd27a5128808fdf2&o="
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