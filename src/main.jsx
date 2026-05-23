import React from "react";
import ReactDOM from "react-Dom/client";
 
import CadastroServico from "./pages/CadastroServico"
import CadastroUsuario from "./pages/CadastroUsuario"
import Home from "./pages/Home"
import ListaDevs from "./pages/ListaDevs"
import ListaServico from "./pages/ListaServico"
import Login from "./pages/Login"
import PerfilUsuario from "./pages/PerfilUsuario"
import VisualizarServico from "./pages/VisualizarServico"


import Header from "./components/Header"

import "./index.css"

import{BrowserRouter,Routes,Route} from "react-router-dom";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>  

    <BrowserRouter>

    <Header/>

    <Routes>

      <Route path = "/" element = {<Home/>}/>
      <Route path = "/lista/servico" element = {<ListaServico/>}/>
      <Route path = "/lista/devs" element = {<ListaDevs/>}/>
      <Route path = "/cadastro/servico" element = {<CadastroServico/>}/>
      <Route path = "/cadastro/usuario" element = {<CadastroUsuario/>}/>
      <Route path = "/Perfil/:idusuario" element = {<PerfilUsuario/>}/>
      <Route path = "/login" element = {<Login/>}/>
      <Route path = "/visualizar/:idservico" element = {<VisualizarServico/>}/>

    </Routes>

    </BrowserRouter>

  </React.StrictMode>
)
