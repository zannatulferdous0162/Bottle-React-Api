/* eslint-disable react/prop-types */


const SingleProduct = ({ product, handleCart}) => {
    console.log(product)
  return (
    <div className="card">
      <img className="card-img"
        src={product.image}
        alt=""
      />
      <h4>{product.title.slice(0,10)}</h4>
      <p>
       {product.description}
      </p>
      <div className="cart-footer">
        <h1>{product.price}</h1>
        <button onClick={(p) => handleCart(product)} className="btn">
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default SingleProduct;