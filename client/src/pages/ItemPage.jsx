import {useEffect} from 'react'
import { useLocation, Link } from 'react-router-dom';

export default function ItemPage(){
    // const [details, setDetails] = useState([])

    // useEffect(() => {
    //   const fetchAllItems = async () => {
    //     try{
    //       const res = await axios.get("http://localhost:8000/item/:id")
    //       setDetails(res.data)
    //       console.log(res.data)
    //     }catch(err){
    //       console.log(err)
    //     }
    //   }
  
    //   fetchAllItems()
    // }, [])

    const {state} = useLocation()
    console.log("state", state)

    return (
        <div>
            <h1>Item Page {state.id}</h1>
            <h2>{state.name}</h2>
            <p>{state.desc}</p>
            <p>${state.price}</p>
            <Link to="/">Back</Link>
        </div>
    );
}