import styled from "styled-components"
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { useState } from "react";
import { useContext } from "react";
import Context from "./Context";
import { useEffect } from "react";
import axios from "axios";
export default function Home({username}){
    const navigate = useNavigate();
    const { config, setConfig,reload,setReload,id } = useContext(Context);
    const [transacoes,setTransacoes] = useState("")
    
    useEffect(()=>{
        const request = axios.get("http://localhost:5001/transacoes",{id:id})
        request.then((response) => {
        setTransacoes(response.data)
        console.log(id)
        console.log(transacoes)
        })
        request.catch((error)=>{
            console.log(error)
        } )
    },[reload])
    
    setTimeout(() => {
        setReload(!reload)

    }, 5000);


    return(<>
        <Saudacao>
            Olá {username.name}  
        </Saudacao>
        <Registros>
           {transacoes.length>0?transacoes.map((t) => <>{t.descricao} {t.valor}</>  ) :"Não há registros de entrada ou saída"}
        </Registros>
        <InOut>
        <Link to="/nova-entrada">
            <Entrada> 
                 Nova entrada
            </Entrada> 
        </Link>
        <Link to="/nova-saida">
             <Saida> Nova saida </Saida>
        </Link>
       
        </InOut>
        </>

    )
}

const Saida = styled.div`
width: 155px;
height: 114px;
background: #A328D6;
border-radius: 5px;
margin-left: 16px;
`

const Entrada = styled.div`
width: 155px;
height: 114px;
background: #A328D6;
border-radius: 5px;`

const InOut = styled.div`
display: flex;
flex-direction: row;
margin-left: 16px;
margin-top: 15px;
`

const Registros = styled.div`
width: 326px;
height: 446px;
margin-left: 16px;
margin-right: 25px;
margin-top: 22px;
background-color: white;
`


const Saudacao = styled.div`
margin-left: 16px;
margin-top: 25px;
`