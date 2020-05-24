import React from "react";
import Card from "../Card";
const Product = ({ product, type='normal' }) => {
  debugger;
  return (
    <Card
      type="border-hover"
      content={() => (
        <div className={`product--${type}`}>
          <div className={`product--${type}__image-container`}>
              <img className={`product--${type}__image`} src={product.image}></img>
          </div>
          <div>
            <p className="text-bold">{product.name}</p>
            <p>{product.details}</p>
            <p className="text-bold">$ {product.price}</p>
          </div>
        </div>
      )}
    ></Card>
  );
};

export default Product;
