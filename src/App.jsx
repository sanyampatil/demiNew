import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Route, Router, Routes } from 'react-router-dom'
import MainLayout from './Components/MainLayout'

function App () {
  return (
    <>
      <Routes>
        <Route path='' element={<MainLayout />}></Route>
      </Routes>
    </>
  )
}

export default App
