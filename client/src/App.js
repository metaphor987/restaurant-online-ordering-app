import { BrowserRouter, Routes, Route } from "react-router-dom";
import Add from "./pages/Add";
import Menu from "./pages/MenuPage.jsx";
import Cart from "./pages/Cart.jsx";
import ItemPage from "./pages/ItemPage.jsx"

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/menu" element={<Menu/>}/>
          <Route path="/item/:id" element={<ItemPage />} />
          {/* <Route path="/cart" element={<Cart/>}/> */}
          {/* <Route path="/" element={<Books/>}/> */}
          {/* <Route path="/add" element={<Add/>}/> */}
          {/* <Route path="/update/:id" element={<Update />} /> */}
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
