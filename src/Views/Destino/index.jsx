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



export default function Destino() {
    return (
    <main className="container-fluid main">
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
         <h5>São Paulo</h5>
        <div className="card-body">
        <img src= {Imagem5}alt="São Paulo"
           className="card-title"></img>
        <h6 className="card-text">Confira as ofertas!</h6>
        <a href="./Promocao.html" className="btn btn-primary">Clique Aqui</a>
        </div>
        <h5>Rio de Janeiro</h5>
        <div className="card-body">
        <img src={Imagem3} alt="Rio de Janeiro"
           className="card-title"></img>
        <h6 className="card-text">Confira as ofertas!</h6>
        <a href="./Promocao.html" className="btn btn-primary">Clique Aqui</a>
        </div>
        <h5>Belo Horizonte</h5>
        <div className="card-body">
        <img src={Imagem1} alt="Belo Horizonte"
           className="card-title"></img>
        <h6 className="card-text">Confira as ofertas!</h6>
        <a href="./Promocao.html" className="btn btn-primary">Clique Aqui</a>
        </div>
        <h5>Salvador</h5>
        <div className="card-body">
        <img src={Imagem4} alt="Salvador"
           className="card-title"></img>
        <h6 className="card-text">Confira as ofertas!</h6>
        <a href="./Promocao.html" className="btn btn-primary">Clique Aqui</a>
        </div>
        <p>
        <h5>Recife</h5>
        <div className="card-body">
        <img src={Imagem2} alt="Recife"
           className="card-title"></img>
        <h6 className="card-text">Confira as ofertas!</h6>
        <a href="./Promocao.html" className="btn btn-primary">Clique Aqui</a>
        </div>
        </p>  
    </main>
)
}
