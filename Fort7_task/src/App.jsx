
import { Route, Routes } from 'react-router-dom'
import './App.css'
import MainPage from './pages/MainPage'
import MobileNo from './pages/MobileNo'
//import MobileNo from './pages/MobileNo'
import OTP from './pages/OTP'
import Restro from './pages/Restro'

function App() {
  

  return (
    <>
      <Routes>
        <Route path="/" element={<MobileNo/>}/>
        <Route path='/OTP' element={<OTP/>}/>
        <Route path='/Home' element={<MainPage/>}/>
        <Route path='/Details' element={<Restro/>}/>
      </Routes>
    
    </>
  )
}

export default App
