import PropertyData from "./PropertyData"
import PropertyList from "./PropertyList";
import "./property.css"





const Property = () => {

const cities = PropertyData.map(e => {

  return (
    <PropertyList
    key={e.id}
    {...e}
    />
  )
})


  return (
    <div className="featured__cities">
     {cities}
    </div>
  )
}

export default Property;