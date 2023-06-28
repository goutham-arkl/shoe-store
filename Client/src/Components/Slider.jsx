import { ArrowLeftOutlined, ArrowRightOutlined } from "@material-ui/icons"
import { useState } from "react"
import { styled } from "styled-components"
import {sliderData} from '../data'
import { mobile } from "../responsive";


const Container= styled.div`
    width:100%;
    height:80vh;
    display: flex;
    position: relative;
    overflow:hidden;
    margin-top: 10px;
  ${mobile({display:'none'})}

`;

const Arrow= styled.div`
    width: 50px;
    height:50px;
    background-color:white;
    border-radius:50%;
    display: flex;
    align-items:center;
    justify-content:center;
    position:absolute;
    top:0;
    bottom:0;
    left: ${props=> props.direction === 'left' && '10px'};
    right: ${props=> props.direction === 'right' && '10px'};
    margin: auto;
    cursor:pointer;
    opacity:0.5;
    z-index:2;
    &:hover{
        color: white;
        background-color: black;
        transform: scale(1.1);
    }
`;

const Wrapper=styled.div`
    height: 100%;
    display: flex;
    transform:translateX(${props=>props.sliderIndex * '-100'}vw);
    transition:all 1s ease;
`;

const Slide = styled.div`
    width:100vw;
    height: 80vh;
    display:flex;
    align-items:center;
    object-fit:cover;
`;
const Image= styled.img`
width: 100%;
height: 90vh;
object-fit: contain;
`;
const ImageContainer = styled.div`
    height:100%;
    flex:1;
`;

const Slider = () => {

    const [sliderIndex,setSliderIndex] = useState(0)
    const handleClick=(direction)=>{
        if(direction==="left"){
            setSliderIndex(sliderIndex >0 ? sliderIndex-1 : 2)
        }else{
            setSliderIndex(sliderIndex < 2 ? sliderIndex + 1 : 0)
        }

    }
  return (
    <Container>
        <Arrow direction='left' onClick={()=>handleClick('left')}>
            <ArrowLeftOutlined/>
        </Arrow>
            <Wrapper sliderIndex={sliderIndex}>
            {sliderData.map((item)=>(

                <Slide key={item.id}>
                <ImageContainer>
                <Image src={item.img}/>
                </ImageContainer>
                </Slide>
                ))}
                </Wrapper>
        <Arrow direction='right' onClick={()=>handleClick('right')}>
        <ArrowRightOutlined/>
    </Arrow>
    </Container>
  )
}

export default Slider