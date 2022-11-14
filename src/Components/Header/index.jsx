import React from "react";

import logo from "./imagens/logo.jpg";

export default function Header () {
    return (
<header>
    <nav class="navbar navbar-expand-lg     navbar-light bg-warning">
    <div class="container-fluid">
    <a class="navbar-brand" href="#"><img src={logo} alt=""></img></a>
    <nav class="menu">
    <div class="col-12">
    <ul class="list-unstyled row">
    <li class="nav-item active">
    <a class="nav-link" href="./index.html">Home <span class="sr-only">(current)</span></a>
    </li>
    <li class="nav-item">
    <a class="nav-link" href="./Destino.html">Destino</a>
    </li>
    <li class="nav-item">
    <a class="nav-link" href="./Promocao.html">Promoção</a>
    </li>
    <li class="nav-item">
    <a class="nav-link " href="./contato.html">Contato</a>
    </li>
    <li class="nav-item">
    <a class="nav-link " href="./cadastro.html">Cadastre-se</a>
    </li>
    <li class="nav-item">
    <a class="nav-link " href="./Login.html">Login</a>
    </li>
    </ul>
    </div>
    </nav>
    <div class="d-flex">
    <input class="form-control me-2" type="search" placeholder="Pesquisa" aria-label="Search"></input>
    <button class="btn btn-outline-success" type="submit">Buscar</button></div>
    </div>
    </nav>  
    <div class="pos-f-t">
    <div class="collapse" id="navbarToggleExternalContent">
    <nav class="navbar navbar-dark bg-primary">
    <a class="dropdown-item" href="./index.html">Home</a>
    <a class="dropdown-item" href="./Destino.html">Destino</a>
    <a class="dropdown-item" href="./Promocao.html">Promoção</a>
    <a class="dropdown-item" href="./cadastro.html">Cadastro</a>
    <a class="dropdown-item" href="./contato.html">Contato</a>
    </nav>
    </div>
    </div>
    <nav class="navbar navbar-dark bg-primary">           
    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarToggleExternalContent" aria-controls="navbarToggleExternalContent" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
    </button>
    </nav> 
    </header>

    )

}