import React from 'react'
import './DashBoard.css'
import SiteVisited from '../components/DashBoard/SiteVisited'
const DashBoard = () => {
  return (
    <div id='dashboard-container'>
        <div id="dashBoardHeading">
            <h3>Dash</h3>
            <h3>Board</h3>
        </div>
        <div id="main-container">
            <SiteVisited></SiteVisited>
        </div>
    </div>
  )
}

export default DashBoard
