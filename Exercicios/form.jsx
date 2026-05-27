// ============================================================
// EXERCÍCIO — Estado com useState
// ============================================================
// Objetivo: completar o formulário de cadastro abaixo usando
// estados controlados com useState.
//
// O que está pronto: a estrutura JSX (campos, botão e exibição)
// O que você precisa fazer:
//   1. Importar o useState do React
//   2. Criar os estados para cada campo (nome, email, senha)
//   3. Ligar cada input ao seu estado via value e onChange
//   4. Fazer a função "enviar" exibir os dados no console
//
// Dica: siga o padrão ensinado.
// ============================================================

// TODO 1: importe o useState aqui
// import { ___ } from "react";
 import { useState} from "react";

function FormularioCadastro() {

  // TODO 2: crie três estados abaixo
  // const [nome,  ___] = useState(___);
  // const [email, ___] = useState(___);
  // const [senha, ___] = useState(___);

    const [nome, setNome] = useState("");
    const [email,setEmail] = useState("");
    const [senha,setSenha] = useState("");

  function enviar(event) {
    event.preventDefault();

    // TODO 4: exiba os três valores no console com console.log
    // console.log("Nome:",  ___);
    // console.log("Email:", ___);
    // console.log("Senha:", ___);
        console.log("Nome:",setNome);
        console.log("Email:",setEmail);
        console.log("Senha:", setSenha);
  }

  return (
    <form onSubmit={enviar}>
      <h2>Criar conta</h2>

      {/* TODO 3a: adicione value={___} e onChange={...} neste input */}
      <input
        type="text"
        placeholder="Seu nome"
        value={nome}
        onChange={(e)=> setNome(e.target.value)}
      />

      {/* TODO 3b: adicione value={___} e onChange={...} neste input */}
      <input
        type="text"
        placeholder="Seu e-mail"
        value={email}
        onChange={(a)=> setEmail(a.target.value)}
      />

      {/* TODO 3c: adicione value={___} e onChange={...} neste input */}
      <input
        type="password"
        placeholder="Sua senha"
        value={senha}
        onChange={(m)=> setSenha(m.target.value)}
      />

      <button type="submit">Cadastrar</button>

      {/* Esta parte já exibe os valores na tela — só vai funcionar
          quando você ligar os estados aos inputs acima */}
      <div>
        <p>Nome digitado: {nome}</p>
        <p>Email digitado: {email}</p>
      </div>
    </form>
  );
}

export default FormularioCadastro;

