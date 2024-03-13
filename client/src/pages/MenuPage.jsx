import {useState, useEffect} from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import MenuItem from "./MenuItem.jsx"

const Menu = () => {
    const [items, setItems] = useState([])

    useEffect(() => {
      const fetchAllItems = async () => {
        try{
          const res = await axios.get("http://localhost:8000/menu")
          setItems(res.data)
          console.log(res.data)
        }catch(err){
          console.log(err)
        }
      }
  
      fetchAllItems()
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