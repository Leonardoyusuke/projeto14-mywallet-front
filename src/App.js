import { BrowserRouter, Routes, Route } from "react-router-dom";
import Cadastro from "./components/Cadastro";
import GlobalStyle from "./components/GlobalStyle";
import Login from "./components/Login";
import { useState } from "react";
import Context from "./components/Context";
import Home from "./components/Home"

function App() {
  const [token,setToken] = useState("")

  return (
  <>
  <Context.Provider value={{token,setToken}}
      >
    <BrowserRouter>
    <GlobalStyle/>
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/cadastro" element={<Cadastro />} />
      <Route path="/home" element={<Home />} />

    </Routes>
    </BrowserRouter>
    </Context.Provider>
  </>
  );
}

export default App;
