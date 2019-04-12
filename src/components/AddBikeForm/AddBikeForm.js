import React, { Component } from 'react'
import "./AddBikeForm.css";
import { BikeContext } from '../../contexts/BikeContext';

class AddBikeForm extends Component {
  state = {
    imgSrc: "",
    brandName: "",
    bikeName: "",
    price: 0,
    stock: 0
  }
  static contextType = BikeContext;
  onInput = e => {
    this.setState({ [e.target.name]: e.target.value })
  }
  onsubmit = e => {
    e.preventDefault();
    this.context.addBike({...this.state});
  }
  render() {
    return (
      <form onSubmit={this.onsubmit} >
        <h3 style={{ marginBottom: "16px"}}>Add bike info</h3>
        
        <label for="imgSrc">Image source</label><br />
        <input type="text" name="imgSrc" id="imgSrc"
        value={this.state.imgSrc} onChange={this.onInput}
        required />
        <br /><br />
        
        <label for="bikeName">Bike Name</label><br />
        <input type="text" name="bikeName"  
        value={this.state.bikeName} onChange={this.onInput}
        required/>
        <br /><br />
        
        <label for="brandName">Brand name</label><br />
        <input type="text" id="brandName" 
        name="brandName" value={this.state.brandName} onChange={this.onInput}
        required/>
        <br /><br />

        <label for="price">Price</label><br />
        <input type="number" id="price" 
        name="price" value={this.state.price} onChange={this.onInput}
        required/>
        <br /><br />

        <label for="stock">Stock</label><br />
        <input type="number" id="stock" 
        name="stock" value={this.state.stock} onChange={this.onInput}
        required/>
        <br />
        <button id="addBike">Add bike</button>
    </form>
    )
  }
}

export default AddBikeForm;
