import React from 'react'

const Cart = ({ cart,image,title }) => {

  return (
    <div>

      <h2>My Cart</h2>

      {cart.length === 0 ? (
        <p>Cart is empty</p>
      ) : (
        cart.map((item, index) => (
          <div key={index} className="cart-item">
<img src={item.image} alt={item.title} width="120"/>
           <h4>{item.title}</h4>
            <p>Price: {item.price}</p>

          </div>
        ))
      )}

    </div>
  )
}

export default Cart