import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom"
import "./index.css"

import AppHeader from './components/AppHeader'
import Footer from './components/Footer'



const App = () => {
  return (
    <div>
      <BrowserRouter>
      <AppHeader/>
      <Routes>
        <Route path="/" element={<h1>home</h1>}/>
        <Route path="/add" element={<h1>add</h1>}/>
        <Route path="/update" element={<h1>update</h1>}/>
        <Route path="/profile" element={<h1>profile</h1>}/>
        <Route path="/logout" element={<h1>logout</h1>}/>
        <Route path="*" element={<h1>not found</h1>}/>
      </Routes>
      </BrowserRouter>
     <Footer/>
    </div>
  )
}
export default App