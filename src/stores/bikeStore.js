import { observable, action } from 'mobx';

class bikeStore {
  id = 1
  @observable 
  bikeList = [
    {
      bikeID: 1,
      imgSrc: "/images/cycle_sample.png",
      brandName: "State",
      bikeName: "war hawk",
      price: 400,
      colors: ["#B2A23c"],
      stock: 88
    },
    {
      bikeID: 2,
      imgSrc: "/images/cycle_sample.png",
      brandName: "State",
      bikeName: "cardinal",
      price: 400,
      colors: ["#FFF5B5", "orange"],
      stock: 0
    }
  ];
  
  @action
  addBike({ imgSrc , brandName, bikeName, price, stock }) {
    console.log(this);
    this.bikeList.push({
      bikeID: this.id++,
      imgSrc: imgSrc || "/images/cycle_sample.png",
      brandName,
      bikeName,
      price,
      colors: ["#B2A23c"],
      stock
    }) 
  }
};

const storeInstance = new bikeStore();
export default storeInstance;