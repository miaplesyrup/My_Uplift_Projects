import React from "react";
import Button from "./Button";
import "./ItemBox.css";

const ItemBox = ({ name, image, price, category }) => {
  return (
    <div className="Item">
      <div>
        <img src={image} alt="img" />
      </div>
      <div>
        <strong>{name}</strong>
        <p>
          <small>Php {price}</small>
        </p>
        <p>
          <small>{category}</small>
        </p>
        <Button />
      </div>
    </div>
  );
};

export default ItemBox;
