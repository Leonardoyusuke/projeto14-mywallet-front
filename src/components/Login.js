import styled from "styled-components"
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { useState, useContext } from "react";
import Context from "./Context";
import axios from "axios";

export default function Login({username,setUsername}){
    const [login, setLogin] = useState({
        email:"",
        password:""
    })
    const {id,setId} = useContext(Context)
    const navigate = useNavigate()
    const { config, setConfig } = useContext(Context);


    function logar(e){
        setLogin({
            ...login,
            [e.target.name]:e.target.value
        })
    }

    function login1(e) {
        e.preventDefault()
        const request = axios.post("http://localhost:5001/login",login)
        request.then((element) => {
            const response = element.data
            setId(response.id)
            console.log(id)
            console.log("entrou2")
            setConfig({headers:{...config, Authorization: `Bearer ${response.token}`}});
            //localStorage.setItem("UserAuth", `${response.token}`);
            setUsername({...username, name:response.name});
            console.log(response);
            navigate("/home")})
        request.catch((response)=>{
            console.log(response)
            alert(`Erro ${response}`);
        });    
    }


    return(
            <Content>
            <Text>My Wallet</Text>
            <Form1 onSubmit={login1}>
                <Input1 placeholder="   E-mail" type="email" name="email" onChange={logar} required />
                <Input1 placeholder="   Senha" type="password" name="password" onChange={logar} required />
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
