import { useState } from "react";
import { useLocation } from "react-router-dom";
import { styled } from "styled-components"
import Announcement from "../Components/Announcement";
import Footer from "../Components/Footer";
import Navbar from "../Components/Navbar";
import Products from "../Components/Products";
import { mobile } from "../responsive";

const Container= styled.div`
min-height: 100vh;
display: flex;
flex-direction: column;
justify-content: space-between;
`;
const Title= styled.h1`
  margin:20px;
`;
const FilterContainer= styled.div`
  display:flex;
  min-height: 13vh;
  justify-content:space-between;
`;
const Filter= styled.div`
  margin:20px;
  ${mobile({margin:'0px 20px',display:'flex',flexDirection:'column'})}
`;
const FilterText=styled.span`
  font-size:20px;
  font-weight:600;
  margin-right:20px;
  ${mobile({marginRight:'0px'})}
`;

const Select = styled.select`
  padding: 10px;
  margin-right:20px;
  outline:none;
  ${mobile({margin:'10px 0px'})}
`;
const Option = styled.option`
`;


const ProductList = () => {

  const location =useLocation();
  const cat =location.pathname.split('/')[2]
  const [filters,setFilter]=useState({})
  const [sort,setSort]=useState('newest')


  const handleFilters=(e)=>{
      const value=e.target.value;
      setFilter({
        ...filters,
        [e.target.name]:value
      })
      
    }
  return (
    <Container>
      <Navbar/>
      <Title>{cat} shoes</Title>
      <FilterContainer>
        <Filter>
          <FilterText>
            Filter Products:
          </FilterText>
          <Select name="color"  onChange={handleFilters}>
            <Option disabled  >
              Color
            </Option>
            <Option >White</Option>
            <Option>Black</Option>
            <Option>Red</Option>
            <Option>Blue</Option>
            <Option>Yellow</Option>
            <Option>Green</Option>

          </Select>
          <Select name="brand" onChange={handleFilters}>
          <Option disabled selected >
            Brand
          </Option>
          <Option>Puma</Option>
          <Option>Nike</Option>
  

        </Select>
        </Filter>
        <Filter>
        <FilterText>Sort Products:</FilterText>
        <Select onChange={(e)=>{setSort(e.target.value)}}>
        <Option value='newest'>Newest</Option>
        <Option value='asc'>Price (asc)</Option>
        <Option value='desc'>Price (desc)</Option>
        </Select>
        </Filter>
      </FilterContainer>
      <Products cat={cat} filters={filters} sort ={sort}/>
      <Footer/>
    </Container>
  )
}

export default ProductList