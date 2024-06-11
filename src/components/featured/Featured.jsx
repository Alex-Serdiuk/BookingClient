import { useNavigate } from "react-router-dom";
import { useContext, useEffect } from "react";
import useApi from "../../hooks/useApi";
import "./featured.css";
import { SearchContext } from "../../context/SearchContext";

const Featured = () => {
  const { dispatch } = useContext(SearchContext);
  const navigate = useNavigate();
  const { data, loading, error, get } = useApi(
    "/Hotel/countByCity?cities=berlin,madrid,london,paris"
  );

  useEffect(() => {
    get();
  }, [get]);

  const defaultDates = [
    {
      startDate: new Date(),
      endDate: new Date(),
      key: "selection",
    },
  ];

  const handleFeaturedClick = (city) => {
    const searchPayload = {
      destination: city,
      dates: defaultDates,
      options: { adult: 1, children: 0, room: 1 },
    };

    // Dispatch the new search action
    dispatch({
      type: "NEW_SEARCH",
      payload: searchPayload,
    });

    // Update localStorage
    localStorage.setItem('search', JSON.stringify({
      ...searchPayload,
      dates: searchPayload.dates.map(date => ({
        ...date,
        startDate: date.startDate.toISOString(),
        endDate: date.endDate.toISOString()
      }))
    }));

    // Navigate to the hotels page with state
    navigate("/hotels", {
      state: searchPayload,
    });
  };

  return (
    <div className="featured">
      {loading ? (
        "Loading please wait"
      ) : (
        <>
          <div
            className="featuredItem"
            onClick={() => handleFeaturedClick("berlin")}
          >
            <img
              src="https://images.squarespace-cdn.com/content/v1/64ba44348b6a05559a816bc1/1690282629211-NTVSXV9U1G1NO7OHD4SN/Photographing+Brandenburg+Gate_0344.jpg"
              alt=""
              className="featuredImg"
            />
            <div className="featuredTitles">
              <div>Berlin</div>
              <div>{data?.berlin || 0} properties</div>
            </div>
          </div>

          <div
            className="featuredItem"
            onClick={() => handleFeaturedClick("madrid")}
          >
            <img
              src="https://babylontours.com/wp-content/uploads/2017/12/Tour-Madrid-Old-City-Tour.jpg"
              alt=""
              className="featuredImg"
            />
            <div className="featuredTitles">
              <div>Madrid</div>
              <div>{data?.madrid || 0} properties</div>
            </div>
          </div>

          <div
            className="featuredItem"
            onClick={() => handleFeaturedClick("london")}
          >
            <img
              src="https://dynamic-media-cdn.tripadvisor.com/media/photo-o/26/df/66/c8/caption.jpg?w=1200&h=-1&s=1"
              alt=""
              className="featuredImg"
            />
            <div className="featuredTitles">
              <div>London</div>
              <div>{data?.london || 0} properties</div>
            </div>
          </div>
            
          <div
            className="featuredItem"
            onClick={() => handleFeaturedClick("paris")}
          >
            <img
              src="https://res.klook.com/image/upload/Mobile/City/swox6wjsl5ndvkv5jvum.jpg"
              alt=""
              className="featuredImg"
            />
            <div className="featuredTitles">
              <div>Paris</div>
              <div>{data?.paris || 0} properties</div>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default Featured;
