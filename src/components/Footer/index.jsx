import "./style.css";

import imgDev from "../../assets/images/dev.png";

import { Link } from "react-router-dom";


import FooterComponet from "../FooterComponent";

function Footer() {
    return(
        <footer id = "footer">

            <div className="container rodape">

                <div className="span_dicas">

                    <img src={imgDev} alt="" />

                    <div className="span_dicas_texto">

                        <p> Temos algumas dicas para o seu serviço ou freela ser um sucesso,
                            acesse nossa página de recomendações para saber mais.</p>

                        <Link to = {"#"} className="botao botao_dicas">
                            MAis dicas
                        </Link>

                    </div>
                </div>

                <FooterComponet/>

                <p>
                    Todos Os Direitos Reservados.©
                </p>

            </div>

        </footer>
    )
}

export default Footer;