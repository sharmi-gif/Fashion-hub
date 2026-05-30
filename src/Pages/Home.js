import React, { useEffect, useState } from 'react'
import axios from 'axios';
import banner from'../assets/SS Style.png'

const Home = () => {
  const [products, setproducts]=useState([]);
  useEffect(()=>{
  axios.get("https://fakestoreapi.com/products")
  .then((res)=>{setproducts(res.data);
  })
  .catch((err) => {
        console.log(err);
      });
  },[]);
  return (
<div>
    <div className="Hero-Banner">
<img src={banner} alt="banner" className='hero-img'/>
<h1>Fashion Store</h1>
<p>Best deals on Men & Women fashion</p>
</div>

<div className='Product-item'>
{products.map((item)=>(
<div className='product-card' key={item.id}>
  <h4>{item.title}</h4>
  <img src={item.image} width="100" />
<p>₹ {item.price}</p>
<button>Add To Cart</button>
</div>

  ))}
  </div>
</div>
  )
}

export default Home