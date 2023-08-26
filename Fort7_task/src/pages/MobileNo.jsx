import "../App.css"
import  { useState } from 'react';
import { useNavigate} from 'react-router-dom'

function MobileNo() {
    const [mobileNumber, setMobileNumber] = useState('');
    const navigate = useNavigate();
    
    const handleSubmit = async ()=>{
      try {
        // eslint-disable-next-line no-unused-vars
         await fetch('https://staging.fastor.in/v1/pwa/user/register', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ phone: mobileNumber}),
        });
  
        localStorage.setItem('mobileNo',mobileNumber);
        navigate('/OTP');
      } catch (error) {
        // Handle fetch error
      }
    };
    
  return (
    <div className="container">
    <div className="MobileNo">
        
      <h1 style={{fontSize:"1.7rem"}}>Enter Your Mobile Number</h1>
      <p className="sendVer">We will send you the 4 digit verification code</p>
      <input type ='tel' className="inputNumber" inputMode="numeric" pattern="[0-9]*"  placeholder="Enter your number"
      value={mobileNumber}
      onChange={(e) => setMobileNumber(e.target.value)}
      />
      
      <button className="sendCode"onClick={handleSubmit}>Send Code</button>
    </div>
    </div>
  )
}

export default MobileNo
