import styled from "styled-components"
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { useState } from "react";

export default function Home(){
    return(<>
        <Saudacao>
            Olá fulano  
        </Saudacao>
        <Registros>
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