import React from "react";

import zap from "../../Assets/imgs/zap.png";

import email from "../../Assets/imgs/email.png";
import "./../Home/style.css";
import Home from './pages/Home';
import Destino from './pages/Destino';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Promocao from './pages/Promocao';
import Cadastro from './pages/Cadastro';
import Contato from './pages/Contato';


function Rotas(){
 return(
<Router>
<Navbar/>
<Routes>
<Route path='/' element={<Home/>}/>
<Route path='/destino' element={<Destino/>}/>
<Route path='/promocao' element={<Promocao/>}/>
<Route path='/'cadastro element={<Cadastro/>}/>
<Route path='/contato' element={<Contato/>}/>
</Routes>
<Footer/>
</Router>
    )
}
import Home from './pages/Home';
import Destino from './pages/Destino';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Promocao from './pages/Promocao';
import Cadastro from './pages/Cadastro';
import Contato from './pages/Contato';

function Rotas(){
return(
<Router>
<Navbar/>
<Routes>
<Route path='/' element={<Home/>}/>
<Route path='/destino' element={<Destino/>}/>
<Route path='/promocao' element={<Promocao/>}/>
<Route path='/cadastro' element={<Cadastro/>}/>
<Route path='/contato' element={<Contato/>}/>
</Routes>
<Footer/>
</Router>
    )
}


export default function Contato() {
    return (
        <main className="container-fluid main">
          <div className="row">
        <img src={email}></img>
            contato@destinocerto.com
        </div>
        <img src={zap}></img>
            (11) 99999-9999
        <h5>Nome: </h5>
        <input type="text" style="width: 400px;" placeholder="Digite seu nome aqui"/>
        <h5>Mensagem: </h5>
        <textarea style="width: 400px;"></textarea>
        <input type="submit" value="Enviar"/>
        <div rodape="element last-child-container">
        <h5>Atendimento ao Cliente (SAC)</h5>
        <p>Segunda à Sexta das 8h às 21h
          Sábado das 9h às 15h</p>
        </div>
        <h5 className="-info-item__title">Capitais</h5>
        <p>4000-0000</p>
        <h5 className="-info-item__title">Demais localidades</h5>
        <p>0800 000 0000</p>
        </main>
    )
}