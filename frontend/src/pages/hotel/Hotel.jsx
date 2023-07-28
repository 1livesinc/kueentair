import {
  ArrowBack,
  ArrowForward,
  CloseRounded,
  LocationOn,
} from '@mui/icons-material';
import Footer from 'components/footer/Footer';
import MailList from 'components/mailList/MailList';
import Nav from 'components/navbar/Nav';
import { useState } from 'react';
import './hotel.css';
import photos from './photos';

const Hotel = () => {
  const [slider, setSlider] = useState(0);
  const [openslider, setOpenSlider] = useState(false);

  const handleSliderOpen = (i) => {
    setSlider(i);
    setOpenSlider(true);
  };

  const handleMove = (direction)=> {
    let newSlider;

    if(direction ==="l") {
      newSlider = slider === 0 ? 5: slider -1
    } else{
      newSlider = slider === 5 ? 0 : slider +1
  }
  setSlider(newSlider)
  }
  return (
    <div>
      <Nav />
      <div className="hotelContainer">
        {openslider && (
          <div className="slider">
            <CloseRounded
              className="close"
              onClick={() => setOpenSlider(false)}
            />
            <ArrowBack className="arrow" onClick={()=>handleMove("l")}/>
            <div className="sliderWrapper">
              <img src={photos[slider].src} alt="" className="sliderImg" />
            </div>
            <ArrowForward className="arrow" onClick={()=>handleMove("r")}/>
          </div>
        )}
        <div className="hotelWrapper">
          <button className="bookNow">Reserve or Book Now!</button>
          <h1 className="hotelTitle">Grand Hotel</h1>
          <div className="hotelAddress">
            <LocationOn />
            <span>Elton St 125 New York</span>
          </div>
          <span className="hotelDistance">
            Excellent location | 500m from <center></center>
          </span>
          <span className="priceHightlight">
            Book a stay over $114 at this property and get a free airport taxi
            <center></center>
          </span>
          <div className="hotelImages">
            {photos.map((photo, i) => (
              <div className="hotelImgWrapper" key={i}>
                <img
                  onClick={() => handleSliderOpen(i)}
                  src={photo.src}
                  alt=""
                  className="hotelImg"
                />
              </div>
            ))}
          </div>
          <div className="hotelDetails">
            <div className="hotelDetailsText">
              <h1 className="hotelTitle">Stay in the heart of krakow</h1>
              <p className="hotelDesc">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto
                sapiente nemo laboriosam? Nisi ducimus adipisci expedita
                excepturi? Doloribus distinctio veniam necessitatibus quia,
                eligendi facere, ratione iure et repudiandae cumque praesentium!
              </p>
            </div>
            <div className="hotelDetailsPrice">
              <h1>Perfect for a 9-night stay</h1>
              <span>
                Located in the real heart of Krakow, this property has an
                excellent location score of 9.8!
              </span>
              <h2>
                <b>$945</b> (9 nights)
              </h2>
              <button>Reserve or Book Now!</button>
            </div>
          </div>
        </div>
        <MailList />
        <Footer />
      </div>
    </div>
  );
};

export default Hotel;
