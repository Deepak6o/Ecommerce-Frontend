import React from "react";
import "./Breadcrum.css";
import arrpw_icon from "../Assets/breadcrum_arrow.png";

const Breadcrum = (props) => {
  const { product } = props;
  return (
    <div className="breadcrum">
      <div className="breadcrum">
        HOME <img src={arrpw_icon} alt="" /> SHOP
        <img src={arrpw_icon} alt="" />
        {product.category} <img src={arrpw_icon} alt="" /> {product.name}
      </div>
    </div>
  );
};

export default Breadcrum;
