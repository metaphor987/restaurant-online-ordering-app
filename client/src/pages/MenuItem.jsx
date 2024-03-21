import { useState, useEffect } from "react";
import {Link} from "react-router-dom";
import { updateCart } from "./http";

export default function MenuItem({id, name, desc, price, quantity, cartQuantity}){
    console.log("Item!", cartQuantity)
    const [num, setNum] = useState(cartQuantity)

    useEffect(() => {
        function getCartQuantity(){
            setNum(cartQuantity)
        }
        getCartQuantity()
    }, [cartQuantity])

    const numIncrement = () => {
        setNum(num + 1)
        console.log("functionMenuItem id: ", id)
        updateCart(id, 1)
    }
    const numDecrement = () => {
        if (num > 0){
            setNum(num - 1)
            updateCart(id, -1)
        }
    }
    const url = `/item/:${id}`
    
    return (
        <div>
          <h2>{name}</h2>
          <Link to={url} state={{id: id}}>{name}</Link>
          <p>{desc}</p>
          <p>${price}</p>
          <p>{quantity}</p>
          <p>cart number: {num}</p>
          <button onClick={numDecrement}>Decrement</button>
          <button onClick={numIncrement}>Increment</button>
        </div>
    );
}