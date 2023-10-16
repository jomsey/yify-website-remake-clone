import React from 'react'
import "./Selector.css"

function Selector({title,listItems,refname}) {
  return (
    <div className='selector-container'>
    <span>{title}</span>
    <select ref={refname} name={title}>
      {listItems.map(i=><option key={i}value={i}>{i}</option>
)}
    </select>
    </div>
  )
}


export default Selector
