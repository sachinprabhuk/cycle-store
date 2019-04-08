import React from 'react'

const brandName = {
  textDecoration: 'none',
  color: 'rgb(141, 3, 3)'
}

export default function BrandList(props) {
  let toDisplay = null;
  if(props.bikes && props.bikes.length > 0) {
    const set = new Set();
    const bikes = props.bikes;
    for(let i=0;i<bikes.length;++i)
      set.add(bikes[i].brandName);
    const brands = Array.from(set);
    toDisplay = (
      <span style={{fontWeight: "560"}}>
        {brands.map((el, index) => <a 
        key={`brandLink${index}`}
        href="#" 
        style={brandName}>{el}  /  </a>)}
      </span>
    )
  }
  return (
    <div style={{marginTop: "6px", letterSpacing: "3px"}}>
      Bikes we carry - {toDisplay}
    </div>
  )
}
