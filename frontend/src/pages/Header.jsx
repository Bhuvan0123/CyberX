import React from 'react'
import "../styles/Headerstyle.css"
import logo from "../components/Logo.png"
function Header() {
  return (
    <div>
        <header>
          <div className="logotitle">
            <img className='logo-image' src={logo} alt="logo"/>
            <a href="/" className='logo'>Cyber X</a>
          </div>
            <nav>
                <a href="/home">Home</a>
                <a href="/team">Teams</a>
                <a href="/profile">Profile</a>
            </nav>
        </header>
    </div>
  )
}

export default Header