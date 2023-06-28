import React, { useState } from 'react'
import { styled } from 'styled-components'
import { mobile } from '../responsive';
import axios from 'axios';
import Swal from 'sweetalert2';
import {useNavigate} from 'react-router-dom'


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
    width:40%;
    padding:20px;
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
    flex-wrap:wrap;
    ${mobile({alignItems:'center',justifyContent:'center'})}
`;

const Input=styled.input`
    flex:1;
    min-width:40%;
    margin:20px 10px 0 0;
    padding:10px;
    outline:none;
     ${mobile({width:'80%',padding:'20px',fontSize:'14px'})}
`;

const Agreement=styled.span`
    font-size:12px;
    margin:20px 0;
    ${mobile({width:'80%'})}
`;

const Button=styled.button`
    width:40%;
    border:none;
    padding:15px 20px;
    background-color:#333;
    color:white;
    cursor:pointer;
    ${mobile({width:'80%'})}
`;


const Register = () => {

    const [username,setUsername]=useState('')
    const [email,setEmail]=useState('')
    const [password,setPassword]=useState('')

    const [err,setErr]=useState(false)
    const navigate=useNavigate()



    const handleRegister = async (e) => {
      e.preventDefault();
      setErr(false);
      const obj = {
        username: username,
        email: email,
        password: password,
      };
    
      if (Object.values(obj).every((value) => value !== "")) {
        try {
          const res = await axios.post("http://localhost:5000/api/auth/register", obj, {
            headers: {
              "Content-Type": "application/json",
            },
          });

          if(res.data){
            navigate('/login')
          }
          
        } catch (err) {
          Swal.fire({
            title: "Oops!",
            text: "Something went wrong",
            icon: "error",
            confirmButtonColor: "#3085d6",
            confirmButtonText: "Try Again",
          });
        }
      } else {
        setErr(true);
      }
    };
    
  return (
    <Container>
        <Wrapper>
            <Title>CREATE AN ACCOUNT</Title>
            <Form>
           
                <Input placeholder="Username" onChange={(e)=>setUsername(e.target.value)}/>
                <Input placeholder="Email" onChange={(e)=>setEmail(e.target.value)}/>
                <Input placeholder="Password" type='password' onChange={(e)=>setPassword(e.target.value)}/>
                <Input placeholder="Confirm Password" type='password' onChange={(e)=>{
                  password !== e.target.value ? setErr(true) : setErr(false)
                } }/>
                {err && <span style={{color:"red"}}>passwords does not match</span>}
                <Agreement>
                    By creating an account, I consent to the processing of my personal
                    data in accordance with the <b>PRIVACY POLICY</b>
                </Agreement>
                <Button onClick={handleRegister}>CREATE</Button>
            </Form>
        </Wrapper>
    </Container>
  )
}

export default Register