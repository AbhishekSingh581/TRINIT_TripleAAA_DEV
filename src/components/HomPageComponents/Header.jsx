import React from 'react'
import NavBar from './NavBar'
import './Header.css'
import PlayCircleIcon from '@mui/icons-material/PlayCircle';
const Header = () => {
  return (
    <div id='header-container'>
      <NavBar/>
      <div id="contentInHeader-container">
        <h1>Carbon Action Solution for <br></br> Internet Data Transfer</h1>
        <div id="videoBtnHeader">
            <button><PlayCircleIcon id="videoPlayIcon"/></button>
        </div>
        <h5>The CarbonInsight shows the ranking of websites and users who installed our extension.<br></br> This extension shows the carbon footprint , user produce by visiting websites.</h5>
      </div>
    </div>
  )
}

export default Header
