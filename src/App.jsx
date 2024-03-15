import { useEffect, useState } from 'react'

import './App.css'
import SingleProduct from './SingleProduct';


function App() {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);


  useEffect( () =>{
    fetch('./fakeData.json')
    .then(res => res.json())
    .then(data => setProducts(data))
  }
    ,[]);

    const handleCart =(p)=>{
      const isExist = cart.find(product => product.id == p.id);
     if(!isExist){
      setCart([...cart,p])
     }
     else{
      alert('Already in cart');
     }
    }

  return (
    <>
     
     <div className="main-container">
      <div className="card-container">
     
     {
      products.map(product => <SingleProduct key={product.id} product={product} handleCart={handleCart}></SingleProduct>)
     }
       
      </div>
      <div className="cart-container">
      <h1>This cart</h1>
      <div className="cart-title">
        <p>name</p>
        <p>price</p>
      </div>
      </div>
     </div>
     
    </>
  )
}

export default App;
