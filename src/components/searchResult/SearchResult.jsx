import "./searchResult.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleRight } from '@fortawesome/free-solid-svg-icons'

const SearchResult = () => {
  return (
    <div className="searchResult">
      <img
        src="https://t-cf.bstatic.com/xdata/images/hotel/square600/77849034.jpg?k=cb8f8af0ccb9dafdb1b2591b10b476371e4fdb88a6b91ec6d0f9996d76424a0d&o="
        alt="Handlery Union Square Hotel"
        className="sRImg"
      />
      <div className="sRDesc">
        <h2 className="sRDesctitle">Handlery union Square Hotel</h2>
        <span className="sRDescDistance">500 ft from center</span>
        <span className="sRDescTaxiOp">Subway Access</span>
        <span className="sRDescSubtitle">Standart Room</span>
        <div className="sRDescFeatures">
          <span className="sRDescFeaturesTitle">King Room</span>
          <span className="sRDescFeaturesInfo">1 King Bed</span>
          <span className="sRDescFeatureswarnings">
            Only 1 room left at this price on our site
          </span>
        </div>
        <span className="sRDescSCancelOp">Free cancellation</span>
        <span className="sRDescSCancelOpSubtitle">
          You can cancel later, so lock in this great price today!
        </span>
      </div>
      <div className="sRDetails">
        <div className="sRDetailsRating">
          <div className="ratingText">
            <span className="info">Very Good</span>
            <span className="review">2,918 reviews</span>
          </div>
          <button className="ratingButton">8.2</button>
        </div>
        <span className="sRDetailsLocation">Location 9.4</span>
        <span className="sRDetailsOptions">2 nights 2 adults</span>
        <span className="sRDetailsPrize">$361</span>
        <div className="sRDetailsButtonGroup">
          <button className="sRDetailsAvailability ">See availability</button>
          <FontAwesomeIcon icon={faAngleRight} className="sRDetailsIcon"/>
        </div>
      </div>
    </div>
  );
}

export default SearchResult