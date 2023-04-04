import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Cardapio } from "./pages/Cardapio";
import { Home } from "./pages/Home";
import { Login } from "./pages/Login";
import { Carrinho } from "./pages/Carrinho";

export default function Router() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/login" element={<Login />} />
                <Route path="/cardapio" element={<Cardapio />} />
                <Route path="/carrinho" element={<Carrinho />} />
            </Routes>
        </BrowserRouter>
    )
}