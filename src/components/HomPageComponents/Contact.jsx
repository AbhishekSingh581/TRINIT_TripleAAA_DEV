import React from 'react'
import './Contact.css'
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import FacebookIcon from '@mui/icons-material/Facebook';
const Contact = () => {
  return (
    <div id='contact-container'>
      <div id="contactName"><h3>CarBon</h3><h3>Insight</h3></div>
      <div id='contact-list'>
        <h6>Social Media</h6>
        <div id="mediaHandles">
            <WhatsAppIcon className='handles'/>
            <TwitterIcon className='handles'/>  
            <LinkedInIcon className='handles'/>  
            <FacebookIcon className='handles'/>  

        </div>
      </div>
    </div>
  )
}

export default Contact
