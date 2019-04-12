import React, { Component } from "react";

import "./App.css";
import BikeList from './components/BikeList/BikeList';
import BrandList from './components/BrandList/BrandList';
import AddBikeForm from "./components/AddBikeForm/AddBikeForm";
import { BikeProvider } from './contexts/BikeContext'; 

class App extends Component {
  render() {
    return (
      <BikeProvider>
        <div id="appWrapper">
          <div id="title">
            <h2 id="mainTitle">Bike Stock</h2>
            <BrandList/>
          </div>
          <div id="addCycleForm">
            <AddBikeForm />
          </div>
          <div id="bikeList">
            <BikeList />      
          </div>
        </div>
      </BikeProvider>
    );
  }
}

export default App;
