import "./hotel.css"
import Navbar from "../../components/navbar/Navbar"
import Header from "../../components/header/Header"
import MailList from "../../components/mailList/MailList"
import Footer from "../../components/footer/Footer"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronLeft, faChevronRight, faCircleXmark, faLocationDot } from '@fortawesome/free-solid-svg-icons'
import { useState } from "react"
import { set } from "date-fns"



const Hotel = () => {
  const [slideIdx, setSlideIdx] = useState(0)
  const [openSlide, setOpenSlide] = useState(false)
  const handleClick= (i) => {
    setOpenSlide(!openSlide)
    setSlideIdx(i)
  }
  
  let images=[
  {
    src:"https://t-cf.bstatic.com/xdata/images/hotel/max1280x900/187213920.jpg?k=9e5daa162052328ab3055b1daf42852916988845a2f996efc0f1b765bf1370a8&o=&hp=1"
  },
  {
    src:"https://t-cf.bstatic.com/xdata/images/hotel/max1280x900/194941440.jpg?k=15094bf166870c4fd9eb20981e8a547bcfc894ba77fc74f420d51bc014562ff8&o=&hp=1"
  },
  {
    src:"https://t-cf.bstatic.com/xdata/images/hotel/max1280x900/351067234.jpg?k=fb214afe4ef488457bf93f12d507b57c4aba1779eb4056d1efcb1bd1e389155e&o=&hp=1"
  },
  {
    src:"https://t-cf.bstatic.com/xdata/images/hotel/max1280x900/187213815.jpg?k=50cfb39746e9da8b8db37d71711e292a984f43dd11dce7f5748b3bc35284774b&o=&hp=1"
  },
  {
    src:"https://t-cf.bstatic.com/xdata/images/hotel/max1280x900/194941441.jpg?k=c9110de428a602edc0c5fb4ded0f050682b77e6f0a8fd7395d984dc6e62b5406&o=&hp=1"
  },
  {
    src:"https://t-cf.bstatic.com/xdata/images/hotel/max1280x900/194941403.jpg?k=5f0b92a4704ce5641b96c7a12b340a96796113e9bdedcf7a1451f1e3a8522f2f&o=&hp=1"
  },
  {
    src:"https://t-cf.bstatic.com/xdata/images/hotel/max1280x900/194941349.jpg?k=351f6167b1997729e11dc1b0a789ff52c71ee95ac7c1fbdc1164396e828a1d41&o=&hp=1"
  },
  {
    src:"https://t-cf.bstatic.com/xdata/images/hotel/max1280x900/131385949.jpg?k=fa3229280ca85edc4a7cba9fbe4121f1804cd6930667982983a8426039ae8b48&o=&hp=1"
  },
]
  const handleSlide=(operation)=>{
    let newSlideIdx
    if (operation ==="left"){
      newSlideIdx=slideIdx===0 ? images.length-1 : slideIdx-1
    } else{
      newSlideIdx=slideIdx=== images.length-1 ? 0 : slideIdx+1
    }
    setSlideIdx(newSlideIdx)
  }

  return (
    <div>
      <Navbar />
      <Header type="list"/>
      <div className="hotelContainer">
      {openSlide && <div className="hotelSlider">
      <FontAwesomeIcon icon={faCircleXmark} className="slidercloseBtn" onClick={()=>setOpenSlide(false)} />
      <FontAwesomeIcon icon={faChevronLeft} className="arrow" onClick={()=>handleSlide("left")} />
      <div className="sliderWrapper">
        <img src={images[slideIdx].src} alt="" className="sliderImg" />
      </div>
      <FontAwesomeIcon icon={faChevronRight} className="arrow" onClick={()=>handleSlide("right")}/>
      </div>}
        <div className="hotelWrapper">
          <h1 className="hotelTitle">Grand Hotel</h1>
          <div className="hotelAddress">
            <FontAwesomeIcon icon={faLocationDot}/>
            <span>111 Country Club Dr</span>
            <button className="hotelDetailsBtn">Reserve or Book Now!</button>
          </div>
          <span className="hotelDistance">Excellent location - 500ft from center</span>
          <span className="hotelPriceHighlight">
            Book a stay over $114 at this property and get a free airport taxi
          </span>
          <div className="hotelImages">
          {images.map((image,i)=>(
            <div className="hotelImage" key={i}>
              <img onClick={()=>handleClick(i)} src={image.src} alt="hotel" className="hotelImg"/>
            </div>
          ))}
          </div>
          <div className="hotelDetails">
            <div className="hotelDetailsText">
              <h2 className="hotelDetailsTitle">Stay best location in the Tahoe</h2>
              <p className="hotelDetailsDesc">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Assumenda temporibus inventore, dolores illum sunt officia tempore amet? Quibusdam, reiciendis eos velit earum alias aliquam iure eius, modi incidunt quia at! 
              </p>
            </div>
            <div className="hotelDetailsPrize">
              <h2 className="hotelPrizeTitle">Perfect for a 9-night stay</h2>
              <p className="hotelPrizeDesc">Located in the hearth of the Lake Tahoe. Excellent location Location score is 9.8!</p>
              <span className="hotelPrize"><b>$945</b> (9 nights)</span>
              <button className="hotelPrizeBtn">Reserve or Book Now!</button>
            </div>
          </div>
        </div>
        <MailList />
        <Footer />
      </div>
      
    </div>
  )
}

export default Hotel