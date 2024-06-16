import React from 'react'
import { Route, Routes } from 'react-router-dom'
import MainLayout from './Components/MainLayout'
import Home from './pages/Home'
import UserRegistration from './pages/UserRegistration'
import Batches from './pages/Batches'
import Login from './pages/Login'
import VerifyOtp from './pages/VerifyOtp'

const App = () => {
  return (
    <div>
      <Routes>
        <Route path='' element={<MainLayout />}>
          <Route path='' element={<Home />} />
          <Route path='/UserRegistration' element={<UserRegistration />} />
          <Route path='/batches' element={<Batches />} />
          <Route path='/login' element={<Login />} />
          <Route path='/verify-otp' element={<VerifyOtp />} />
        </Route>
      </Routes>
    </div>
  )
}

export default App
