import { observable, action, computed } from 'mobx';

class bikeStore {
  id = 2
  @observable bikeList = [
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
  
  @action addBike = ({ imgSrc , brandName, bikeName, price, stock }) => {
    this.bikeList.push({
      bikeID: this.id++,
      imgSrc: "/images/cycle_sample.png",
      brandName,
      bikeName,
      price,
      colors: ["#B2A23c"],
      stock
    }) 
  }

  @computed get bikeCount() {
    return this.bikeList.length;
  }

  @computed get brands() {
    const set = new Set();
    const bikes = this.bikeList;
    const brandCount = {};
    for (let i = 0; i < bikes.length; ++i) {
      let bn = bikes[i].brandName;
      if(brandCount[bn])
        brandCount[bn] += 1;
      else
        brandCount[bn] = 1;
      set.add(bn)
    };

    return Array.from(set).map(el => {
      return {
        brandName: el,
        count: brandCount[el]
      }
    });
  }
};

const storeInstance = new bikeStore();
export default storeInstance;