import React, { Component } from "react";

import BikeList from './components/BikeList/BikeList';
import BrandList from './components/BrandList/BrandList';
import AddBikeForm from "./components/AddBikeForm/AddBikeForm";

import "./App.css";

class App extends Component {
  render() {
    return (
      <div id="appWrapper">
        <div id="title">
          <h2 id="mainTitle">Bike Stock</h2>
          <BrandList />
        </div>
        <div id="addCycleForm">
          <AddBikeForm />
        </div>
        <div id="bikeList">
          <BikeList />      
        </div>
      </div>
    );
  }
}

export default App;
