import React from 'react'
import {useState, useEffect} from 'react'

const Cart = () => {
  const [cartItems, setCartItems] = useState([])

  useEffect(() => {
    async function fetchMenuItems() {
      try{
        const response = await fetch("http://localhost:8000/cart")
        const cart = await response.json();
        setCartItems(cart);
      } catch(err){
        console.log(err)
      }
      
    }
    fetchMenuItems()
  }, [])

  return (
      <div>
        <h1>Cart</h1>
        <Link to="/">Back</Link>
        <div className="cartItems">
          {cartItems.map(cartItem => (
            <CartItem 
              key={cartItem.id}  
              cartQuantity={getCartQuantity(item.id)}
              {...item}/>
          ))}
        </div>
      </div>
    
  )
}

export default Cart