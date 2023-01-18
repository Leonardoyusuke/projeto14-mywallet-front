import styled from "styled-components"
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { useState } from "react";

export default function Cadastro(){
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [password2, setPassword2] = useState("")
    const [name, setName] = useState("")
    return(
        <>
        <Content>
            <Text>My Wallet</Text>
            <Form1 >
                <Input1 placeholder="   Nome" type="name" onChange={e => setName(e.target.value)} required />
                <Input1 placeholder="   E-mail" type="email" onChange={e => setEmail(e.target.value)} required />
                <Input1 placeholder="   Senha" type="password" onChange={e => setPassword(e.target.value)} required />
                <Input1 placeholder="   Confirme a senha" type="password" onChange={e => setPassword2(e.target.value)} required />

                <Button1  type="submit"  >Cadastrar  </Button1>
            </Form1>
            
                <P >Ja tem uma conta? Entre agora!</P>

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
