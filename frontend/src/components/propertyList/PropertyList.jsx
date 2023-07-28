

const PropertyList = (props) => {


  return <div>
                <img src={props.src} alt="" className="cities"/>
                <h1 className="title">{props.city}</h1>
                <p className="count">{`${props.property} Properties`}</p>
        </div>
}

export default PropertyList;