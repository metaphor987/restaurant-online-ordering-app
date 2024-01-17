import { BrowserRouter, Routes, Route } from "react-router-dom";
import Add from "./pages/Add";
import Books from "./pages/Books";
import Update from "./pages/Update.jsx";
import Menu from "./pages/Menu.jsx";
import Cart from "./pages/Cart.jsx";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/menu" element={<Menu/>}/>
          <Route path="/cart" element={<Cart/>}/>
          <Route path="/" element={<Books/>}/>
          <Route path="/add" element={<Add/>}/>
          <Route path="/update/:id" element={<Update />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
