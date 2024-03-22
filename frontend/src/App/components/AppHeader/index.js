import React from 'react'
import {Link} from "react-router-dom"
import "./index.css"

const AppHeader = () => {
  return (
    <ul className="header">
        <li><Link to="/">Products</Link></li>
        <li><Link to="add">Add Product</Link></li>
        <li><Link to="update">Update Products</Link></li>
        <li><Link to="profile">Profile</Link></li>
        <li><Link to="logout">Logout</Link></li>

    </ul>
  )
}

export default AppHeader