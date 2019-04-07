import React from 'react'
import Loading from '../Loading/Loading';
import BikeCard from './BikeCard/BikeCard';
import { Fragment } from 'react';
import "./BikeList.css";

const getBrands = bikeList => {
  const brands =  new Set();
  for(let i=0;i<bikeList.length;++i)
    brands.add(bikeList[i].brandName);
  return Array.from(brands);
}


export default function BikeList(props) {
  const { bikes } = props;
  let toDisplay = <Loading />;
  if(bikes.length !== 0) {
    toDisplay = (
      <Fragment>
        {/* <div id="brandList">
          Brand we carry - <span>
            {getBrands(bikes).map(brand => )}
          </span>
        </div> */}
          {bikes.map((bike, i) => <BikeCard key={`bike${i}`} info={bike} />)}
      </Fragment>
    )
  }
  return toDisplay;
}
