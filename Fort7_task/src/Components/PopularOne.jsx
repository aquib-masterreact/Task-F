import { useNavigate } from "react-router-dom";
import "../App.css"
import { useState,useEffect } from "react";
function PopularOne() {
  const [data, setData] = useState([]);
  
  useEffect(() => {
    // Replace 'YOUR_BEARER_TOKEN' and 'API_ENDPOINT_URL' with actual values
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
    .then((responseData) => {
      setData(responseData);  // Setting the state after the fetch
      console.log(responseData);  // Logging the responseData, not the state variable
    })
    .catch(error => {
      console.error("Error fetching data:", error);
    });
  }, []);
  const navigate = useNavigate();
  const handleClick =()=>{
    navigate('/Details');
  }
      
    
  return (
    <div style={{width:"100%",padding:"0.3rem"}}>
      <h1>Popular Ones</h1>
      {data.map((restaurant)=>{
        return(
          <div className="items" style={{padding:"0.5rem",width:"100%"}} key={restaurant.restaurant_id}>
        <div className="itemCard" style={{display:"flex",justifyContent:"center"}} onClick={handleClick}>
            <img src={restaurant.images.url} className="itemImg"/>
            <div className="cardDetails" style={{width:"70%",textAlign:"center",padding:"0.2rem"}}>
                <h3>{restaurant.restaurant_name}</h3>
                <p>Cakes,Pastry,Pastas</p>
                <p>Connaught place, New Delhi</p>
            </div>
        </div>
      </div>
        )
        
      })}
      
    </div>
  )
}

export default PopularOne
