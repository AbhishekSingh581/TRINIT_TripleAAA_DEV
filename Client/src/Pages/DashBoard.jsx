import React from 'react'
import './DashBoard.css'
import SideBar from '../components/Dashboard-component/SideBar/SideBar'
import MainPanel from '../components/Dashboard-component/MainPanel/MainPanel'
import MenuIcon from '@mui/icons-material/Menu';
const DashBoard = () => {
    const SideMenu=()=>{
        document.getElementById('sideBar').classList.add('sideMenuAppear');
    }
  return (
    <div id='dashBoard-container'>
      <div className="headerTitle">
        <button id="menuBtn" onClick={SideMenu}><MenuIcon style={{color:"white"}}/></button>
        <div className="title">
            <h3>Carbon</h3><h3>Insight</h3>
        </div>
      </div>
      <div className="dashBoardGrid">
        <SideBar/>
        <MainPanel/>
      </div>
    </div>
  )
}

export default DashBoard