import styled from "styled-components"
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { useState } from "react";
import axios from "axios";

export default function Cadastro(){
    let navigate = useNavigate();

    const [registro, setRegistro] = useState({
        name:"",
        email:"",
        password:"",
        confirmpassword:""
    })
    function cadastrar(e) {
        setRegistro({
            ...registro,
            [e.target.name]:e.target.value
        })
    }

    function enviar(e){
        e.preventDefault()
        console.log(registro)
        if(registro.password === registro.confirmpassword){
            console.log("1")
            const request = axios.post("http://localhost:5001/registro",registro)
            request.then((element) => {
                console.log(element)
                console.log("TESTE")
                navigate("/")
            })
            request.catch((response)=>{
                console.log(response)

                alert(`Erro ${response}`);
            });
        }
        else{
            alert('senhas não coincidem');
        };
    }

    return(
        <>
        <Content>
            <Text>My Wallet</Text>
            <Form1 onSubmit={enviar} >
                <Input1 placeholder="   Nome" type="name" name="name" onChange={cadastrar} required />
                <Input1 placeholder="   E-mail" type="email" name="email" onChange={cadastrar} required />
                <Input1 placeholder="   Senha" type="password" name="password" onChange={cadastrar} required />
                <Input1 placeholder="   Confirme a senha" name="confirmpassword" type="password" onChange={cadastrar} required />
                <Button1  type="submit"  >Cadastrar  </Button1>
            </Form1>
            <Link to={"/login"} >
                <P>Ja tem uma conta? Entre agora!</P>
            </Link>
            </Content>
        
        </>
    )
}



const P = styled.p`
width: 211px;
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
