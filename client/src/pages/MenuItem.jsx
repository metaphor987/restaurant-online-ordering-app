import { useState } from "react";
import {Link} from "react-router-dom";

export default function MenuItem({id, name, desc, price, quantity}){
    const [num, setNum] = useState(0)
    const numIncrement = () => {
        setNum(num + 1)
    }
    const numDecrement = () => {
        if (num > 0){
            setNum(num - 1)
        }
    }
    const url = `/item/:${id}`
    
    
    return (
        <div>
          <h2>{name}</h2>
          <Link to={url} state={{from: {id}}}>{name}</Link>
          <p>{desc}</p>
          <p>${price}</p>
          <p>{quantity}</p>
          <p>number: {num}</p>
          <button onClick={numDecrement}>Increment</button>
          <button onClick={numIncrement}>Increment</button>
        </div>
    );
}