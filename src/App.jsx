import React from 'react'
import {BrowserRouter, Routes, Route, Navigate} from 'react-router-dom'
import Login from './components/Login'
import Create from './components/Create'
import Dashboard from './components/Dashboard'

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/login' element={<Login/>}/>
          <Route path='/create' element={<Create/>}/>
          <Route path='/dashboard' element={<Dashboard/>}/>
         
          <Route path='*' element={<Navigate to='/login'/>}/>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
