function saudacao (props){
    return <h1>ola,{props.nome}!</h1>
}

<saudacao nome = "lucas "/>


function produto(props){
    return(
        <div>
            <h2>{props.nome}</h2>
            <p>R${props.preco}</p>
        </div>
    );
}

<produto nome = "notebook" preco = "35000"/>

function botao(props){
    return (
        <button>
            {props.texto}
        </button>
    );
}

<botao texto ="Salver"/>

//(desestruturação)
function saudacao2({nome}){
    let nome  = props.nome 
 
}

function usuario({nome,idade,cidade}){
    return(
        <div>
            <h1>{nome}</h1>
            <p>{idade}</p>
            <p>{cidade}</p>
        </div>

    )
}

<usuario
    nome= "lucas"
    idade={35}
    cidade="são Paulo"
/>
 //use state

 function Contador(){
    //let numero = 0
    function aumentar(){
        numero++
        console.log(numero)
    }
    return(
        <div>
            <h1>{numero}</h1>
            <button onClick={aumentar}>Aumentar</button>
        </div>

    )
 }
 import {useState} from "react";
    function contador (){
        const [contador,setContador] = useState[0];
        return(
            <div>
                <p>voce clicou{contador}vezes</p>
                <button onClick={()=>setContador(contador++)}> clique aqui</button>
            </div>
        )
    }

    function Nome (){
        const [nome,setNome] = useState("");
        return(
            <div>
                <input onChange={(e)=>setNome(e.target.value)} />
                <h1>{nome}</h1>
            </div>
        )
    }

function FormularioLogin(){
    const [email,setEmail ]= useState("");
    const [Senha,setSenha ]= useState("");

    function enviarFormulario(event){
        event.preventDeFault();
            console.log("email",email)
            console.log("Senha",Senha)
    }
    return(
        <form onSubmit={enviarFormulario}>
            <input type="Email"  value={email} onChange={(e)=>setEmail(e.target.value)} placeholder="Digite seu Email"/> 
            <input type="password"  value={Senha} onChange={(e)=>setSenha(e.target.value)} placeholder="Digite seu senha"/> 


             <button typo ="submit">
                
             </button>
        </form>
    )

}

// estado com arrays
const [ListaItens,setListaItens] = useState([]);

function adicinaritem(novoItem){
    setListaItens([...ListaItens,novoItem])
}

function removerItens(itemParaRemover){
    setListaItens(ListaItens.filter(item => item != itemParaRemover))
}