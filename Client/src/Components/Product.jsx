import { FavoriteBorderOutlined} from '@material-ui/icons';
import React from 'react'
import { Link } from 'react-router-dom';
import { styled } from 'styled-components';






const Image = styled.img`
   width: 300px;
    object-fit:contain;
    height: 75%;
    z-index:2;
`;
const Info = styled.div`
    opacity:1;
    width:100%;
    height:100%;
    position: absolute;
    top: 0;
    left:0;
    z-index:3;
    display: flex;
    justify-content:flex-end;
    transition: all 0.5s ease;
    cursor: pointer;
    &:hover ${Image}{
        transform: scale(1.1);
    }
`;
const Container=styled.div`
    
    margin:5px;
    min-width:280px;
    height:350px;
    display: flex;
    align-items:center;
    justify-content:center;
    background-color:white ;
    position: relative;

    &:hover ${Info}{
        opacity: 0.8;
        background:rgba(0,0,0,0.1);

    }

`;

const Icon = styled.div`
   margin:10px;
   width: 40px;
   height:40px;
   border-radius:50%;
   background-color:white ;
   display: flex;
   z-index: 5;
   align-items:center;
   justify-content:center;
   transition: all 0.5s ease;
   &:hover{
    background-color:#e9f5f5 ;
    transform:scale(1.1);
   }
`;
const Details=styled.div`
position: absolute;
bottom: 0;
left: 0;
display: flex;
flex-direction: column;
gap: 5px;
padding: 5px 20px;


`;
const Name=styled.span`
    font-size: 20px;
    color: #333;
    font-weight: 600;
`;
const Price=styled.span`
    font-size: 18px;
    font-weight: 400;
`;


const Product = ({item}) => {
    console.log(item)
  return (
    <Container>
    <Link style={{color:"black"}} to={`/product/${item._id}`}>
    <Image src={item.image} alt='image'/>
    <Info>

    <Details>
    <Name>{item.name}</Name>
    <Price>${item.price}</Price>
    </Details>
    </Info>
    </Link>
    </Container>
  )
}

export default Product