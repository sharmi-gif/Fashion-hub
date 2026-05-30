import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Productcard from '../Components/ProductCard'

const Women = ({addToCart}) => {
  console.log("ProductCard - addToCart:", addToCart);

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

  const womenproduct = products.filter(
    (item) => item.category === "women's clothing"

  );
  return (

    <div>

      <h1>Women's Clothing</h1>

      <div className='Product-item'>
 {womenproduct.map((item) => (
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

export default Women