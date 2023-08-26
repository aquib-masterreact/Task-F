
import { useState,useEffect } from "react";
function YourTaste() {
  // eslint-disable-next-line no-unused-vars
  const [data, setData] = useState(null);
  const [seeAll,setseeAll] = useState(false)
  useEffect(() => {
    
    const bearerToken = localStorage.getItem('token');
    const apiEndpoint = 'https://staging.fastor.in/v1/m/restaurant?city_id=118&&';

    fetch(apiEndpoint, {
      method: 'GET',
      headers: {
        'Authorization': `Bearer ${bearerToken}`
      }
    })
    .then(response => {
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      return response.json();
    })
    .then(data => {
      setData(data);
      
    })
    .catch(error => {
      console.error("Error fetching data:", error);
    });
}, []);

  return (
    <div>
      <div className="head">
        <h4>Your taste</h4>
        <p onClick={()=>{setseeAll(true)}}>see All 


        </p>
      </div>
      <div className="tasteBody" style={{overflowX:seeAll?"scroll":"hidden"}}>
        <div className="restCard" style={{width:"150px",height:"270px",padding:"0.5rem",margin:"0.3rem"}}>
            <img src="https://media.istockphoto.com/id/518468635/photo/french-pastries-on-display-a-confectionery-shop.jpg?s=612x612&w=0&k=20&c=av7rYRCLckvDp6s9sGmA_S9Lp_fTSDSSOtmR0wWJ8nY="
            style={{width:"150px",height:"150px"}}/>
            <h4>Nik Bakers</h4>
            <p>Connaught Place</p>
            <p>New Delhi</p>
        </div>
        <div className="restCard" style={{width:"150px",height:"270px",padding:"0.5rem",margin:"0.3rem"}}>
            <img src="https://media.istockphoto.com/id/518468635/photo/french-pastries-on-display-a-confectionery-shop.jpg?s=612x612&w=0&k=20&c=av7rYRCLckvDp6s9sGmA_S9Lp_fTSDSSOtmR0wWJ8nY="
            style={{width:"150px",height:"150px"}}/>
            <h4>Nik Bakers</h4>
            <p>Connaught Place</p>
            <p>New Delhi</p>
        </div>
        <div className="restCard" style={{width:"150px",height:"270px",padding:"0.5rem",margin:"0.3rem"}}>
            <img src="https://media.istockphoto.com/id/518468635/photo/french-pastries-on-display-a-confectionery-shop.jpg?s=612x612&w=0&k=20&c=av7rYRCLckvDp6s9sGmA_S9Lp_fTSDSSOtmR0wWJ8nY="
            style={{width:"150px",height:"150px"}}/>
            <h4>Nik Bakers</h4>
            <p>Connaught Place</p>
            <p>New Delhi</p>
        </div>
        <div className="restCard" style={{width:"150px",height:"270px",padding:"0.5rem",margin:"0.3rem"}}>
            <img src="https://media.istockphoto.com/id/518468635/photo/french-pastries-on-display-a-confectionery-shop.jpg?s=612x612&w=0&k=20&c=av7rYRCLckvDp6s9sGmA_S9Lp_fTSDSSOtmR0wWJ8nY="
            style={{width:"150px",height:"150px"}}/>
            <h4>Nik Bakers</h4>
            <p>Connaught Place</p>
            <p>New Delhi</p>
        </div>
        <div className="restCard" style={{width:"150px",height:"270px",padding:"0.5rem",margin:"0.3rem"}}>
            <img src="https://media.istockphoto.com/id/518468635/photo/french-pastries-on-display-a-confectionery-shop.jpg?s=612x612&w=0&k=20&c=av7rYRCLckvDp6s9sGmA_S9Lp_fTSDSSOtmR0wWJ8nY="
            style={{width:"150px",height:"150px"}}/>
            <h4>Nik Bakers</h4>
            <p>Connaught Place</p>
            <p>New Delhi</p>
        </div>
        <div className="restCard" style={{width:"150px",height:"270px",padding:"0.5rem",margin:"0.3rem"}}>
            <img src="https://media.istockphoto.com/id/518468635/photo/french-pastries-on-display-a-confectionery-shop.jpg?s=612x612&w=0&k=20&c=av7rYRCLckvDp6s9sGmA_S9Lp_fTSDSSOtmR0wWJ8nY="
            style={{width:"150px",height:"150px"}}/>
            <h4>Nik Bakers</h4>
            <p>Connaught Place</p>
            <p>New Delhi</p>
        </div>
      </div>
    </div>
  )
}

export default YourTaste
