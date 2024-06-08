import React from 'react'
import { Route, Routes } from 'react-router-dom'
import MainLayout from './Components/MainLayout'
import Home from './pages/Home'
import UserRegistration from './pages/UserRegistration'

const App = () => {
  return (
    <div>
      <Routes>
        <Route path='' element={<MainLayout />}>
          <Route path='' element={<Home />} />
          <Route path='/UserRegistration' element={<UserRegistration />} />
        </Route>
      </Routes>
    </div>
  )
}

export default App
