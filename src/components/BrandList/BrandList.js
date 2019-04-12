import React from "react";
import { observer, inject } from "mobx-react";

const brandName = {
  textDecoration: "none",
  color: "rgb(141, 3, 3)"
};

class BrandList extends React.Component {
  render() {
    let toDisplay = null;
    if (this.props.bikeStore.bikeList && this.props.bikeStore.bikeList.length > 0) {
      const set = new Set();
      const bikes = this.props.bikeStore.bikeList;
      for (let i = 0; i < bikes.length; ++i) set.add(bikes[i].brandName);
      const brands = Array.from(set);
      toDisplay = (
        <span style={{ fontWeight: "560" }}>
          {brands.map((el, index) => (
            <a key={`brandLink${index}`} href="/" style={brandName}>
              {el} /{" "}
            </a>
          ))}
        </span>
      );
    }
    return (
      <div style={{ marginTop: "6px", letterSpacing: "3px" }}>
        Bikes we carry - {toDisplay}
      </div>
    );
  }
}

export default inject("bikeStore")(observer(BrandList));
