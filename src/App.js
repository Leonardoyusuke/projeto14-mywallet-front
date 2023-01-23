import { BrowserRouter, Routes, Route } from "react-router-dom";
import Cadastro from "./components/Cadastro";
import GlobalStyle from "./components/GlobalStyle";
import Login from "./components/Login";
import { useState } from "react";
import Context from "./components/Context";
import Home from "./components/Home"
import Entrada from "./components/Entrada";
import Saida from "./components/Saida";

function App() {
  const [config,setConfig] = useState("")
  const [username, setUsername] = useState({name:""})
  const [id,setId] = useState("")
  const [reload,setReload] = useState(false)


  return (
  <>
    <BrowserRouter>
    <Context.Provider value={{config, setConfig, id, setId,reload, setReload}}>
    <GlobalStyle/>
    <Routes>
      <Route path="/" element={<Login username={username} setUsername={setUsername} />} />
      <Route path="/cadastro" element={<Cadastro />} />
      <Route path="/home" element={<Home username={username} />} />
      <Route path="/nova-entrada" element={<Entrada />} />
      <Route path="/nova-saida" element={<Saida />} />    
      </Routes> 
     </Context.Provider>
    </BrowserRouter>
  </>
  );
}

export default App;
