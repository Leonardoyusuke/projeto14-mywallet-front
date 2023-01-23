import { useState } from "react"
import styled from "styled-components"
import { useNavigate } from "react-router-dom"
import axios from "axios"
import { useContext } from "react"
import Context from "./Context"

export default function Entrada(){
    const navigate = useNavigate()
    const {id,setId} = useContext(Context)

    const [entrada,setEntrada] = useState({
        valor:"",
        descricao:"",
        id:id
    })

    function enviarEntrada(e){
        e.preventDefault()
        const request = axios.post("http://localhost:5001/transacoes",entrada)
        request.then((element) => {
        const response = element.data
            console.log(response)
        navigate("/home")
    })
        request.catch((error) =>{
            console.log(error)
        })
    }
    function entrar(e){
        setEntrada({
            ...entrada,[e.target.name]:e.target.value
        })
    }


    return(
        <>
        <p>Nova Entrada</p>
        <form onSubmit={enviarEntrada}>
            <Input1 placeholder="   Valor" type="number" name="valor" onChange={entrar} required />
            <Input1 placeholder="   Descrição" type="text" name="descricao" onChange={entrar} required />
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