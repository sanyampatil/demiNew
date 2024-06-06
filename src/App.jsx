import React from 'react'
import { Route, Routes } from 'react-router-dom'
import MainLayout from './Components/MainLayout'
import Home from './pages/Home'

const App = () => {
  return (
    <div>
      <Routes>
        <Route path='' element={<MainLayout />}>
          <Route path='' element={<Home />} />
        </Route>
      </Routes>
    </div>
  )
}

export default App
