import "../App.css"
import { useState } from "react";

import OtpInput from 'react-otp-input';
import { useNavigate } from "react-router-dom";
function OTP() {
    const [otp, setOtp] = useState('');
    const navigate = useNavigate();
    const mobileNumber = localStorage.getItem('mobileNo');
    const dial_code = "+91";
    const handleSubmit = async(event)=>{
        event.preventDefault();
        try {
            const response = await fetch('https://staging.fastor.in/v1/pwa/user/login', {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json',
              },
              body: JSON.stringify({phone: mobileNumber, otp: otp,dial_code:dial_code }),
            });
           
            if (response.ok) {
                
              const data = await response.json();
              
              if (data.status === 'Success') {
                // OTP is verified successfully
                console.log(data.token
                    );
                localStorage.setItem('token',data.data.token);
                navigate('/Home');
              } else {
                // Handle unsuccessful verification
                alert('OTP Invalid')
              }
            } else {
              // Handle response status other than OK
              alert('Server Error')
            }
        } catch (error) {
            // Handle fetch error
          }
        }
  return (
    <div className="otpContainer">
      <form className="form">
       
        <div className="title">OTP</div>
        <div className="title">Verification Code</div>
        <p className="message">
          We have sent a verification code to your mobile number
        </p>
        <div className="inputs">
        <OtpInput
      value={otp}
      onChange={setOtp}
      numInputs={6}
      renderSeparator={<span>-</span>}
      renderInput={(props) => <input {...props} />}
    />
          
        </div>
        <button className="action" onClick={handleSubmit}>Verify</button>
        <div className="resend" >Didn&apos;t recieved code? <span style={{color:"blue"}}>Resend</span></div>
      </form>
    </div>
  );
}

// eslint-disable-next-line react-refresh/only-export-components
export default OTP;
