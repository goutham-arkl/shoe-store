import { Add, Remove } from "@material-ui/icons";
import { createGlobalStyle, styled } from "styled-components"
import Footer from "../Components/Footer";
import Navbar from "../Components/Navbar";
import NewsLetter from "../Components/NewsLetter";
import { mobile } from "../responsive";
import {useLocation} from 'react-router-dom'
import { useEffect, useState } from "react";
import { publicRequest } from "../requestMethods";
import { addProduct } from "../redux/cartRedux";
import { useDispatch } from "react-redux";


const Container = styled.div`
`;
const Wrapper = styled.div`
    padding:50px;
    display:flex;
    ${mobile({flexDirection:'column',padding:'10px'})}
`;
const ImageContainer = styled.div`
    flex:1;
`;
const InfoContainer = styled.div`
    flex:1;
    padding:0 50px;
    ${mobile({padding:'10px'})}
`;
const Title = styled.span`
    font-weight:200;
`;
const Desc = styled.p`
    margin:20px 0px;

`;
const Price=styled.span`
    font-weight:100;
    font-size:30px;
`;
const Image = styled.img`
    width:100%;
    height: 70vh;
    object-fit:contain;
    ${mobile({ height:'40vh',})}
`;

const FilterContainer=styled.div`
    width:50%;
    margin:30px 0px;
    ${mobile({width:'100%'})}
`;
const Filter=styled.div`
    display: flex;
    align-items:center;
    gap:10px
`;
const FilterTitle=styled.span`
    font-size:20px;
    font-weight:200;
`;
const FilterFlavour=styled.select`
    padding:5px;
    outline:none;
`;
const FilterFlavourOption=styled.option``;

const AddContainer=styled.div`
    width:40%;
    display:flex;
    align-items:center;
    justify-content:space-between;
    ${mobile({width:'100%'})}
`;
const AmountContainer=styled.div`
    display:flex;
    align-items:center;
    font-weight:700;

`;
const Amount=styled.span`
    width:30px;
    height:30px;
    border-radius:10px;
    border:0.5px solid gray;
    display:flex;
    align-items:center;
    justify-content:center;
    margin:0px 5px;
`;
const Button=styled.button`
    padding:12px;
    background: transparent;
        color:black;
        border:1px solid black;
        font-weight:500;
        transition:all 0.4s ease;
    &:hover{
     background-color:#333 ;
     color:white;
     cursor:pointer;
    }
`;




const Product = () => {
    const location =useLocation();
    const id = location.pathname.split('/')[2]

    const [product,setProduct]=useState({})
  const [quantity,setQuantity]=useState(1)
  const [size,setSize]=useState('')
  const dispatch=useDispatch()


    useEffect(()=>{
        const getProduct =async()=>{
            try{
                const response =await publicRequest.get(`products/find/${id}`)


                setProduct(response.data)
            }catch(err){
                console.log(err)
            }
        }
        getProduct()    
    },[id])

    const handleQuantity=(type)=>{
        if(type==='dec'){
           quantity > 1 && setQuantity(quantity-1)
        }else{
            setQuantity(quantity+1)
        }
    }

    const handleClick=()=>{
       
        //updatecart
        dispatch(
            addProduct({...product, quantity, size})
            )

    }

  return (
    <Container>
        <Navbar/>
        <Wrapper>
            <ImageContainer>
                <Image src={product.image}/>
            </ImageContainer>
            <InfoContainer>
                <Title>{product.name}</Title>
                <Desc>{product.description}</Desc>
                <Price>${product.price} </Price>
                <FilterContainer>
                    <Filter>
                        <FilterTitle>size: </FilterTitle>
                        <FilterFlavour onChange={(e)=>{setSize(e.target.value)
                        }}>
                          <option disabled>--select--</option>
                          <option selected>6</option>
                          <option>7</option>
                          <option>8</option>
                          <option>9</option>
                          <option>10</option>

                        </FilterFlavour>

                    </Filter>
                </FilterContainer>
                <AddContainer>
                    <AmountContainer>
                        <Remove onClick={()=>handleQuantity('dec')}/>
                        <Amount>{quantity}</Amount>
                        <Add onClick={()=>handleQuantity('inc')}/>
                    </AmountContainer>
                    <Button onClick={handleClick}>ADD TO CART</Button>
                </AddContainer>
            </InfoContainer>
        </Wrapper>
        <NewsLetter/>
        <Footer/>
    </Container>
  )
}

export default Product