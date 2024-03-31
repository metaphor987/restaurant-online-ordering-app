import { Link } from 'react-router-dom'

export default function Admin(){
    return(
        <div>
            <h1>Admin Main Page</h1>
            <button><Link to="/admin/menu">Edit Menu</Link></button>
            <button><Link to="/admin/orders">History Orders</Link></button>
            <button><Link to="/admin/analytics">Analytics</Link></button>
        </div>
    )
}