import "./hotels.css"
import Header from '../../components/header/Header'
import Navbar from "../../components/navbar/Navbar"
import { useLocation } from "react-router-dom"
import {format} from 'date-fns'
import { useState } from "react"
import { DateRange } from "react-date-range"
import SearchResult from "../../components/searchResult/SearchResult"

const Hotels = () => {
  const location = useLocation();
  const [destination, setDestination] = useState(location.state.destination);
  const [date, setDate] = useState(location.state.date);
  const [openDate, setOpenDate] = useState(false);
  const [options, setOptions] = useState(location.state.options);
  return (
    <div>
      <Navbar />
      <Header type="list" />
      <div className="hotelListContainer">
        <div className="hotelListWrapper">
          <div className="hotelListSearch">
            <h2 className="hotelListSearchTitle">Search</h2>
            <div className="hotelListSearchItem">
              <label htmlFor="destination">Destination/property name:</label>
              <input type="text" id="destination" placeholder={destination} />
            </div>
            <div className="hotelListSearchItem">
              <label>Dates</label>
              <span onClick={() => setOpenDate(!openDate)}>{`${format(
                date[0].startDate,
                "MM/dd/yyyy"
              )} - ${
                date[0].endDate === null
                  ? "checkout"
                  : format(date[0].endDate, "MM/dd/yyyy")
              }`}</span>
              {openDate && (
                <DateRange
                  onChange={(item) => setDate([item.selection])}
                  minDate={new Date()}
                  ranges={date}
                />
              )}
            </div>
            <div className="hotelListSearchItem">
              <label>Options</label>
              <div className="searchItemOptions">
                <div className="searchItemOptionItem">
                  <span className="searchItemOptionItemText">
                    Min price <small>per night</small>
                  </span>
                  <input type="number" className="searchItemOptionItemInput" />
                </div>
                <div className="searchItemOptionItem">
                  <span className="searchItemOptionItemText">
                    Max price <small>per night</small>
                  </span>
                  <input type="number" className="searchItemOptionItemInput" />
                </div>
                <div className="searchItemOptionItem">
                  <span className="searchItemOptionItemText">
                    {options.adults > 1 ? "Adults" : "Adult"}
                  </span>
                  <input
                    type="number"
                    min={1}
                    className="searchItemOptionItemInput"
                    placeholder={options.adults}
                  />
                </div>
                <div className="searchItemOptionItem">
                  <span className="searchItemOptionItemText">
                    {options.children > 1 ? "Children" : "Child"}
                  </span>
                  <input
                    type="number"
                    min={0}
                    className="searchItemOptionItemInput"
                    placeholder={options.children}
                  />
                </div>
                <div className="searchItemOptionItem">
                  <span className="searchItemOptionItemText">
                    {options.room > 1 ? "Rooms" : "Room"}
                  </span>
                  <input
                    type="number"
                    min={1}
                    className="searchItemOptionItemInput"
                    placeholder={options.room}
                  />
                </div>
              </div>
            </div>
            <button>Search</button>
          </div>
          <div className="hotelListResult">
            <SearchResult />
            <SearchResult />
            <SearchResult />
            <SearchResult />
            <SearchResult />
            <SearchResult />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hotels