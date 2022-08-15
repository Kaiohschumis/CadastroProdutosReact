import React from "react";

import { BrowserRouter, Route, Routes } from "react-router-dom";

import Home from "./views/home";
import CadastroProduto from "./views/produtos/cadastro";
import ConsultaProdutos from "./views/produtos/consulta";


export default function Rotas() {
        return (
                <BrowserRouter>
                        <Routes>
                                <Route path="/cadastro-produtos/" element={<CadastroProduto />} />
                                <Route path="/consulta-produtos" element={<ConsultaProdutos />} />
                                <Route path="/" element={<Home />} />
                        </Routes>
                </BrowserRouter>
        )
}



