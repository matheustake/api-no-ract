import React from 'react';

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Cadastro from './pages/Cadastro';
import Inicio from './pages/Inicio';
import Consultar from './pages/Tabelacadastro';

export default function Navegacao() {
    return(
        <BrowserRouter>
          <Routes>
            <Route path ='/' element={<Inicio />} />
            <Route path ='/Cadastro' element={<Cadastro />} />
            <Route path ='/Tabelacadastro' element={<Consultar />} />
            
          </Routes>
        </BrowserRouter>
    )
}