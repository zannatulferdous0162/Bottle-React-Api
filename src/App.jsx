import { useEffect, useState } from 'react'

import './App.css'
import SingleProduct from './SingleProduct';


function App() {
  const [products, setProducts] = useState([]);

  useEffect( () =>{
    fetch('./fakeData.json')
    .then(res => res.json())
    .then(data => setProducts(data))
  }
    ,[]);

  return (
    <>
     
     <div className="main-container">
      <div className="card-container">
     
     {
      products.map(product => <SingleProduct key={product.id} product={product}></SingleProduct>)
     }
       
      </div>
      <div className="cart-container">
      <h1>This cart</h1>
      </div>
     </div>
     
    </>
  )
}

export default App;
