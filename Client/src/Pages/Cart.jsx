import { styled } from 'styled-components';
import Navbar from '../Components/Navbar';
import Announcement from '../Components/Announcement';
import Footer from '../Components/Footer';
import { Add, Remove } from '@material-ui/icons';
import { mobile } from '../responsive';
import { useSelector } from 'react-redux';

const Container =styled.div`
  
`;

const Wrapper =styled.div`
    padding:20px;
    min-height:59.1vh;
    ${mobile({padding:'10px'})}
`;

const Title =styled.h1`
    font-weight:400;
    text-align:center;
`;

const Top =styled.div`
    display:flex;
    align-items:center;
    justify-content:space-between;
    margin :20px 20px;
`;

const TopButton= styled.button`
    padding:10px;
    font-weight:600;
    cursor:pointer;
    background-color:${props=>props.type === 'filled' ? 'black':'transparent'};
    color:${props=>props.type === 'filled' &&'white'};


`;
const TopTexts=styled.div`
    ${mobile({display:'none'})}
`;
const TopText=styled.span`
    text-decoration:underline;
    cursr:pointer;
    margin: 0 10px;
`;


const Bottom =styled.div`
    display:flex;
    justify-content:space-between;
    ${mobile({flexDirection:'column'})}
`;

const Info =styled.div`
    flex:3;
`;
const Product = styled.div`
    display: flex;
    justify-content:space-between;
    margin:30px 50px;
    ${mobile({flexDirection:'column'})}
`;
const ProductDetail = styled.div`
    flex:2;
    display: flex;
    gap:30px;
`;
const Details=styled.div`
    padding:20px;
    display: flex;
    flex-direction:column;
    justify-content:space-around;
    ${mobile({width:'100%',padding:'0'})}
`;
const Image = styled.img`
    width:200px;
    object-fit:contain;
    ${mobile({width:'150px'})}
`;
const ProductName = styled.div`
    
`;

const ProductId =styled.span`
 

`;
const ProductFlavour =styled.span``
;
const PriceDetail=styled.div`
    display:flex;
    flex-direction:column;
    align-items:center;
    justify-content:center;
    flex:1;
    ${mobile({margin:'20px 0px 0px 40px'})} //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
`;

const ProductAmountContainer=styled.div`
    display:flex;
    align-items:center;
    margin-bottom:20px;
`;
const ProductAmount=styled.div`
 font-size:24px;
 margin:5px;
 ${mobile({margin:'5px 15px',fontSize:'20px'})}
`;
const ProductPrice=styled.div`
    font-size:30px;
    font-weight:200;
    ${mobile({marginBottom:'20px',fontSize:'25px'})}
`;
const Hr = styled.hr`
    background-color:#eee;
    border:none;
    height:1px;
    margin: 0px 30px;

`;
const Summary =styled.span`
    flex:1;
    border:0.5px solid lightgray;
    border-radius:10px;
    padding:20px;
    height:40vh;
`;

const SummaryTitle=styled.h1`
    font-weight:200;
`;
const SummaryItem=styled.div`
    margin:30px 0;
    display:flex;
    justify-content:space-between;
    font-weight:${props=>props.type === 'total' && '400'};
    font-size:${props=>props.type === 'total' && '24px'};

`;
const SummaryItemText=styled.span``;
const SummaryItemPrice=styled.span``;
const Button=styled.button`
    width:100%;
    padding:10px;
    background-color:#333;
    color:white;
    font-weight:600;
`;



const Cart = () => {
    const cart=useSelector(state=>state.cart)
    console.log(cart.products)
  return (
    <Container>
        <Navbar/>
        <Wrapper>
            <Title>YOUR CART</Title>
            <Top>
                <TopButton>CONTINUE SHOPPING</TopButton>
                <TopTexts>
                    <TopText>Shopping Bag(2)</TopText>
                    <TopText>Wishlist</TopText>
                </TopTexts>
                <TopButton type='filled'>CHECKOUT NOW</TopButton>
                
            </Top>
            <Bottom>
                <Info>
                {cart.products.map(product=>(

                    <Product>
                    <ProductDetail>
                    <Image src={product.image}/>
                    <Details>
                    <ProductName><b>Product: </b> {product.name}</ProductName>
                            <ProductId><b>ID: </b> {product._id}</ProductId>
                            <ProductId><b>Size: </b> {product.size}</ProductId>

                        </Details>
                    </ProductDetail>
                    <PriceDetail>
                        <ProductAmountContainer>
                        <Remove/>
                        <ProductAmount>{product.quantity}</ProductAmount>
                        <Add/>
                        </ProductAmountContainer>
                        <ProductPrice>${product.price * product.quantity}</ProductPrice>
                    </PriceDetail>
                    
                    </Product>
                    ))}
                
                <Hr/>
            
                </Info>
                <Summary>
                    <SummaryTitle>ORDER SUMMARY</SummaryTitle>
                    <SummaryItem>
                        <SummaryItemText>Subtotal : </SummaryItemText>
                        <SummaryItemPrice>$20 </SummaryItemPrice>
                    </SummaryItem>
                    <SummaryItem>
                        <SummaryItemText>Estimated Shipping : </SummaryItemText>
                        <SummaryItemPrice>$10 </SummaryItemPrice>
                    </SummaryItem>
                    <SummaryItem>
                        <SummaryItemText>Discount : </SummaryItemText>
                        <SummaryItemPrice>$-20 </SummaryItemPrice>
                    </SummaryItem>
                    <SummaryItem type='total'>
                    <SummaryItemText>Total : </SummaryItemText>
                    <SummaryItemPrice>${cart.total} </SummaryItemPrice>
                    </SummaryItem>
                    <Button>CHECKOUT NOW</Button>
                </Summary>
            </Bottom>
        </Wrapper>
        <Footer/>
    </Container>
  )
}

export default Cart