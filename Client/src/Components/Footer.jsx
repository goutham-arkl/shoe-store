import { Facebook, Instagram, MailOutlined, Phone, Pinterest, Room, Twitter } from "@material-ui/icons";
import { styled } from "styled-components";
import { mobile } from "../responsive";

const Container = styled.div`
   color: white;
    background-color: #333;
    display: flex;
  ${mobile({flexDirection:'column'})}

`;
const Left = styled.div`
    flex:1;
    display:flex;
    flex-direction:column;
    padding:20px;
    margin-left:250px;
  ${mobile({backgroundColor:'#eee' ,color:'#333',marginLeft:'0'})}

`;
const Logo= styled.h1`
`;
const Desc= styled.p`
    margin:20px 0px;
`;
const SocialContainer= styled.div`
    display: flex;
`;
const SocialIcon= styled.div`
    width:40px;
    height:40px;
    display: flex;
    align-items:center;
    justify-content:center;
    border-radius:50%;
    color:white;
    background-color:#${props=>props.color};
    margin-right:20px;
    cursor:pointer;
`;
const Center = styled.div`
    flex:1;
    padding:20px;
  ${mobile({display:'none'})}

`;
const Title= styled.h3`
    margin-bottom:30px;

`;
const List= styled.ul`
    margin:0;
    padding:0;
    list-style:none;
    display: flex;
    flex-wrap:wrap;
`;
const ListItem= styled.li`
    width:50%;
    margin-bottom:10px;
`;

const Right = styled.div`
    padding:20px;
    flex:1;
`;
const ContactItem=styled.div`
    display: flex;
    align-items:center;
    margin-bottom: 20px ;
    gap:10px;
`;
const Payment=styled.img`
    width: 40%;
`;



const Footer = () => {
  return (
    <Container>
        <Left>
            <Logo>Nike</Logo>
            <Desc>
                  Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                  when an unknown printer took a galley of type and scrambled it to make a type specimen book.
            </Desc>
            <SocialContainer>
                <SocialIcon color="3B5999">
                    <Facebook/>
                </SocialIcon>
                <SocialIcon color="55ACEE">
                    <Twitter/>
                </SocialIcon>
                <SocialIcon color="E60023">
                    <Pinterest/>
                </SocialIcon>
                <SocialIcon color="E4405F">
                    <Instagram/>
                </SocialIcon>
            </SocialContainer>
        </Left>
        <Center>
            <Title>Useful Links</Title>
            <List>
            <ListItem>Home</ListItem>
            <ListItem>Cart</ListItem>
            <ListItem>Wishlist</ListItem>
            <ListItem>About Us</ListItem>
            <ListItem>Products</ListItem>
            <ListItem>Terms and Conditions</ListItem>


            </List>
        </Center>
        <Right>
            <Title>Contact</Title>
            <ContactItem>
              <Room/> 386 Duxie Path , sdc street
            </ContactItem>
            <ContactItem>
                <Phone/> +91 232434213
            </ContactItem>
            <ContactItem>
                <MailOutlined/> nike@gmail.com
            </ContactItem>
            <Payment src='http://i.ibb.co/Qfvn4z6/payment.png'/>
        </Right>
    </Container>
  )
}

export default Footer