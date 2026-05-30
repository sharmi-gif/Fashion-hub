import React from 'react'

const Productcard = ({image,title, price,item,addToCart}) => {
    console.log(addToCart);
return (
    <div className="product-card">
        <img src={image} alt={title} width="120"/>
        <h4>{title}</h4>
        <p>{price}</p>
<button onClick={()=>{addToCart(item)}}>
    Add to cart
</button>

    </div>
  )
}

export default Productcard