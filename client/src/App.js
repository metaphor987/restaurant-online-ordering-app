import { BrowserRouter, Routes, Route } from "react-router-dom";
import Add from "./pages/Add";
import Menu from "./pages/MenuPage.jsx";
import Cart from "./pages/Cart.jsx";
import Admin from "./pages/Admin.jsx";
import AdminMenu from "./pages/AdminMenu.jsx";
import ItemPage from "./pages/ItemPage.jsx"

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Menu/>}/>
          <Route path="/item/:id" element={<ItemPage />} />
          <Route path="/cart" element={<Cart/>}/>
          <Route path="/admin" element={<Admin/>}/>
          <Route path="/admin/menu" element={<AdminMenu/>}/>
          
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
