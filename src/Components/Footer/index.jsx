import React from "react";

import Facebook from "../../Assets/imgs/Facebook.png";
import twitter from "../../Assets/imgs/twitter.png";
import youtube from "../../Assets/imgs/youtube.png";
import Instagram from "../../Assets/imgs/Instagram.png";
import formaspagamento from "../../Assets/imgs/formaspagamento";


export default function Footer() {
    return(

    <footer className="new-footer__social-media mt-4">   
    <hr className="mh-col-4-xs mh-col-8-md mh-col-12-lg">
    <div className="mh-col-4-xs text-xs-center text-sm-center">
    <ul className="new-footer__social-media--mobile mt-4">
    </ul>
    </div>
    </hr>
    <script type="text/javascript">
    <div className="container">
    <div className="row">
    <div className="col-sm-4">
    </div>
    Destino Certo
    <span>VIAGENS E TURISMO</span>
    </div>
    <div className="row">
    <div className="col-sm-9"><p>Viva este novo conceito em excursão, viajando com a agência mais segura, divertida e organizada do Brasil. Milhares de pessoas já viveram essa experiência. Viagem com Destino Certo!</p></div>
    <div className="col-12">
    <h5 className="new-footer__social-media-title">Redes sociais</h5>
    </div>
    <li className="d-inline-flex mr-3"><a className="new-footer__social-media-icon" data-track="Footer/Ir para a página do Destino Certo no Facebook (link externo)" rel="noopener" target="_blank" title="Ir para a página do Destino Certo no Facebook (link externo)" href="https://pt-br.facebook.com/"><img alt="Ícone do logotipo do Facebook"loading="lazy" src={Facebook}></img>
    </a></li>
    <li className="d-inline-flex mr-3"><a className="new-footer__social-media-icon" data-track="Footer/Ir para a página do Destino Certo no Instagram (link externo)" rel="noopener" target="_blank" title="Ir para a página do Destino Certo no Instagram (link externo)" href="https://www.instagram.com/"><img alt="Ícone do logotipo do Instagram"loading="lazy" src={Instagram}></img>
    </a></li>
    <li className="d-inline-flex mr-3"><a className="new-footer__social-media-icon" data-track="Footer/Ir para a página do Destino Certo no Twitter (link externo)" rel="noopener" target="_blank" title="Ir para a página do Destino Certo no Twitter (link externo)" href="https://twitter.com/"><img alt="Ícone do logotipo do Twitter"loading="lazy" src={twitter}></img>
    </a></li>
    <li className="d-inline-flex mr-3"><a className="new-footer__social-media-icon" data-track="Footer/Ir para o canal do Destino Certo no YouTube" rel="noopener" target="_blank" title="Ir para o canal do Destino Certo no YouTube (link externo)" href="https://www.youtube.com"><img alt="Ícone do logotipo do Youtube"loading="lazy" src={youtube}></img>
    </a></li>
    </div>
    </div>
    </script>
    <div className="col-12 col-sm-8">
    <form id="form-news">
    <label for="email"> "Receba em primeira mão as melhores promoções de viagens da internet" <span> As melhores promoções de viagens da internet</span></label>
    <div className="row justify-content-center">
    <div className="col-12 msg">
    <div className="card card-outline-success p-3 text-success msg" style="display: none;" >Obrigado por adicionar seu email a nossa newsletter.Em breve enviaremos novidades!</div>
    </div>
    </div>
    </form>
    <div className="col-12 msg-erro">
    <div className="card card-outline-danger p-3 mb-2 text-danger msg-erro" style="display: none;" >Campo e-mail é obrigatório!</div>
    </div>
    <div className="col-12 form">
    <input name="email" id="email" placeholder="DIGITE SEU E-MAIL AQUI" type="email" className="form-control mb-2 mb-sm-0 news-email"><button  type='submit' className="btn btn-primary">Cadastrar</button>
    </input>
    </div>
    </div>
    <div className="col-12">
    <ul className="list-unstyled row">
    </ul>
    </div>
    <li><a href="./Promocao.html" title="Nossos pacotes">Pacotes</a></li>
    <li><a href="./Destino.html" title="Galeria de fotos">Galeria de Fotos</a></li>
    <li ><a href="./contato.html" title="Entre em contato conosco">Contato</a></li>
    <div id="rodape">
    <h4>Formas de pagamento</h4>
    <img src={formaspagamento} alt="Formas de pagamento"></img>
    <div className="legales-line mh-col-12 mt-3">
    <p>Destino Certo.S.A (“DESTINO CERTO”), Agencia de Viagem, inscrita sob o CNPJ nº 00.000.000/0001-00, com sede na Avenida Paulista, nº 0.000, 16º andar, Jd Portela, São Paulo – SP.</p>
    <div className="copy col-md-12">
     &#169;todos os direitos reservados a destino certo
    </div>
    </div>
    </div>
        
    </footer>
  
    )
}