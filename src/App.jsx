import { Routes, Route, Link } from "react-router-dom";
import Menu from "./components/Menu";
import Home from "./pages/Home/Home";
import ProductList from "./pages/ProductList/ProductList";
import HotDeals from "./pages/HotDeals/HotDeals";
import Promotions from "./pages/Promotions/Promotions";
import NewProducts from "./pages/NewProducts/NewProducts";
import ErrorPage from "./pages/ErrorPage/ErrorPage";

import "./App.css";

function App() {
  return (
    <div className="App">
      <Menu />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/hot-deals" element={<HotDeals />} />
        <Route path="/promotions" element={<Promotions />} />
        <Route path="/new-products" element={<NewProducts />} />
        <Route path="/products" element={<ProductList />} />
        <Route path="/*" element={<ErrorPage />} />
      </Routes>
    </div>
  );
}

export default App;
