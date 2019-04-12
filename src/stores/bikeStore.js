import { observable, action, decorate } from 'mobx';

class bikeStore {
  id = 2

  bikeList = [
    {
      bikeID: 1,
      imgSrc: "/images/cycle_sample.png",
      brandName: "State",
      bikeName: "war hawk",
      price: 400,
      colors: ["#B2A23c"],
      stock: 88
    }
  ];
  
  addBike = ({ imgSrc , brandName, bikeName, price, stock }) => {
    this.bikeList.push({
      bikeID: this.id++,
      imgSrc: imgSrc || "/images/cycle_sample.png",
      brandName,
      bikeName,
      price,
      colors: ["#B2A23c"],
      stock
    }) 
    console.log(this.bikeList);
  }
};

decorate(bikeStore, {
  addBike: action,
  bikeList: observable
})

const storeInstance = new bikeStore();
export default storeInstance;