import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Body from "./components/Body";
import Header from "./components/Header";
import About from "./components/About";
import ProductDetails from "./components/ProductDetails";
import CartPage from "./components/CartPage";
import Login from "./components/Login";
import Signup from "./components/Signup";

function App() {
    return (
        <BrowserRouter>
            <Header />;
            <Routes>
                <Route path="/" element={<Body />} />
                <Route path="/about/*" element={<About />} />
                <Route path="/product/:id" element={<ProductDetails />} />
                <Route path="/cart" element={<CartPage />} />
                <Route path="/login" element={<Login />} />
                <Route path="/signup" element={<Signup />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;
