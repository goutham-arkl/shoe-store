import { styled } from "styled-components"

const Container = styled.div`
    height: 30px;
    background-color:#BA0021 ;
    color:white;
    display: flex;
    align-items:center;
    justify-content:center;
    font-size:14px;
    font-weight:500;
`

const Announcement = () => {
  return (
    <Container>
        Free shipping on orders above Rs.4000
    </Container>
  )
}

export default Announcement