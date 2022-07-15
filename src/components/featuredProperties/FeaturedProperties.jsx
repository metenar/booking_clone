import './featuredProperties.css'

const FeaturedProperties = () => {
  return (
    <div className="featuredProperties">
      <div className="featuredPropertiesItem">
        <img
          src="https://t-cf.bstatic.com/xdata/images/hotel/max500/97644401.jpg?k=809528f82d4b64141dc312b8a304fe971b16dfb0e2721e4941391c5acaaa8378&o="
          alt="Rome"
          className="featuredPropertiesImg"
        />
        <span className="featuredPropertiesName">Romance al Colosseo</span>
        <span className="featuredPropertiesCity">Rome</span>
        <span className="featuredPropertiesPrice">Starting from $311</span>
        <div className="featuredPropertiesInfo">
          <button className="featuredPropertiesDescButton">9.8</button>
          <span className="featuredPropertiesDescTitle">Exceptional</span>
          <span className="featuredPropertiesDescIcon"> · </span>
          <span className="featuredPropertiesDescRew">47 reviews</span>
        </div>
      </div>
      <div className="featuredPropertiesItem">
        <img
          src="https://t-cf.bstatic.com/xdata/images/hotel/max500/64768746.jpg?k=b0a62a2eb299aaa31553ffcb9887d54cb5ea112e81a7a942a45aa25f88c84921&o="
          alt="Amsterdam"
          className="featuredPropertiesImg"
        />
        <span className="featuredPropertiesName">Zoku Amsterdam</span>
        <span className="featuredPropertiesCity">Amsterdam</span>
        <span className="featuredPropertiesPrice">Starting from $178</span>
        <div className="featuredPropertiesInfo">
          <button className="featuredPropertiesDescButton">8.9</button>
          <span className="featuredPropertiesDescTitle">Excellent</span>
          <span className="featuredPropertiesDescIcon"> · </span>
          <span className="featuredPropertiesDescRew">147 reviews</span>
        </div>
      </div>
      <div className="featuredPropertiesItem">
        <img
          src="https://t-cf.bstatic.com/xdata/images/hotel/max500/71184956.jpg?k=4f0dd080f161eb3d2631565c7df9b6e634442addd10dc715b8dd519092a4517f&o="
          alt="Lisbon"
          className="featuredPropertiesImg"
        />
        <span className="featuredPropertiesName">Chiado Mercy Apartments</span>
        <span className="featuredPropertiesCity">Lisbon</span>
        <span className="featuredPropertiesPrice">Starting from $622</span>
        <div className="featuredPropertiesInfo">
          <button className="featuredPropertiesDescButton">9.5</button>
          <span className="featuredPropertiesDescTitle">Exceptional</span>
          <span className="featuredPropertiesDescIcon"> · </span>
          <span className="featuredPropertiesDescRew">417 reviews</span>
        </div>
      </div>
      <div className="featuredPropertiesItem">
        <img
          src="https://t-cf.bstatic.com/xdata/images/hotel/max500/77446705.jpg?k=b4137b295019af2a0db1af044c725449adda502a6921fbb2b8931016a8a0a713&o="
          alt="London"
          className="featuredPropertiesImg"
        />
        <span className="featuredPropertiesName">Leman Locke</span>
        <span className="featuredPropertiesCity">London</span>
        <span className="featuredPropertiesPrice">Starting from $333</span>
        <div className="featuredPropertiesInfo">
          <button className="featuredPropertiesDescButton">8.9</button>
          <span className="featuredPropertiesDescTitle">Excellent</span>
          <span className="featuredPropertiesDescIcon"> · </span>
          <span className="featuredPropertiesDescRew">247 reviews</span>
        </div>
      </div>
    </div>
  );
}

export default FeaturedProperties