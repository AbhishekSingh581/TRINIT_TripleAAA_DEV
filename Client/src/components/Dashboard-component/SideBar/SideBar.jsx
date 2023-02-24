import React from 'react'
import './SideBar.css'
import CloseIcon from '@mui/icons-material/Close';
const SideBar = () => {
    const SideBardisappear=()=>{
        document.getElementById('sideBar').classList.remove('sideMenuAppear');
    }
    const logOut=()=>{
        localStorage.clear();
        window.location.reload();
    }
  return (
    <div id='sideBar' className='sideBar-container'>
      hello1 <button onClick={SideBardisappear} id="closeSideBar"><CloseIcon/></button>
      <button onClick={logOut}>LogOut</button>
    </div>
  )
}

export default SideBar
