import React from 'react'

export default function ColorList(props) {
  let toDisplay = <span>N/A</span>
  if(props.colors && props.colors.length > 0) {
    toDisplay = (
      <span>
        {props.colors.map((el, index) => <span 
        style={{backgroundColor: el}} 
        key={`colors${props.id}${index}`}
        className="colorDiv"></span>)}
      </span>
    )
  }
  return toDisplay;
}
