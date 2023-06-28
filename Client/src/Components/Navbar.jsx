import React, { useContext } from 'react'
import { Search,  ShoppingCartOutlined} from '@material-ui/icons'
import styled from 'styled-components'
import { Badge } from '@material-ui/core'
import {mobile} from '../responsive'
import {useSelector} from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'
import { AuthContext } from '../Context/UserContext'
import Swal from 'sweetalert2'


const Container = styled.div`
    height:100px;
    color: black;
    box-shadow: rgba(0, 0, 0, 0.18) 0px 2px 4px;
   ${mobile({height:"50px"})}
`;
const Wrapper = styled.div`
  padding:10px 80px;
  display:flex;
  align-items:center;
  justify-content:space-between;
  ${mobile({padding:"10px 0px"})}

`;

const Left = styled.div`
  flex: 1;
`;
const Logo= styled.img`
width: 90px;
  
  color: black;
  cursor:pointer;
  ${mobile({fontSize:"16px",marginLeft:'5px'})};

`;
const Center = styled.div`
  flex: 1;
`;
const Ol=styled.ol`
  display:flex;
  align-items:center;
  justify-content: space-between;
  list-style: none;
  padding: 5px ;
  margin-left:25px;
  ${mobile({display:"none"})}

`;

const Right = styled.div`
  text-align:right;
  flex: 1;
  display:flex;
  color: black;
  justify-content:flex-end;
  gap:30px;

  ${mobile({flex:1.5,justifyContent:'flex-start',gap:'10px'})}

`;
const MenuItems= styled.div`
  color: black;
    cursor:pointer;
    margin-left:25px;
  ${mobile({fontSize:'12px',marginLeft:'10px'})}

`;

const Navbar = () => {
  const navigate=useNavigate()
 const{currentUser,setCurrentUser}=useContext(AuthContext)
  const quantity =useSelector(state=>state.cart.quantity)

  const handleLogout = () => {
    Swal.fire({
      title: "Do you want to logout?",

      showCancelButton: true,
      confirmButtonText: "Yes",

      customClass: {
        actions: "my-actions",
        cancelButton: "order-1 right-gap",
        confirmButton: "order-2",
      },
    }).then((result) => {
      if (result.isConfirmed) {
        localStorage.removeItem("user");
        localStorage.removeItem("accessToken");
        setCurrentUser(false);
        navigate("/login");
      } else if (result.isDenied) {
      }
    });
  };
  return (
    <Container>
      <Wrapper>
        <Left>
        <Link style={{textDecoration:"none",color:"white"}} to={'/'}>
        <Logo src='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAPgAAADLCAMAAAB04a46AAAAe1BMVEX///8AAADf39/T09N8fHzw8PDPz8/7+/v4+Pjz8/O8vLyamprk5OS5ubkMDAylpaXq6upPT09kZGRYWFhvb2+Dg4OpqanJycmPj490dHTZ2dlAQECzs7NpaWklJSWioqIfHx80NDQVFRU6OjotLS2WlpZERESBgYESEhKLqKDUAAAECUlEQVR4nO3c63qiMBAG4AYRD2DF9YTWarXa9f6vcD2UipCEAJkkdL/3f5PMIzCTSZ6+vAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOGxgewFWROOFZ3sN5i397Ty2vQjTvN2EsYXtVRg2GPqMscnS9jrM6pw+L1EzP9I1YKBrIELx5s81aPYa9rWNuVtrG4pGfznf3qJmbyONwy6nGgfT7/Ypu/vT0TlwzNz9wbuj2TmNmmlOX73zXut4+gTJ50/Q7GPR0zz8xMmMGC2mLIMgfc0Z0/eV1OOeqjNWBJXpkDG3Pm3r09dz1DrT10N0GXlDMG49aarO0Jq+Mq7Z0Y1S/5Kqj/moNaevjNn1USIauwovnBSCZiwh+0k21+FnVKMruqTqV07UW+3p6yG+zTAmG1/BMtlzgqbefd3fKWsbPG835Qatc/fFNb/PYuXb1h2tBEGz1x1xXdH5nsh4+dILBM/31deQfP7D91TkEz3xxqLn+2pmYLuUVoUH+qlS3eHqIImaJV0DiwjS2Y4GJrtNmLzJgmb7DV36ytqaDDy31eKYmmp+JT9Tbolnumy1pM/31Zw2fWVEj0lJK9anVoLAYWzmGb/JVsZUc8i/3ymzDfJhdmqKT6mkPnlC0WGQedoU6E6dfVH9nXcOTZ91hk/za+1DZFrBJag6DBL93OOma9x4w91fcr3b6GjPc4vQMSa3fyJE12GQ6eaX0bh26OT7g1JHWz0+P7+SRl1Wb1HoD0oZK9EKCj84Y3U7erFi0nqweYch/4azeuX64Of8UtnWZIlW0Octya82Rq/aS31n+w7DmLuqk/oA4k6ZjOkSrUiQdBKlP44qfsm+mS/RigLR4iZlJXu8kbdPhN7ou2gKZuIF7sR/1R35H7WCNtNFU9CTLvLESzZx/aAvb5D9Z/xuWLLQt7CT7TZ7m5Vy9V306c4x7Mu7wnoPUz8Jd2HiV09ZWWQHnbU0CqUKO9sQoU75inU4Eh501hOWL7q5qYPXTGuVH9X8NdYproI6aqOd4go4O1KdbG9DxNaUYfvWtyFiZeVLfQfqw/xmNkRhT5zYhkjw9+JNrdzYhsjsCMIOTRzmN7XQHbWF05BaRnrDdmSrrUBrqX5yZautQF8B49JWW8W5PCQV705ttVUUTo/qMHIpS7Nl46jb9oynGobtVjupikadCMfaSZVwT86U7Fv6jKdqVq3t+44XlF+4K2rjd7wgrhp1W+rxUsJjQ6721OPl1JP5oRV7TnWe2nmY832VGhTu7Ji7SW3UWn6dY/ULf+xUlPDvN3zMfv9/0/EWs2xW3078cdCi7kJDg2gdBME6+n8iBgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAPhd/gFHyi8u+kmPywAAAABJRU5ErkJggg=='/>
        </Link>
        </Left>
         <Center>
          <Ol>
            <Link style={{color:'black',textDecoration:"none"}} to={'/products/men'}><li>MEN</li></Link>
            <Link style={{color:'black',textDecoration:"none"}} to={'/products/women'}><li>WOMEN</li></Link>
            <Link style={{color:'black',textDecoration:"none"}} to={'/products/kids'}><li>KIDS</li></Link>
            
          </Ol>
        </Center> 

        <Right>
        {!currentUser && <Link to={'/register'} style={{textDecoration:"none",color:"white"}}>
        <MenuItems>REGISTER</MenuItems>
        </Link>}
       { !currentUser && <Link to={'/login'} style={{textDecoration:"none",color:"white"}}>
          <MenuItems>LOGIN</MenuItems>
        </Link>}
        {currentUser &&<MenuItems onClick={handleLogout}>LOGOUT</MenuItems>}


          <Link to={'/cart'}  style={{textDecoration:"none",color:"white"}}>
          <MenuItems>
          MY CART ({quantity})
          </MenuItems>
          </Link>
        </Right>
      </Wrapper>
    </Container>
  )
}

export default Navbar