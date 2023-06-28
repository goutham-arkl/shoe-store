import { styled } from 'styled-components';
import { mobile } from '../responsive';
import { useContext, useState } from 'react';
import { AuthContext } from '../Context/UserContext';
import {Link } from 'react-router-dom'

const Container=styled.div`
    width:100vw;
    height:100vh;
    display:flex;
    align-items:center;
    justify-content:center;
    background-image: url('https://images.pexels.com/photos/4724516/pexels-photo-4724516.jpeg?auto=compress&cs=tinysrgb&w=1600');
    background-repeat: no-repeat;
    background-size: cover;
    
    
`;

const Wrapper=styled.div`
    width:20%;
    padding:20px;
    background-color:white;
    background-color:rgba(255,255,255,0.6);

  ${mobile({width:'90%'})}


`;

const Title=styled.h1`
    font-size:24px;
    font-weight:300;
  ${mobile({textAlign:'center'})}

`;

const Form=styled.form`
    display:flex;
    flex-direction:column;
  ${mobile({alignItems:'center',justifyContent:'center'})}

`;

const Input=styled.input`
    flex:1;
    min-width:40%;
    margin:10px 0 ;
    padding:10px;
    outline:none;
  ${mobile({width:'80%',padding:'20px',fontSize:'14px'})}

`;


const Button=styled.button`
    width:40%;
    border:none;
    padding:15px 20px;
    background-color:#333;
    color:white;
    cursor:pointer;
    margin-bottom:10px ;
    &::disabled{
      color: green;
      cursor: not-allowed;
    }
  ${mobile({width:'80%'})}

`;

const Error=styled.span`
  color: red;
`;

const Links= styled.a`
    margin:5px 0;
    font-size:12px;
    text-decoration:underline;
    cursor:pointer;
`;
const Login = () => {
  const [username,setUsername]=useState('')
  const [password,setPassword]=useState('')
  const {login}=useContext(AuthContext)

  const handleLogin=(e)=>{
    e.preventDefault()
    login({username,password})
  }

  return (
    <Container>
    <Wrapper>
        <Title>SIGN IN</Title>
        <Form>
            <Input 
              placeholder="username" 
              onChange={(e)=>setUsername(e.target.value)}
              />
            <Input 
              type='password' 
              placeholder="Password" 
              onChange={(e)=>setPassword(e.target.value)}
              />
            <Button onClick={handleLogin}>LOGIN</Button>
           <Link style={{color:'black'}} to={'/register'}>
           <Links>CREATE NEW ACCOUNT</Links>
           </Link> 
        </Form>
    </Wrapper>
</Container>
  )
}

export default Login