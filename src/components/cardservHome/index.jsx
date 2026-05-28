import"./style.css"

import imgAlfinete from "../../assets/images/alfinete.png";

function CardServHome(props){

    function FormatarValor() {
        const valor = parseFloat(props.proposta);

        return valor.toLocaleString("pt-BR",
            {
                style:"currency", 
                currency:"BRL"
            }
        )
    }
    function LimitarTexto(texto,limite){

        if (texto.length >= limite) {

            return texto.substring(0,limite ) + "..."
            
        }
        return texto;
    }
    return (
        <>
            <img src={imgAlfinete}  alt =""></img>

            <h3>
                {LimitarTexto(props.titulo,45)}
            </h3>

            <p>
                {LimitarTexto(props.descricao,182)}
            </p>

            <p>
                {FormatarValor()}
            </p>

        </>
    )
}

export default CardServHome;