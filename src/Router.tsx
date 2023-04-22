import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Cardapio } from "./pages/Cardapio";
import { Home } from "./pages/Home";
import { Login } from "./pages/Login";
import { Carrinho } from "./pages/Carrinho";
import { Sanduiches } from "./pages/Sanduiches";
import { Register } from "./pages/Register";
import { Success } from "./pages/Sucesso";
import { UserProfile } from "./pages/User";
import { PainelAdm } from "./pages/Painel_Adm";
import { Bebidas } from "./pages/Bebidas";

export default function Router() {
    return (
        <BrowserRouter >
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<Register />} />
                <Route path="/cardapio" element={<Cardapio />} />
                <Route path="/carrinho" element={<Carrinho />} />
                <Route path="/sanduiche" element={<Sanduiches />} />
                <Route path="/bebidas" element={<Bebidas />} />
                <Route path="/success" element={<Success />} />
                <Route path="/profile" element={<UserProfile />} />
                <Route path="/users" element={<PainelAdm />} />
            </Routes>
        </BrowserRouter>
    )
}