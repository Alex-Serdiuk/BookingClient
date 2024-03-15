import useFetch from "../../hooks/useFetch";
import "./featuredProperties.css"

const FeaturedProperties = () => {
  const { data, loading, error } = useFetch("/Hotel?Featured=true&Limit=4");
  return (
    <div className="fp">
       {loading ? (
        "Loading"
      ) : (
        <>
          {data.map((item) => (
            <div className="fpItem" key={item.id}>
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
                <span>Excellent</span>
              </div>}
            </div>
          ))}
        </>
      )}
    </div>
      
  )
}

export default FeaturedProperties