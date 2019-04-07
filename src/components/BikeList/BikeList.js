import React from 'react'
import Loading from '../Loading/Loading';
import BikeCard from './BikeCard/BikeCard';
import "./BikeList.css";



export default function BikeList(props) {
  const { bikes } = props;
  let toDisplay = <Loading style={{gridColumn: "1/-1"}} />;
  if(bikes.length !== 0)
    toDisplay = bikes.map((bike, i) => <BikeCard key={`bike${i}`} info={bike} />)
  return toDisplay;
}
