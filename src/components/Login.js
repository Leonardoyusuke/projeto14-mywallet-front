import styled from "styled-components"
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { useState, useContext } from "react";
import axios from "axios";
import Context from "./Context";

export default function Login(){
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const {token,setToken} = useContext(Context)
    const navigate = useNavigate()

    function login(event) {
        event.preventDefault();
        const request = axios.post("https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/auth/login",{email:email, password:password})
        request.then((response) =>{
            setToken(response.data.token);
            console.log(response.data.token);
            navigate("/home")})
    }


    return(
            <Content>
            <Text>My Wallet</Text>
            <Form1 onSubmit={login}>
                <Input1 placeholder="   E-mail" type="email" onChange={e => setEmail(e.target.value)} required />
                <Input1 placeholder="   Senha" type="password" onChange={e => setPassword(e.target.value)} required />
                <Button1  type="submit"  >Entrar  </Button1>
            </Form1>
            <Link to="/cadastro">
                <P >Primeira vez? Cadastre-se!</P>
            </Link>
            </Content>
    )





}
const P = styled.p`
width: 191px;
height: 18px;
font-family: 'Raleway';
font-style: normal;
font-weight: 700;
font-size: 15px;
line-height: 18px;
color: #FFFFFF;
`

const Button1= styled.button`
width: 334px;
height: 46px;
background: #A328D6;
color: white;
border-radius: 5px;
`
const Content = styled.div`
margin-top: 159px;
display: flex;
justify-content: center;
align-items: center;
flex-direction: column;
`

const Form1 = styled.form`
display:flex;
flex-direction:column;
`
const Text = styled.text`
width: 147px;
height: 50px;
font-family: 'Saira Stencil One';
font-style: normal;
font-weight: 400;
font-size: 32px;
line-height: 50px;
color: #FFFFFF;
`

const Input1 = styled.input`
margin-bottom: 10px;
width: 326px;
height: 58px;
background: #FFFFFF;
border-radius: 5px;
`
