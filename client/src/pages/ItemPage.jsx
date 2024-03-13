import {useEffect} from 'react'
import axios from 'axios'
import { useLocation } from 'react-router-dom'

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
    const location = useLocation()
    const { from } = location.state

    return (
        <div>
            <h1>Item Page {from}</h1>
        </div>
    );
}