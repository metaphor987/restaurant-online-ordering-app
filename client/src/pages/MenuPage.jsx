import {useState, useEffect} from 'react'
// import axios from 'axios'
import { Link } from 'react-router-dom'
import MenuItem from "./MenuItem.jsx"

const Menu = () => {
    const [items, setItems] = useState([])
    const [cartItems, setCartItems] = useState([])
    // const [cartQuantity, setCartQuantity] = useState([])

    useEffect(() => {
      async function fetchMenuItems() {
        try{
          const response = await fetch("http://localhost:8000/")
          const meals = await response.json();
          setItems(meals);

          const cartResponse = await fetch("http://localhost:8000/cart")
          const cartResponseItems = await cartResponse.json();
          console.log("cartResponse", cartResponseItems);

          // let cartQuantityList = [];
          // for (let i = 0; i < cartResponseItems.length; i++) {
          //   const currItem = cartResponseItems[i]
          //   cartQuantityList.push({itemId: currItem.itemId, quantity: currItem.quantity})
          // }
          // setCartQuantity(cartQuantityList);

          setCartItems(cartResponseItems);
        }catch(err){
          console.log(err)
        }
      }
  
      fetchMenuItems()
    }, [])

    const getCartQuantity = (itemId) => {
      // console.log("all", cartItems)
      if (cartItems.length > 0){
        const target = cartItems.find(i => i.itemId === itemId);
        // console.log(target.quantity)
        return target.quantity;
      }
      return 0;
    }
  
    return (
      <div>
        <h1>Menu</h1>
        <p>Are you the Restaurant Admin?</p>
        <button><Link to="/admin">Admin</Link></button>
        <button><Link to="/cart">Cart</Link></button>
        <div className="items">
          {items.map(item => (
            <MenuItem 
              key={item.id}  
              cartQuantity={getCartQuantity(item.id)}
              {...item}/>
          ))}
        </div>
      </div>
    )
}

export default Menu