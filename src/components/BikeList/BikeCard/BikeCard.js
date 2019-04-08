import React from 'react';
import "./BikeCard.css";
import ColorList from "./ColorList/ColorList";

export default function BikeCard({info}) {
  return (
    <div className="bikeCard">
      <div className="imageSecion">
        <img src={info.imgSrc} alt="" width="100%"/>
      </div>
      <div className="infoSection">
        <p className="brandName">{info.brandName}</p>
        <p className="bikeName">{info.bikeName}</p>
        <hr/>
        <div className="specWrapper">
          <p><i>Price</i> - ${info.price}</p>
          <p><i>Colors</i> - <ColorList colors={info.colors} id={info.bikeID}/></p>
          <p><i>In stock</i> - {info.stock ? info.stock : "No"}</p>
          <center><button>FULL SPECS</button></center>
        </div>
      </div>
    </div>
  )
}
