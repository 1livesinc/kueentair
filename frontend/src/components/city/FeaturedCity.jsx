import City from "./City";
import CityData from "./CityData";
import "./featured.css"





const FeaturedCity = () => {





const cities = CityData.map(value => {

  return (
    <City 
    key={value.id}
    {...value}
    />
  )
})


 
    
  return (

  
  
    <div className="featured__cities">
       
     {cities}
    
    </div>
   
  )
}

export default FeaturedCity;





