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
        <div className="Lists">
            <div id="mediaHandles">
                <a href="/"><WhatsAppIcon className='handles'/></a>
                <a href=""><TwitterIcon className='handles'/>  </a>
                <a href=""><LinkedInIcon className='handles'/> </a> 
                <a href=""><FacebookIcon className='handles'/>  </a>
            </div>
        </div>
        <div className="Lists">
            <h5>Features</h5>
            <h6>Calculating Carbon Footprints</h6>
            <h6>Shows Ranking</h6>
            <h6>User monthly activity</h6>
            <h6>Recommend sites with less carbon equivalent</h6>
        </div>
        <div className="Lists">
            <h5>Conducted By</h5>
            <h6>NIT Tiruchirappalli</h6>
            <h6>NIT Warangle</h6>
            <h6>NIT Karnataka</h6>
        </div>
        <div className="Lists">
            <h5>Referances</h5>
              <a href="https://www.bbc.com/future/article/20200305-why-your-internet-habits-are-not">BBC</a>
            <h6><a href="https://sphera.com/blog/the-carbon-footprint-of-the-internet/">Sphera</a></h6>
            <h6><a href="https://sustainablewebdesign.org/calculating-digital-emissions/">Sustainablewebdesign</a></h6>
        </div>
      </div>
    </div>
  )
}

export default Contact
