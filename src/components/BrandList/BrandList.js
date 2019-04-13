import React from "react";
import { observer, inject } from "mobx-react";

const brandName = {
  textDecoration: "none",
  color: "rgb(141, 3, 3)"
};

const BrandList = ({ bikeStore: { brands } }) => (
  <div style={{ marginTop: "6px", letterSpacing: "3px" }}>
    Bikes we carry - {
      brands.map((el, index) => (
        <a key={`brandLink${index}`} href="/" style={brandName}>
          {el.brandName} ({el.count}) /{" "}
        </a>
      ))
    }
  </div>
);


export default inject("bikeStore")(observer(BrandList));
