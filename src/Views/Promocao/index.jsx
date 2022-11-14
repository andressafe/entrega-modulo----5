import React from "react";

import Imagem1 from "../../Assets/imgs/belohorizonte.png";
import Imagem2 from "../../Assets/imgs/recife.png";
import Imagem3 from "../../Assets/imgs/riodejaneiro.png";
import Imagem4 from "../../Assets/imgs/salvador.png";
import Imagem5 from "../../Assets/imgs/sãopaulo.png";

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


export default function Promocao() {
    return (
    <main className="container">
    <div className="row">
    <div className=" content col-sm-12 col-md-10 offset-md-1">
    <div className="search">
    <div className="input-group mb-3">
    <div className="input-group-append">
    </div>
    </div>
    </div>
    </div>
    </div>
    <fieldset className="tipo_viagem">
    <label for="ida_volta">
    <input type="radio" checked="checked" value="1" name="tipo_viagem" id="ida_volta"
     className="option-input radio"> Ida e volta
    </input>
    </label>
    <label for="so_ida" className="so_ida">
    <input type="radio" value="2" name="tipo_viagem" id="so_ida" className="option-input radio"> Apenas ida
    </input>
    </label>
    </fieldset>
    <div className="busca-passagem-origem">
    <label for="origemCP">Viajar de</label>
    <input type="text" autocomplete="off" name="origemCP" id="origemCP"
     placeholder="Digite a origem" required="" className="required" data-provide="typeahead">
    </input>
    </div>
    <div className="busca-passagem-destino">
    <label for="destinoCP">Para</label>
     <input type="text" autocomplete="off" name="destinoCP" id="destinoCP"
    placeholder="Digite o destino" required="" className="required" data-provide="typeahead">
    </input>
    </div>
    <form action="/calendario.html">
    <label for="Data e Hora">
    </label>
    </form>
    <input type="datetime-local" id="datetime" name="datetime">
    </input>
    <div className="box">
    </div>
    <img src={Imagem5}></img>
     alt="Pacote de Viagem - São Paulo + Hospegagem - 2024" loading="lazy" className="h-5v23o1"
    <div className="h-7k3cv9 FeaturedPackageCard_Content__8vZxq">
    <div className="FeaturedPackageCard_PackageInfo__ggdX0">
    <div className="FeaturedPackageCard_NameWrapper__lld4G">
    <h3 className="h-wn81ik">Pacote de Viagem - São Paulo</h3>
    </div>
    </div>
    <div className="h-1j7962n"><i className="hu-icon hu-icon-calendar-o h-1jav1wn"></i>7 diárias</div>
    <ul className="h-a4d8e5">
    <li className="h-iyp65h"><span className="h-17djvlc"><i
       className="hu-icon hu-icon-check h-lsgl0n"></i></span><span className="h-x5lawr">Quarto</span>
    </li>
    </ul>
    </div>
    <div className="FeaturedPackageCard_PriceWrapper__i0LyG">
    <div className="h-1g1ka2j FeaturedPackageCard_Price__aXO7z">
    <div><span className="h-10lkbkm">De </span><span className="h-6q3y7h"><s>R$ 350,00</s></span></div><strong
         className="h-1rv69u0">Por R$ 206,00</strong><span className="h-10lkbkm">+ taxas | Em até 12x
    </span><span className="h-1i6optq">Cancelamento Grátis!</span>
    </div>
    <a href="./Pagamento.html" className="btn btn-primary">Clique aqui para comprar</a></div>
    <div className="header_wrapper header_interno" id="barra_header"><div className="hamburger" id="hamburger">
    <div className="buscar-caixa">
    <span className="buscar-btn" id="bt-chamar-buscar-textual">
    </span>
    </div>
    </div>
    </div>
    <i className="fas fa-search">
    </i>
    <div className="box">
    </div>
    <img src={Imagem4}></img>
      alt="Pacote de Viagem - Rio de Janeiro + Hospegagem - 2024" loading="lazy" className="h-5v23o1"
    <div className="h-7k3cv9 FeaturedPackageCard_Content__8vZxq">
    <div className="FeaturedPackageCard_PackageInfo__ggdX0">
    <div className="FeaturedPackageCard_NameWrapper__lld4G">
    <h3 className="h-wn81ik">Pacote de Viagem - Rio de Janeiro</h3>
    </div>
    </div>
    <div className="h-1j7962n"><i className="hu-icon hu-icon-calendar-o h-1jav1wn"></i>7 diárias
    </div>
    <ul className="h-a4d8e5">
    <li className="h-iyp65h"><span className="h-17djvlc"><i className="hu-icon hu-icon-check h-lsgl0n"></i></span><span
        className="h-x5lawr">Quarto</span>
    </li>
    </ul>
    </div>
    <div className="FeaturedPackageCard_PriceWrapper__i0LyG">
    <div className="h-1g1ka2j FeaturedPackageCard_Price__aXO7z">
    <div><span className="h-10lkbkm">De </span><span className="h-6q3y7h"><s>R$ 206,00</s></span>
    </div> className="h-1rv69u0"Por R$ 191,00<span className="h-10lkbkm">+
      taxas | Em até 12x </span><span className="h-1i6optq">Cancelamento Grátis!</span>
    </div>
    <a href="./Pagamento.html" className="btn btn-primary">Clique aqui para comprar</a></div>
    <div className="header_wrapper header_interno" id="barra_header">
    <div className="hamburger" id="hamburger">
    <div className="buscar-caixa">
    <span className="buscar-btn" id="bt-chamar-buscar-textual">
    </span>
    </div>
    </div>
    </div>
    <i className="fas fa-search">
    </i>
    <div className="box">
    <img src={Imagem2}></img>
       alt="Pacote de Viagem - Recife + Hospegagem - 2024" loading="lazy"
       className="h-5v23o1"
    <div className="h-7k3cv9 FeaturedPackageCard_Content__8vZxq">
    <div className="FeaturedPackageCard_PackageInfo__ggdX0">
    <div className="FeaturedPackageCard_NameWrapper__lld4G">
    <h3 className="h-wn81ik">Pacote de Viagem - Recife</h3>
    </div>
    </div>
    </div>
<div className="h-1j7962n"><i className="hu-icon hu-icon-calendar-o h-1jav1wn"></i>7 diárias</div>
<ul className="h-a4d8e5">
<li className="h-iyp65h"><span className="h-17djvlc"><i
className="hu-icon hu-icon-check h-lsgl0n"></i></span><span
className="h-x5lawr">Quarto</span></li>
</ul>
</div>
<div className="FeaturedPackageCard_PriceWrapper__i0LyG">
<div className="h-1g1ka2j FeaturedPackageCard_Price__aXO7z">
<div><span className="h-10lkbkm">De </span><span className="h-6q3y7h"><s>R$ 502,00</s></span></div><strong className="h-1rv69u0">Por R$ 446,00</strong><span className="h-10lkbkm">+ taxas | Em até 12x </span><span className="h-1i6optq">Cancelamento Grátis!</span>
</div>
<a href="./Pagamento.html" className="btn btn-primary">Clique aqui para comprar</a></div> 
<div className="header_wrapper header_interno" id="barra_header">
<div className="hamburger" id="hamburger">
<div className="buscar-caixa">
<span className="buscar-btn" id="bt-chamar-buscar-textual">
</span>
</div>
</div>
<i className="fas fa-search">
</i>
<div className="box">
<img src={Imagem4} alt="Pacote de Viagem - Salvador + Hospegagem - 2024"loading="lazy" className="h-5v23o1"></img>
<div className="h-7k3cv9 FeaturedPackageCard_Content__8vZxq">
<div className="FeaturedPackageCard_PackageInfo__ggdX0">
<div className="FeaturedPackageCard_NameWrapper__lld4G">
<h3 className="h-wn81ik">Pacote de Viagem - Salvador</h3>
</div>
</div>

<div className="h-1j7962n"><i className="hu-icon hu-icon-calendar-o h-1jav1wn"></i>7 diárias</div>
<ul className="h-a4d8e5">
<li className="h-iyp65h"><span className="h-17djvlc"><i className="hu-icon hu-icon-check h-lsgl0n"></i></span><span className="h-x5lawr">Quarto</span>
</li>
</ul>
</div>
<div className="FeaturedPackageCard_PriceWrapper__i0LyG">
<div className="h-1g1ka2j FeaturedPackageCard_Price__aXO7z">
<div><span className="h-10lkbkm">De </span><span className="h-6q3y7h"><s>R$ 1200,00</s></span></div>
<strong className="h-1rv69u0">Por R$ 863,00</strong><span className="h-10lkbkm">+ taxas Em até 12x </span><span
className="h-1i6optq">Cancelamento Grátis!</span>
</div>
<a href="./Pagamento.html" className="btn btn-primary">Clique aqui para comprar</a></div>
</div>
<div className="header_wrapper header_interno" id="barra_header">
<div className="hamburger" id="hamburger">
<div className="buscar-caixa">
</div>
<span class="buscar-btn" id="bt-chamar-buscar-textual">
<i class="fas fa-search">
</i></span>
<div className="box">
<img src={Imagem1}alt="Pacote de Viagem - Belo Horizonte + Hospegagem - 2024"
loading="lazy" className="h-5v23o1"></img>
<div
className="h-7k3cv9 FeaturedPackageCard_Content__8vZxq">
<div
className="FeaturedPackageCard_PackageInfo__ggdX0">
<div className="FeaturedPackageCard_NameWrapper__lld4G">
<h3 className="h-wn81ik">Pacote de Viagem - Belo Horizonte</h3>
</div>
<div className="h-1j7962n"><i
className="hu-icon hu-icon-calendar-o h-1jav1wn"></i>7 diárias</div>
<ul className="h-a4d8e5">
<li className="h-iyp65h"><span
className="h-17djvlc"><i
className="hu-icon hu-icon-check h-lsgl0n"></i></span><span
className="h-x5lawr">Quarto</span>
</li>
</ul>
</div>
<div className="FeaturedPackageCard_PriceWrapper__i0LyG">
<div className="h-1g1ka2j FeaturedPackageCard_Price__aXO7z">
<div>
<span className="h-10lkbkm">De
</span><span className="h-6q3y7h"><s>R$ 350,00</s></span></div>
<strong className="h-1rv69u0">Por R$218,00</strong><span>Cancelamento Grátis!</span>
</div>
<a href="./Pagamento.html" className="btn btn-primary">Clique aqui para comprar</a></div>
</div>
</div>
</div>
</div>
</div>
</main>
)

}