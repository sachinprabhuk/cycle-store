import React, { Component } from "react";
import "./App.css";
import BikeData from "./bikeData";
import BikeList from './components/BikeList/BikeList';
import BrandList from './components/BrandList/BrandList';

class App extends Component {
  state = {
    bikeData: [],
  };

  componentDidMount() {
    setTimeout(() => {
      this.setState({
        fetching: false,
        bikeData: BikeData
      });
    }, 500);
  }

  render() {
    return (
      <div id="appWrapper">
        <div id="title">
          <h2 id="mainTitle">Bike Stock</h2>
          <BrandList bikes={this.state.bikeData}/>
        </div>
        <div id="bikeList">
          <BikeList bikes={this.state.bikeData} />      
        </div>
      </div>
    );
  }
}

export default App;
