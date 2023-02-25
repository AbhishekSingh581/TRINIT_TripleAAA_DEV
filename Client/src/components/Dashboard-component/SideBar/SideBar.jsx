import React from 'react'
import './SideBar.css'
import CloseIcon from '@mui/icons-material/Close';
import HomeIcon from '@mui/icons-material/Home';
import AnalyticsIcon from '@mui/icons-material/Analytics';
import DonutLargeIcon from '@mui/icons-material/DonutLarge';
import LogoutIcon from '@mui/icons-material/Logout';
import { useState } from 'react';
import { Link } from 'react-router-dom'

const SideBar = (props) => {
    // console.log(props.activeVar[0]);
    const [activeMenuItem,setActiveMenuItem]=useState(props.activeVar)
    const SideBardisappear=()=>{
        document.getElementById('sideBar').classList.remove('sideMenuAppear');
    }
    const logOut=()=>{
        localStorage.clear();
      }
    // console.log(activeMenuItem);
  return (
    <div id='sideBar' className='sideBar-container'>
      <div className="menu-item-list">
        <div className="menu-item">
          <button onClick={()=>{setActiveMenuItem([true,false,false]); props.stateFunc([true,false,false])}} className={activeMenuItem[0]?'activeBtn normalBtn': 'normalBtn'}><HomeIcon/></button>
        </div>
        <div className="menu-item">
          <button onClick={()=>{setActiveMenuItem([false,true,false]); props.stateFunc([false,true,false])}} className={activeMenuItem[1]?'activeBtn normalBtn': 'normalBtn'}><AnalyticsIcon/></button>
        </div>
        <div className="menu-item">
          <button onClick={()=>{setActiveMenuItem([false,false,true]); props.stateFunc([false,false,true])}} className={activeMenuItem[2]?'activeBtn normalBtn': 'normalBtn'}><DonutLargeIcon/></button>
        </div>
      </div>
      <button onClick={SideBardisappear} id="closeSideBar"><CloseIcon/></button>
      <Link to='/'><button id='logOutBtn'  onClick={logOut}><LogoutIcon/></button></Link>
    </div>
  )
}

export default SideBar
