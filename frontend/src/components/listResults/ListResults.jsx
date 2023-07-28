
import "./listResults.css"

const ListResults = () => {
  return (
  <div className="searchItem">
    <img src="https://media.1lives.us/wp-content/uploads/2022/07/mskuae.jpeg" alt="" className="searchImage"/>


    <div className="searchDesc">
    <h1 className="searchTitle">Tower Street Apartments</h1>
    <span className="distance">500m from center</span>
    <span className="taxi">Free airport taxi</span>
    <span className="subtitle">
    Studio Apartment with Air conditioning
    </span>
    <span className="features">
    Entire studio | 1 bathroom | 21m2 1 full beed
    </span>
    <span className="cancel">
    Free cancellation
    </span>
    <span className="cancelSubtitle">
    You can cancel later, so lock in this great price today!
    </span>

    </div>

    <div className="details">
       
       <div className="rating">
        <span>Excellent</span>
        <button>8.9</button>
       </div>

       <div className="detailTexts">
        <span className="price">$123</span>
        <span className="priceTax">Includes taxes and fees</span>
        <button className="checkButton">See availability</button>
       </div>
    </div>





  </div>

 
  )
}

export default ListResults