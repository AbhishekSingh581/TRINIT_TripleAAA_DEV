import React from 'react'
import { useState,useEffect } from 'react'
import axios from 'axios'
import './DashBoard.css'
import SideBar from '../components/Dashboard-component/SideBar/SideBar'
import MainPanel from '../components/Dashboard-component/MainPanel/MainPanel'
import MenuIcon from '@mui/icons-material/Menu';
const DashBoard = () => {
  const [active,setActive]=useState([true,false,false])
    const SideMenu=()=>{
        document.getElementById('sideBar').classList.add('sideMenuAppear');
    }
    // console.log(active);
    const [userData,setUserData]=useState({})
    const userEmail=localStorage.getItem('emailData')
    useEffect(()=>{
      async function fetchData(){
        await axios.get(`https://carboninsight-backend.onrender.com/api/v1/carbonInsight/getUserData/${userEmail}`)
        .then((res)=>{
          // console.log(res.data);
          setUserData(res.data[0])
        }).catch((err)=>{
          console.log(err);
        })  
      }
      fetchData()
    },[])
    // console.log(userData);
  return (
    <div id='dashBoard-container'>
      <div className="headerTitle">
        <button id="menuBtn" onClick={SideMenu}><MenuIcon style={{color:"white"}}/></button>
        <div className="title">
            <h3>Carbon</h3><h3>Insight</h3>
        </div>
      </div>
      <div className="dashBoardGrid">
        <SideBar stateFunc={setActive} activeVar={active}/>
        <MainPanel data={userData}/>  
        {/* data={userData} */}
      </div>
    </div>
  )
}

export default DashBoard
