import Nav from "components/navbar/Nav";
import format from 'date-fns/format';
import { useEffect, useRef, useState } from 'react';
import { useLocation } from "react-router-dom";
import "./list.css"
import { DateRange } from 'react-date-range';
import { Container } from "@mui/material";
import ListResults from "components/listResults/ListResults";

const List = () => {

  const location = useLocation();
  const [destination,setDestination] = useState(location.state.destination)
  const [range, setRange] = useState(location.state.range)
  const [storeOptions, setStoreOptions] = useState(location.state.storeOptions)
 
  // List Calender Open/Close Logic
  
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


  //###############################

  return (
    <Container>
      <Nav />
      
      <div className="listContainer">

        <div className="listWrapper">
          <div className="listSearch">
            <h1 className="listTitle">Search</h1>
            <div className="listItem">
              <label>Destination</label>
              <input placeholder={destination} type="text" />
            </div>
            <div className="listItem" ref={refOne}>
              <label>Check-in Date</label>
              <span onClick={()=> setOpen(!open)}>{`${format(
                range[0].startDate,
                'MM/dd/yyyy'
              )} to ${format(range[0].endDate, 'MM/dd/yyyy')}`}</span>
             {open && <DateRange onChange={(item)=> setRange([item.selection])} 
              minDate={new Date()}
              ranges={range}/>}
            </div>
            
            <div className="listItem">
              <label>Options</label>
              <div className="listSearchOption">

              <div className="listOptionItem">
              <span className="listOptionText">
                Min Price <small>per night</small>
              </span>
              <input type="number" className="listOptionInput" />
              </div>
              <div className="listOptionItem">
              <span className="listOptionText">
                Max Price <small>per night</small>
              </span>
              <input type="number" className="listOptionInput" />
              </div>
              <div className="listOptionItem">
              <span className="listOptionText">
                Adult 
              </span>
              <input type="number" className="listOptionInput" placeholder={storeOptions.adult}  min={1}/>
              </div>
              <div className="listOptionItem">
              <span className="listOptionText">
                Children
              </span>
              <input type="number" className="listOptionInput" placeholder={storeOptions.children}  min={0}/>
              </div>
              <div className="listOptionItem">
              <span className="listOptionText">
               Room
              </span>
              <input type="number" className="listOptionInput" placeholder={storeOptions.room}  min={1}/>
              </div>
              
            </div>
              </div>
              <button>Search</button>
          </div>
          <div className="listResult">
          <ListResults />
          <ListResults />
          <ListResults />
          <ListResults />
          <ListResults />
          <ListResults />
          <ListResults />
          </div>
     
        </div>
        
      </div>
    </Container>
  )
}

export default List;