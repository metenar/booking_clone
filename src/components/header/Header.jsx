import './header.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBed, faCalendarDays, faCar, faPerson, faPlane, faTaxi, faTreeCity } from '@fortawesome/free-solid-svg-icons'
import { DateRange } from 'react-date-range';
import { useState } from 'react';
import {format} from 'date-fns'
import {useNavigate} from "react-router-dom"
import 'react-date-range/dist/styles.css'; 
import 'react-date-range/dist/theme/default.css';

const Header = ({type}) => {
  const [date, setDate] = useState([
    {
      startDate: new Date(),
      endDate: null,
      key: "selection",
    },
  ]);
  const [destination, setDestination] = useState("");
  const [openDate, setOpenDate] = useState(false);
  const [options, setOptions] = useState({
    adults: 1,
    children: 0,
    room: 1,
  });
  const navigate=useNavigate()
  const [openOptions, setOpenOptions] = useState(false);
  const handleClick = (name, operation) => {
    setOptions((prev) => {
      return {
        ...prev,
        [name]: operation === "i" ? options[name] + 1 : options[name] - 1,
      };
    });
  };
  const handleSearch=()=>{
    navigate('/hotels',{state:{destination,date,options}})
  }

  return (
    <div className="header">
      <div className={type==="list" ? "headerContainer listMode" : "headerContainer"}>
        <div className="headerList">
          <div className="headerListItem active">
            <FontAwesomeIcon icon={faBed} />
            <span>Stays</span>
          </div>
          <div className="headerListItem">
            <FontAwesomeIcon icon={faPlane} />
            <span>Flights</span>
          </div>
          <div className="headerListItem">
            <FontAwesomeIcon icon={faCar} />
            <span>Car Rentals</span>
          </div>
          <div className="headerListItem">
            <FontAwesomeIcon icon={faTreeCity} />
            <span>Attractions</span>
          </div>
          <div className="headerListItem">
            <FontAwesomeIcon icon={faTaxi} />
            <span>Airport taxis</span>
          </div>
        </div>
        {type!=="list" && <><h1 className="headerTitle">Find deals for any season</h1>
        <p className="headerDesc">
          From cozy bed & breakfasts to luxury hotels
        </p>
        <button className="headerBtn">Sign in/Register</button>
        <div className="headerSearch">
          <div className="headerSearchItem">
            <FontAwesomeIcon icon={faBed} className="headerSearchIcon" />
            <input
              type="text"
              className="headerSearchInput"
              placeholder="Where are you going?"
              onChange={(e)=>setDestination(e.target.value)}
            />
          </div>
          <div className="headerSearchItem">
            <FontAwesomeIcon
              icon={faCalendarDays}
              className="headerSearchIcon"
            />
            <span
              onClick={() => setOpenDate(!openDate)}
              className="headerSearchText"
            >
              {`${format(date[0].startDate, "MM/dd/yyyy")} - ${
                date[0].endDate === null
                  ? "checkout"
                  : format(date[0].endDate, "MM/dd/yyyy")
              }`}
            </span>
            {openDate && (
              <DateRange
                editableDateInputs={true}
                onChange={(item) => setDate([item.selection])}
                moveRangeOnFirstSelection={false}
                ranges={date}
                minDate={new Date()}
                retainEndDateOnFirstSelection={true}
                className="headerDate"
              />
            )}
          </div>
          <div className="headerSearchItem">
            <FontAwesomeIcon icon={faPerson} className="headerSearchIcon" />
            <span
              onClick={() => setOpenOptions(!openOptions)}
              className="headerSearchText"
            >{`
            ${options.adults} ${options.adults > 1 ? "adults" : "adult"}  ·  ${
              options.children
            } ${options.children > 1 ? "children" : "child"} · ${
              options.room
            } ${options.room > 1 ? "rooms" : "room"}
            `}</span>
            {openOptions && <div className="options">
              <div className="optionItem">
                <span className="optionText">Adults</span>
                <div className="optionCounter">
                  <button
                    disabled={options.adults <= 1}
                    className="optionCounterBtn"
                    onClick={() => handleClick("adults", "d")}
                  >
                    -
                  </button>
                  <span className="optionCounterNumber">{options.adults}</span>
                  <button
                    className="optionCounterBtn"
                    onClick={() => handleClick("adults", "i")}
                  >
                    +
                  </button>
                </div>
              </div>
              <div className="optionItem">
                <span className="optionText">Children</span>
                <div className="optionCounter">
                  <button
                    disabled={options.children <= 0}
                    className="optionCounterBtn"
                    onClick={() => handleClick("children", "d")}
                  >
                    -
                  </button>
                  <span className="optionCounterNumber">
                    {options.children}
                  </span>
                  <button
                    className="optionCounterBtn"
                    onClick={() => handleClick("children", "i")}
                  >
                    +
                  </button>
                </div>
              </div>
              <div className="optionItem">
                <span className="optionText">Rooms</span>
                <div className="optionCounter">
                  <button
                    disabled={options.room <= 1}
                    className="optionCounterBtn"
                    onClick={() => handleClick("room", "d")}
                  >
                    -
                  </button>
                  <span className="optionCounterNumber">{options.room}</span>
                  <button
                    className="optionCounterBtn"
                    onClick={() => handleClick("room", "i")}
                  >
                    +
                  </button>
                </div>
              </div>
            </div>}
          </div>
          <div className="headerSearchItem">
            <button className="headerBtn" onClick={handleSearch}>Search</button>
          </div>
        </div></>}
      </div>
    </div>
  );
}

export default Header