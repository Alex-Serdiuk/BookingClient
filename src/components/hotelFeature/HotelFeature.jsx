function Feature({ src, alt, text }) {
    return (
      <div className="feature">
        <img loading="lazy" src={src} alt={alt} className="feature-img" />
        <p className="feature-text">{text}</p>
      </div>
    );
  }
  
  const HotelFeature = () => {
    const featuresColumn1 = [
      { src: "https://cdn.builder.io/api/v1/image/assets/TEMP/ab3bd55d9e90d7e0147a9f14848eb079950f70a7e29fa0e0d6c6178be16189cd?apiKey=7cdb7fcd050c4f1d8d8a5a08cb239f8c&", alt: "Free WiFi", text: "Free Wi-Fi" },
      { src: "https://cdn.builder.io/api/v1/image/assets/TEMP/97d5661a9e0c5dd57ef3b4355b6b910b174b3d08d1b02ccad44a57c29ef497a3?apiKey=7cdb7fcd050c4f1d8d8a5a08cb239f8c&", alt: "Heating", text: "Heating" },
      { src: "https://cdn.builder.io/api/v1/image/assets/TEMP/db26bd1e0bc5fcc56bdf4f0a9dd41a6e52ed42c3942da28a35ce90dc3142b1f3?apiKey=7cdb7fcd050c4f1d8d8a5a08cb239f8c&", alt: "Good Breakfast", text: "Very good breakfast" },
    ];
  
    const featuresColumn2 = [
      { src: "https://cdn.builder.io/api/v1/image/assets/TEMP/ac9c80abe04565078f2bec5776f9a59567a6b53701431f434571fe5eca85bf03?apiKey=7cdb7fcd050c4f1d8d8a5a08cb239f8c&", alt: "Parking", text: "Parking" },
      { src: "https://cdn.builder.io/api/v1/image/assets/TEMP/40d18041e2faf938f585d6f88b09e05f8fcb8b27e048e369f99ccdd2da40614b?apiKey=7cdb7fcd050c4f1d8d8a5a08cb239f8c&", alt: "Non-Smoking Rooms", text: "Non-smoking rooms" },
    ];
  
    const featuresColumn3 = [
      { src: "https://cdn.builder.io/api/v1/image/assets/TEMP/99ce52ff0cdb4dd40d22ef23a4d41f6139b75ce3916a7fbd95f483789e0fb42d?apiKey=7cdb7fcd050c4f1d8d8a5a08cb239f8c&", alt: "Family Rooms", text: "Family rooms" },
      { src: "https://cdn.builder.io/api/v1/image/assets/TEMP/951019463a858f7350dcfde8859e573cfec1ca791fe7b7fe870d431a511dddee?apiKey=7cdb7fcd050c4f1d8d8a5a08cb239f8c&", alt: "Airport Transfer", text: "Airport transfer" },
    ];
  
    return (
      <>
        <section className="features-section">
          <h1>Facilities</h1>
          <div className="features-container">
            <div className="features-column">
              {featuresColumn1.map((feature, index) => (
                <Feature key={index} {...feature} />
              ))}
            </div>
            <div className="features-column">
              {featuresColumn2.map((feature, index) => (
                <Feature key={index} {...feature} />
              ))}
            </div>
            <div className="features-column">
              {featuresColumn3.map((feature, index) => (
                <Feature key={index} {...feature} />
              ))}
            </div>
          </div>
        </section>
        <style jsx>{`
          .features-section {
            margin-top: 31px;
            width: 100%;
            max-width: 1013px;
            
          }
  
          @media (max-width: 991px) {
            .features-section {
              max-width: 100%;
            }
          }
  
          .features-container {
            gap: 20px;
            display: flex;
            margin-bottom: 40px;
          }
  
          @media (max-width: 991px) {
            .features-container {
              flex-direction: column;
              align-items: stretch;
              gap: 0px;
            }
          }
  
          .features-column {
            display: flex;
            flex-direction: column;
            width: 33%;
          }
  
          @media (max-width: 991px) {
            .features-column {
              width: 100%;
            }
          }
  
          .feature {
            display: flex;
            gap: 13px;
            margin-top: 21px;
          }
  
          .feature-img {
            width: 43px;
            height: 43px;
            object-fit: cover;
          }
  
          .feature-text {
            font-family: Inter, sans-serif;
            margin: auto 0;
            flex-grow: 1;
            flex-basis: auto;
          }
  
          @media (max-width: 991px) {
            .feature {
              white-space: initial;
              flex-direction: column;
              align-items: center;
              text-align: center;
            }
  
            .feature-text {
              margin: 5px 0 0;
            }
          }
        `}</style>
      </>
    );
  }
  export default HotelFeature;
  