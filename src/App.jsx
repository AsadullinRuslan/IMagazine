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
                <Route path="/IMagazine/dist/" element={<ProductList />}></Route>
                <Route path="/IMagazine/dist/products/:id" element={<ProductPage />}></Route>
                <Route path="/IMagazine/dist/basket" element={<BasketPage />}></Route>
            </Routes>
        </>
    );
}

export default App;
