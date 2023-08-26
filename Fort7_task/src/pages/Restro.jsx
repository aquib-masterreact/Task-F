import { useState,useEffect } from "react";
import "../App.css";
import { useNavigate } from "react-router-dom";
function Restro() {
    // eslint-disable-next-line no-unused-vars
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
      //console.log(responseData);  // Logging the responseData, not the state variable
    })
    .catch(error => {
      console.error("Error fetching data:", error);
    });
  }, []);
  const navigate = useNavigate();
  const goBack=()=>{
    navigate('/Home');
  }
  return (
    <div>
      <div className="detailsPage"style={{width:"100%",height:"40%"}} >
        <div className="back"style={{padding:"0.5rem",backgroundColor:"black"}}onClick={goBack}><img src="../assets/icons8-back-50.png"/></div>
        <img src="https://images.unsplash.com/photo-1578985545062-69928b1d9587?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
        width="100%"
        
        
        />
        <div className="det" style={{textAlign:"center",display:"flex",justifyContent:"space-between",padding:"1rem",flexWrap:"wrap"}}>
            <div className="span1">
            <h1 style={{fontSize:"18px",fontWeight:"700"}}>Neera&apos;s Bakery</h1>
            <p>Connaught Place</p>
            </div>
            <img src="https://www.flaticon.com/free-icons/star" alt=""/>
            <p style={{width:"100%",marginTop:"2rem"}}>Our delicate vanilla cake swirled with chocolate and filled with mocha chocolate chip cream and a layer of dark chocolate ganache</p>
            
        </div>
      </div>
    </div>
  )
}

export default Restro
