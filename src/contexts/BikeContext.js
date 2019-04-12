import React, { Component, createContext } from 'react';

export const BikeContext = createContext();

export class BikeProvider extends Component {
  state = {
    bikes: [
      {
        bikeID: 1,
        imgSrc: "/images/cycle_sample.png",
        brandName: "State",
        bikeName: "war hawk",
        price: 400,
        colors: ["#B2A23c"],
        stock: 88
      }
    ]
  }
  render() {
    return (
      <BikeContext.Provider value={{
        bikes: this.state.bikes,
        addBike: bike => this.setState({
          bikes: [...this.state.bikes, {...bike, imgSrc: "/images/cycle_sample.png"}]
        })
      }}>
        {this.props.children}
      </BikeContext.Provider>
    );
  }
}

export const BikeConsumer = BikeContext.Consumer;