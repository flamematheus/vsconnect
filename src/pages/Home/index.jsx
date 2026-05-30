import "./style.css"
 
import imgClientes from "../../assets/images/clientes.png";

import imgMaosdev from "../../assets/images/maos_dev.png";

import { Link } from "react-router-dom";

import {useEffect , useState} from "react";

import api from "../../utils/api";

import CardServHome from "../../components/CardservHome"

import Footer from "../../components/Footer"


function Home() {

    const [ListaServicos,setListaServicos] =useState([]);

    function ListarServicos(){


        let doisServicos = [];

        api.get("servicos")
    
        .then((response)=>{

        for(let i = 0 ; i < 2 ; i++){
            doisServicos.push(response.data[i])
         }

         setListaServicos(doisServicos);
        })
        .catch((error)=>{
        console.log("Erro",error);
         });
    }

    useEffect(()=>{
        ListarServicos();
    },[]);

    return (
        <div>
            <main id = "home_main">

                <h1>
                    pagina inicial VSconnect
                </h1>

                <section  className="banner">

                    <div className="banner_conteudo">

                        <span className="banner_slogan_l1">
                            Vsconnect

                        </span>

                        <p className="banner_slogan_l2">
                            conectando os melhores desenvolvedores independentes 
                            as mais diversas oportunidades.
                        </p>

                         <p className="banner_slogan_l3">
                           conecte-se e comece a desvendar esse mundo!
                        </p>

                        <div className="banner_botoes">

                            <Link className="botao bonner_botao_dev" to ="/cadastrar/usuario">
                                Desenvolvedor 
                            </Link>
                            <Link className="botao bonner_botao_cli" to ="/cadastrar/usuario">
                                Cliente
                            </Link>

                        </div>
                    </div>

                </section>

                <section className="container para_clientes">
                    <div className="span_cliente">

                        <p>
                            Desde 2015 Unido Propositos.
                            <br />
                            uma  nova Forma De Conectar Pessoas.
                        </p>

                    </div>
                    <div className="clientes_conteudo">
                        <img src={imgClientes} alt="" />

                        <div className="cliente_texto">

                            <h2>
                                Para Clientes
                            </h2>

                            <ul>
                                <li>Cadastrar serviços</li>
                                <li>procurar por Desenvolvedores</li>
                            </ul>

                            <div>
                                <Link className="botao clientes_botao_cli" to = "/cadastrar/usuario">
                                     criar conta
                                </Link>
                            </div>
                        </div>
                    </div>
                </section>

                 <div className="conexao"></div>

                 <section className=" container para_devs">

                    <div className="devs_texto">

                        <h2>Para Desenvolvedores</h2>

                        <ul>
                            <li>encontar serviços</li>
                            <li>divulgar suas hardskills</li>
                        </ul>

                        <div>
                            <Link className="botao clientes_botao_devs" to = "/cadastrar/usuario">
                                     criar conta
                            </Link>

                        </div>        
                    </div>

                    <img src={imgMaosdev} alt="" />

                 </section>

                 <section className="container Servicos">

                    <h2>serviços</h2>

                    <div className="servico_cards">

                        {ListaServicos.map((servico,indece)=>(
                            <div className="card card2" kay = {indece}>

                                <CardServHome
                                    titulo = {servico.nome}
                                    descricao = {servico.descricao}
                                    proposta = {servico.valor}
                                />

                            </div>
                        ))}

                    </div>
                    <Link to = {"/lista/servicos"}>
                        ver mais serviços
                    </Link>
                            

                 </section>

            </main>
            <Footer/>
        </div>
    );

}
export default Home;

