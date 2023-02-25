import React from 'react'
import './Card.css'

const Card = (props) => {
  return (
    <div className='card-container'>
      <div className="dataInNumbers">
        <div className="cardTitle">
            {props.title} 
        </div>
        <div className="card-figures">
            {props.figure}
        </div>
        <div className="sub-desc">
            {props.sub_desc}
        </div>
      </div>
      {props.icon}
    </div>
  )
}

export default Card
