import React from 'react'
import './SideBar.css'
import CloseIcon from '@mui/icons-material/Close';
const SideBar = () => {
    const SideBardisappear=()=>{
        document.getElementById('sideBar').classList.remove('sideMenuAppear');
    }
  return (
    <div id='sideBar' className='sideBar-container'>
      hello1 <button onClick={SideBardisappear} id="closeSideBar"><CloseIcon/></button>
    </div>
  )
}

export default SideBar
