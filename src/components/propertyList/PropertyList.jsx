import { useContext } from "react";
import useFetch from "../../hooks/useFetch";
import "./propertyList.css"
import { SearchContext } from "../../context/SearchContext";
import { useNavigate } from "react-router-dom";
const PropertyList = () => {
  const { data, loading, error } = useFetch("/Hotel/countByType");
  const { dispatch } = useContext(SearchContext);
  const navigate = useNavigate();

  const images = [
    "https://cf.bstatic.com/xdata/images/xphoto/square300/57584488.webp?k=bf724e4e9b9b75480bbe7fc675460a089ba6414fe4693b83ea3fdd8e938832a6&o=",
    "https://cf.bstatic.com/static/img/theme-index/carousel_320x240/card-image-apartments_300/9f60235dc09a3ac3f0a93adbc901c61ecd1ce72e.jpg",
    "https://cf.bstatic.com/static/img/theme-index/carousel_320x240/bg_resorts/6f87c6143fbd51a0bb5d15ca3b9cf84211ab0884.jpg",
    "https://cf.bstatic.com/static/img/theme-index/carousel_320x240/card-image-villas_300/dd0d7f8202676306a661aa4f0cf1ffab31286211.jpg",
    "https://cf.bstatic.com/static/img/theme-index/carousel_320x240/card-image-chalet_300/8ee014fcc493cb3334e25893a1dee8c6d36ed0ba.jpg",
  ];

  const handleSearch = () => {
    const destination = ""; // або вкажіть значення, яке вам потрібно
    const dates = [
      {
        startDate: new Date(),
        endDate: new Date(),
        key: "selection"
      }
    ];
    const options = {
      adult: 1,
      children: 0,
      room: 1
    };

    const searchPayload = { destination, dates, options };

    // Dispatch the new search action
    dispatch({ type: "NEW_SEARCH", payload: searchPayload });

    // Update localStorage
    localStorage.setItem('search', JSON.stringify({
      ...searchPayload,
      dates: searchPayload.dates.map(date => ({
        ...date,
        startDate: date.startDate.toISOString(),
        endDate: date.endDate.toISOString()
      }))
    }));

    navigate("/hotels", { state: searchPayload });
  };

  return (
    <div className="pList">
        {loading ? (
        "loading"
      ) : (
        <>
          {data &&
            images.map((img,i) => (
              <div
                className={`pListItem ${data[i]?.type === "hotel" ? "clickable" : ""}`}
                key={i}
                onClick={() => data[i]?.type === "hotel" && handleSearch()}
                style={{ cursor: data[i]?.type === "hotel" ? "pointer" : "default" }}
              >
                <img
                  src={img}
                  alt=""
                  className="pListImg"
                />
                <div className="pListTitles">
                  <h1>{data[i]?.type}</h1>
                  <h2>{data[i]?.count} {data[i]?.type}</h2>
                </div>
              </div>
            ))}
        </>
      )}
    </div>
  )
}

export default PropertyList