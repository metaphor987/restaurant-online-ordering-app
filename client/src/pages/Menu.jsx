import React from 'react'
import {useState, useEffect} from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'

const Menu = () => {
    const [items, setItems] = useState([])

    useEffect(() => {
      const fetchAllItems = async () => {
        try{
          const res = await axios.get("http://localhost:8000/menu")
          setItems(res.data)
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
            <div className="item" key={item.id}>
              {/* {book.cover && <img src={book.cover} alt="" />} */}
              <h2>{item.name}</h2>
              <p>{item.desc}</p>
              <span>{item.price}</span>
            </div>
          ))}
        </div>
        <button><Link to="/cart">Cart</Link></button>
      </div>
    )
}

export default Menu