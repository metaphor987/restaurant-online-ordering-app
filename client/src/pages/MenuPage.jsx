import {useState, useEffect} from 'react'
// import axios from 'axios'
import { Link } from 'react-router-dom'
import MenuItem from "./MenuItem.jsx"

const Menu = () => {
    const [items, setItems] = useState([])

    useEffect(() => {
      async function fetchMenuItems() {
        try{
          // const res = await axios.get("http://localhost:8000/menu")
          const response = await fetch("http://localhost:8000/menu")
          const meals = await response.json();
          // setItems(res.data)
          // console.log(res.data)
          setItems(meals);
          console.log(meals);
        }catch(err){
          console.log(err)
        }
      }
  
      fetchMenuItems();
    }, [])
  
    return (
      <div>
        <h1>
          Menu
        </h1>
        <div className="items">
          {items.map(item => (
            <MenuItem key={item.id} {...item}/>
          ))}
        </div>
        <button><Link to="/cart">Cart</Link></button>
      </div>
    )
}

export default Menu