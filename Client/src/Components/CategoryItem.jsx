import { useNavigate } from "react-router-dom";
import { styled } from "styled-components"
import { mobile } from "../responsive";





const Container = styled.div`
    flex:1;
    margin:3px;
    height:80vh;
    display:flex;
    min-width:600px;
    align-items:center;
    justify-content:center;
    position: relative;
    ${mobile({height:'30vh',minWidth:'375px',margin:'0'})}
    
`;
const Image = styled.img`
    width:100%;
    height: 100%;
    object-fit:cover;
    &:hover{
        filter: grayscale(100%);
    }

`;
const Info = styled.div`
    position:absolute;
    bottom:0;
    left:0;
    width: 100%;
    height: 100%;
    visibility:visible;
    display: flex;
    flex-direction:column;
    align-items:center;
    justify-content:center;
    background-color:#333;
    opacity: 0;

    &:hover {
        opacity:0.8;
        transition: all 0.1s ease-in;
        
    }

`;
const Title = styled.h1`
    color:white;
    margin-bottm:10px;
    opacity: 1;
`;
const Button = styled.button`
    padding:10px;
    background-color:white;
    margin-top: 10px;
    font-color:gray;
    cursor: pointer;
    font-weight:600;
    border:none;
    opacity:1;
`;

const CategoryItem = ({item}) => {
    const navigate=useNavigate()

    const handleclick=()=>{
        const category=item.val.toLowerCase()
        navigate(`/products/${category}`)
    }
  return (
   <Container onClick={handleclick}>
     <Image src={item.img}/>
     <Info>
        <Title>{item.title}</Title>
        <Button>SHOP NOW</Button>
     </Info>
     </Container>
  )
}

export default CategoryItem