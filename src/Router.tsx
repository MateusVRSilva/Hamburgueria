import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Cardapio } from "./pages/Cardapio";
import { Home } from "./pages/Home";
import { Login } from "./pages/Login";
import { Carrinho } from "./pages/Carrinho";
import { Sanduiches } from "./pages/Sanduiches";

export default function Router() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/login" element={<Login />} />
                <Route path="/cardapio" element={<Cardapio />} />
                <Route path="/carrinho" element={<Carrinho />} />
                <Route path="/sanduiche" element={<Sanduiches />} />
            </Routes>
        </BrowserRouter>
    )
}