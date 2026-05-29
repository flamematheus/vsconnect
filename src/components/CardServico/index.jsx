import "./style.css"

import { Link } from "react-router-dom";

function CardServico(props){
     
    function VerificarValor() {

        if (typeof props.proposta === "string") {

            return parseFloat(props.proposta)
            
        } else {
            return props.proposta ;
            
        }
        
    }
    return (
        <div className="card_servico">

            <div  className="topo_servico">

                <Link to={"/servico/" + props.id}>

                <h2>{props.titulo}</h2>

                </Link>

                <span>
                    {VerificarValor().toLocaleString(
                        "pt-br",
                        {   style:"currency",
                            currency:"BRL"
                        }
                    )}
                </span>

            </div>

            <p>{props.descricao}</p>

            <div className="techs">
                {props.listaTechs.map((tech, indice)=>(
                    <span kay = {indice}>
                        {tech}
                    </span>
                ))}

            </div>
            
        </div>
    );
}

export default CardServico;