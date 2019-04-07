import React, { Component } from "react";
import "./App.css";
import BikeData from "./bikeData";
import BikeList from './components/BikeList/BikeList';


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
        <h2 id="mainTitle">Bike Stock</h2>
        <div id="bikeList">
          <BikeList bikes={this.state.bikeData} />      
        </div>
      </div>
    );
  }
}

export default App;
