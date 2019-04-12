import React from "react";
import { BikeConsumer } from "../../contexts/BikeContext";

const brandName = {
  textDecoration: "none",
  color: "rgb(141, 3, 3)"
};

export default function BrandList() {
  return (
    <BikeConsumer>
      {({ bikes }) => {
        let toDisplay = null;
        if (bikes && bikes.length > 0) {
          const set = new Set();
          for (let i = 0; i < bikes.length; ++i) 
            set.add(bikes[i].brandName);
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
      }}
    </BikeConsumer>
  );
}
