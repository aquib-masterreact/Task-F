import Carousel from "../Components/Carousel"
import Navbar from "../Components/Navbar"
import PopularOne from "../Components/PopularOne"
import YourTaste from "../Components/YourTaste"

function MainPage() {
 
  return (
    <div>
      <Navbar/>
      <div className="header" style={{width:"100%",display:"flex"}}>
        <div className="card1" style={{width:"35%",padding:"1rem",margin:"0.4rem",marginTop:"0.7rem"}}>
            <h3>Karan</h3>
            
            <p>Lets explore this evening</p>
        </div>
        <div className="card2" style={{width:"60%",padding:"1rem",margin:"0.3rem"}}>
            <img src="https://thumbs.dreamstime.com/z/special-offer-25832389.jpg?w=768"alt=""
            style={{width:"100%"}}
            />
        </div>
      </div>
      <YourTaste/>
      <Carousel/>
      <PopularOne/>
    </div>
  )
}

export default MainPage
