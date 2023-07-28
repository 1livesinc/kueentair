import { useEffect, useRef, useState } from 'react';
import { Box,  Paper, Typography, Button } from '@mui/material';
import {
  LocationOn,
  CalendarMonth,
  ArrowDropDown,
  FamilyRestroom,
} from '@mui/icons-material';
import format from 'date-fns/format';
import { DateRange } from 'react-date-range';
import { addDays } from 'date-fns';
import 'react-date-range/dist/styles.css';
import 'react-date-range/dist/theme/default.css';
import './stays.css';
import { useNavigate } from 'react-router-dom';


const StaysDate = () => {


  // Rooms & Travelers Search Logic
  const [openOptions, setOpenOptions] = useState(false);

  const [storeOptions, setStoreOptions] = useState({
    adult: 2,
    children: 0,
    room: 1,
  });

  const handleClickOptions = (name, operation) => {
    setStoreOptions((prev) => {
      return {
        ...prev,
        [name]:
          operation === 'i' ? storeOptions[name] + 1 : storeOptions[name] - 1,
      };
    });
  };

  // get the target element to toggle
  const refOneOptions = useRef(null);

  useEffect(() => {
    // event listeners
    document.addEventListener('keydown', hideOnEscapeOptions, true);
    document.addEventListener('click', hideOnClickOutsideOptions, true);
  }, []);

  // hide dropdown on ESC press
  const hideOnEscapeOptions = (e) => {
    // console.log(e.key)
    if (e.key === 'Escape') {
      setOpenOptions(false);
    }
  };

  // Hide on outside click
  const hideOnClickOutsideOptions = (e) => {
    // console.log(refOne.current)
    // console.log(e.target)
    if (refOneOptions.current && !refOneOptions.current.contains(e.target)) {
      setOpenOptions(false);
    }
  };

  //CALENDER MAIN LOGIC

  // date state
  const [range, setRange] = useState([
    {
      startDate: new Date(),
      endDate: addDays(new Date(), 7),
      key: 'selection',
    },
  ]);

  // open close
  const [open, setOpen] = useState(false);

  // get the target element to toggle
  const refOne = useRef(null);

  useEffect(() => {
    // event listeners
    document.addEventListener('keydown', hideOnEscape, true);
    document.addEventListener('click', hideOnClickOutside, true);
  }, []);

  // hide dropdown on ESC press
  const hideOnEscape = (e) => {
    // console.log(e.key)
    if (e.key === 'Escape') {
      setOpen(false);
    }
  };

  // Hide on outside click
  const hideOnClickOutside = (e) => {
    // console.log(refOne.current)
    // console.log(e.target)
    if (refOne.current && !refOne.current.contains(e.target)) {
      setOpen(false);
    }
  };

  //Search Button Logic
  const [destination, setDestination] = useState('');
  const navigate = useNavigate();

  const handleSearch = () => {
    navigate('/hotels', { state: { destination, range, storeOptions } });
  };

  return (
    
      <div className="stays__wrapper">


        {/* ############### Rooms & Travelers*/}
        <div className="rooms__travelers">
        <FamilyRestroom />
        <div
          className="options__selector"
          onClick={() => setOpenOptions(!openOptions)}
          >
          {`${storeOptions.adult} adults | ${storeOptions.children} children | ${storeOptions.room} room`}
          <ArrowDropDown />
        </div>

        {openOptions && (
          <Paper
          className="options__items"
          ref={refOneOptions}
          elevation={10}
          >
            <Box
              sx={{
                display: 'flex',
                alignItems: 'center',
                p: 1,
              }}
              >
              <Typography
                flex={4}
                sx={{
                  textAlign: 'left',
                  fontSize: '15px',
                  fontWeight: 'bold',
                }}
                >
                Adults
              </Typography>

              <button
                disabled={storeOptions.adult <= 1}
                onClick={() => handleClickOptions('adult', 'd')}
                className="decrease__Button"
                >
                -
              </button>
              <Typography
                className="store__Options"
                flex={1}
                sx={{ fontSize: '1rem', fontWeight: 'bold' }}
                >
                {storeOptions.adult}
              </Typography>
              <button
                onClick={() => handleClickOptions('adult', 'i')}
                className="decrease__Button"
                >
                +
              </button>
            </Box>
            <Box
              sx={{
                display: 'flex',
                alignItems: 'center',
                p: 1,
              }}
              >
              <Typography
                flex={4}
                sx={{
                  textAlign: 'left',
                  fontSize: '15px',
                  fontWeight: 'bold',
                }}
                >
                Children
              </Typography>
              <button
                disabled={storeOptions.children <= 0}
                onClick={() => handleClickOptions('children', 'd')}
                className="decrease__Button"
                >
                -
              </button>
              <Typography
                className="store__Options"
                flex={1}
                sx={{ fontSize: '1rem', fontWeight: 'bold' }}
                >
                {storeOptions.children}
              </Typography>
              <button
                onClick={() => handleClickOptions('children', 'i')}
                className="decrease__Button"
                >
                +
              </button>
            </Box>
            <Box
              sx={{
                display: 'flex',
                alignItems: 'center',
                p: 1,
              }}
              >
              <Typography
                flex={4}
                sx={{
                  textAlign: 'left',
                  fontSize: '15px',
                  fontWeight: 'bold',
                }}
                >
                Rooms
              </Typography>
              <button
                disabled={storeOptions.room <= 1}
                onClick={() => handleClickOptions('room', 'd')}
                className="decrease__Button"
                >
                -
              </button>
              <Typography
                className="store__Options"
                flex={1}
                sx={{ fontSize: '1rem', fontWeight: 'bold' }}
                >
                {storeOptions.room}
              </Typography>
              <button
                onClick={() => handleClickOptions('room', 'i')}
                className="decrease__Button"
                >
                +
              </button>
            </Box>
          </Paper>
        )}
        </div>
        {/* ############### Going to?*/}
        <div className="going__to destination">
          <LocationOn />
          <input
            placeholder="Going to?"
            onChange={(e) => setDestination(e.target.value)}
            className="inputBox"
          />
          
        </div>

        {/* ############### Check-in | Check-out*/}
        <div className="checkinout__main">

        <Box onClick={() => setOpen(!open)} className=" checkin__checkout destination">
          <CalendarMonth />

          <input
            value={` Date: ${format(
              range[0].startDate,
              'MM/dd/yyyy'
              )} to ${format(range[0].endDate, 'MM/dd/yyyy')}`}
              readOnly
              className="inputBox"
              />
              <ArrowDropDown />
        </Box>
        <div ref={refOne}>
          {open && (
            <DateRange
            editableDateInputs={true}
            onChange={(item) => setRange([item.selection])}
            moveRangeOnFirstSelection={false}
            ranges={range}
            months={1}
            direction="horizontal"
            className="calendarElement"
            minDate={new Date()}
            />
            )}
            </div>
        </div>

        {/* ############### Search Button*/}
        <div className="search">
          <Button variant="contained" onClick={handleSearch}>
            Search
          </Button>
        </div>
      </div>
    
  );
};

export default StaysDate;
