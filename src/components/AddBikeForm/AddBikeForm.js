import React, { Component } from 'react'
import "./AddBikeForm.css";
import { inject } from 'mobx-react';


@inject("bikeStore")
class AddBikeForm extends Component {
  state = {
    imgSrc: "",
    brandName: "",
    bikeName: "",
    price: 0,
    stock: 0
  }
  constructor(props) {
    super(props);
    console.log(props.bikeStore);
  }
  onsubmit = e => {
    e.preventDefault();
    // this.props.onSubmit(this.state);
  }
  onInput = e => {
    this.setState({ [e.target.name]: e.target.value })
  }
  render() {
    return (
      <form onSubmit={this.onsubmit} >
        <h3>Add Bike</h3>
        <input type="text" placeholder="image src" 
        name="imgSrc" value={this.state.imgSrc} onChange={this.onInput} />
        <br />
        <input type="text" placeholder="bike name" 
        name="bikeName" value={this.state.bikeName} onChange={this.onInput}/>
        <br />
        <input type="text" placeholder="brand name" 
        name="brandName" value={this.state.brandName} onChange={this.onInput}/>
        <br />
        <input type="number" placeholder="Price" 
        name="price" value={this.state.price} onChange={this.onInput}/>
        <br />
        <input type="number" placeholder="Stock" 
        name="stock" value={this.state.stock} onChange={this.onInput}/>
        <br />
        <button>Add</button>
    </form>
    )
  }
}

export default AddBikeForm;