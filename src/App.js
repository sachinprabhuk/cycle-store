import React, { Component } from "react";
import { observer, inject } from "mobx-react";

import "./App.css";
import BikeList from './components/BikeList/BikeList';
import BrandList from './components/BrandList/BrandList';
import AddBikeForm from "./components/AddBikeForm/AddBikeForm";

@inject('bikeStore')
@observer
class App extends Component {
  render() {
    const { bikeStore: { bikeList } } = this.props;
    console.log(bikeList);
    return (
      <div id="appWrapper">
        <div id="title">
          <h2 id="mainTitle">Bike Stock</h2>
          <BrandList bikes={bikeList}/>
        </div>
        <div id="addCycleForm">
          <AddBikeForm />
        </div>
        <div id="bikeList">
          <BikeList bikes={bikeList} />      
        </div>
      </div>
    );
  }
}

export default App;
