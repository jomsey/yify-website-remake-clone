import React from 'react'
import "./Card.css"

export default function Card({actingName}) {
  return (
    <div className='person-card'>
        <div className="avatar"></div>
        <span className='name'>John Doe <span className="alias">{actingName && `as ${actingName}`}</span></span>
    </div>
  )
}
