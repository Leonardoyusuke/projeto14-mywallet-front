import { useState } from "react"
import styled from "styled-components"
import { useNavigate } from "react-router-dom"


export default function Entrada(){
    const navigate = useNavigate()
    const [valor,setValor] = useState("")
    const [descricao, setDescricao] = useState("")

    function entrada(){
        console.log("entrada")
        navigate("/Home")


    }


    return(
        <>
        <p>Nova Entrada</p>
        <form onSubmit={entrada}>
            <Input1 placeholder="   Valor" type="number" onChange={e => setValor(e.target.value)} required />
            <Input1 placeholder="   Descrição" type="text" onChange={e => setDescricao(e.target.value)} required />
            <Button1 type="submit" > Salvar entrada </Button1>
        </form>
        </>
    )
}

const Button1 = styled.button`
width: 336px;
height: 46px;
background: #A328D6;
border-radius: 5px;
margin-left: 12px;
`

const Input1 = styled.input`
width: 326px;
height: 58px;
background: #FFFFFF;
border-radius: 5px;
margin-left: 12px;
margin-bottom: 10px;
`