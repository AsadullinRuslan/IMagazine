import "./App.css";
import { Routes, Route } from "react-router-dom";

import Navigate from "./components/navigate/Navigate";
import Sidebar from "./components/sidebar/Sidebar";
import ProductList from "./pages/productListPage";
import ProductPage from "./pages/productPage";
import BasketPage from "./pages/basketPage";

function App() {

    return (
        <>
            <Navigate />
            <Sidebar />
            <Routes>
                <Route path="/" element={<ProductList />}></Route>
                <Route path="/products/:id" element={<ProductPage />}></Route>
                <Route path="/basket" element={<BasketPage />}></Route>
                <Route path="*" element={<ProductList />}></Route>
            </Routes>
        </>
    );
}

export default App;
