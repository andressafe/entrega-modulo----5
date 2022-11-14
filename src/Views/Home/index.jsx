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


export default function Home() {
return (
<main className="container">
<div className="banner">
<div id="carroselExampleIndicators" className="carrosel slide" data-ride="carousel">
<ol className="carousel-indicators">
<li data-target="#carouselExampleIndicators" data-slide-to="0"
            className="active"></li>
            <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
            <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
        </ol>
        <div alingn-itens="center" id="carouselExampleIndicators"className="carousel slide"data-bs-ride="carousel">
        <div className="carousel-indicators"> 
        </div>
        <div className="carousel-inner">
        <div className="carousel-item active">
        <img src={Imagem1} className="d-block image" alt="Destino"></img>
        <div className="carousel-caption d-none d-md-block">
        </div>
        </div>
        <div className="carousel-item"> 
        <img src={Imagem3} className="d-block image" alt="Destino"></img>
        <div className="carousel-caption d-none d-md-block">
        </div>
        </div>
        </div>
        </div>
        </div>
        </div>
        <div className="box">
        <h5 className="card-title">São Paulo</h5>
        <img src={Imagem5} alt="São Paulo"
            className="card-title"></img>
        <p className="card-text">Passagens aéreas para São Paulo a partir de R$ 206 saindo de várias cidades!</p>
        <a href="./Promocao.html" className="btn btn-primary">Ver opções </a>
        </div>
        <div className="box">
        <h5 className="card-title">Rio de Janeiro</h5>
        <img src={Imagem4} alt="Rio de Janeiro"
            className="card-title"></img>
        <p className="card-text"> Voos flexíveis para o Rio de Janeiro a partir de R$ 191 ida e volta!</p>
        <a href="./Promocao.html" className="btn btn-primary">Ver opções </a>
        </div>
        <div className="box">
        <h5 className="card-title">Belo Horizonte</h5>
        <img src={Imagem1} alt="Belo Horizonte"
            className="card-title"></img>
        <p className="card-text">Belo Horizonte a partir de R$ 218 saindo de São Paulo e mais cidades!</p>
        <a href="./Promocao.html" className="btn btn-primary">Ver opções</a>
        </div>
        <div className="box">
        <h5 className="card-title">Salvador</h5>
        <img src={Imagem4} alt="Salvador"
            className="card-title"></img>
        <p className="card-text">Pacotes para Salvador! Voos mais hospedagem de 4 a 7 noites a partir de R$ 863 por pessoa!</p>
        <a href="./Promocao.html" className="btn btn-primary">Ver opções</a>
        </div>
        <div className="box">
        <h5 className="card-title">Recife</h5>
        <img src={Imagem2} alt="Recife"
            className="card-title" ></img>
        <p className="card-text">Flexíveis para Recife ou Maceió a partir de R$ 446 saindo de São Paulo e mais cidades!</p>
        <a href="./Promocao.html" className="btn btn-primary">Ver opções</a>
        </div>
    </main>
    )
}


