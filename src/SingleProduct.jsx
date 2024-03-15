import React from "react";

const SingleProduct = ({ product}) => {
    console.log(product)
  return (
    <div className="card">
      <img className="card-img"
        src="https://fakestoreapi.com/img/71pWzhdJNwL._AC_UL640_QL65_ML3_.jpg"
        alt=""
      />
      <h4>Golden Ring</h4>
      <p>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quam quis qui
        ut facere tenetur enim!
      </p>
      <div className="cart-footer">
        <h1>150 $</h1>
        <button className="btn">
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default SingleProduct;