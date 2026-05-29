import "./style.css"

import imglogo from "../../assets/images/logo.svg";
import imgface from "../../assets/images/facebook.svg";
import imginsta from "../../assets/images/instagram.svg";
import imglink from "../../assets/images/linkdin.svg";

import { Link } from "react-router-dom";

function FooterComponent() {
    return (
        <div className="rodape_conteudo">

            <div className="rodade_conteudo_paginas">

                <h2>paginas</h2>

                <ul>
                    <li >
                        <Link to = {"/login"}>
                            Login
                        </Link>
                    </li>
                    <li>
                        <Link to = {"/"}>
                            Home
                        </Link>
                    </li>
                    <li >
                        <Link to = {"/lista/servicos"}>
                            cadastrar Servico
                        </Link>
                    </li>
                    <li >
                        <Link to = {"/cadastrar/servico"}>
                            cadastrar serviço
                        </Link>
                    </li>
                    <li >
                        <Link to = {"/cadastrar/usuario"}>
                            cadastrar desenvolvedor
                        </Link>
                    </li>
                    <li >
                        <Link to = {"/lista/devs"}>
                            listar Dsenvolvedores
                        </Link>
                    </li>
                </ul>

            </div>

                <img src={imglogo} alt="" />

                <div className="rodade_conteudo_contatos">

                    <h2>contatos</h2>

                    <div>
                        <Link to = {"#"}>
                        <img src={imgface} alt="" />
                        </Link>
                        <Link to = {"#"}>
                        <img src={imginsta} alt="" />
                        </Link>
                        <Link to = {"#"}>
                        <img src={imglink} alt="" />
                        </Link>
                    </div>

                    <Link to = {"mailto:contato@vsconnect.com"}>
                                contato@vsconnect.com
                    </Link>

                </div>
        </div>
    )
    
}
export default FooterComponent;