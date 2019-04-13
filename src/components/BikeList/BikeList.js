import React from 'react'
import { observer, inject } from "mobx-react";

import Loading from '../Loading/Loading';
import BikeCard from './BikeCard/BikeCard';

import "./BikeList.css";


@inject("bikeStore")
@observer
class BikeList extends React.Component {
  render() {
    const bikes = this.props.bikeStore.bikeList;
    let toDisplay = <Loading style={{gridColumn: "1/-1"}} />;
    if(bikes.length !== 0)
      toDisplay = bikes.map((bike, i) => <BikeCard key={`bike${i}`} info={bike} />)
    return toDisplay;
  }
}


export default BikeList;