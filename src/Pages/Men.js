import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Productcard from '../Components/ProductCard'

const Men = ({ addToCart }) => {
   console.log("Men.js - addToCart received:", addToCart)

  const [products, setproducts] = useState([]);
  useEffect(() => {
    axios.get("https://fakestoreapi.com/products")
      .then((res) => {
        setproducts(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const menproduct = products.filter(

    (item) => item.category === "men's clothing"
  );
  return (
    <div>
      <h1>Men's Clothing</h1>

      <div className='Product-item'>
        {menproduct.map((item) => (
          <Productcard
            key={item.id}
            image={item.image}
            title={item.title}
            price={item.price}
            item={item}
            addToCart={addToCart}
          />
        ))}
      </div>

    </div>
  )
}

export default Men