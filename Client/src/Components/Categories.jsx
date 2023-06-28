import React from 'react'
import { styled } from 'styled-components'
import { categories } from '../data';
import { mobile } from '../responsive';
import CategoryItem from './CategoryItem';

const Container = styled.div`
background-color:#efefef;
  display: flex;
  flex-wrap:wrap;
  padding: 20px;
  justify-content:space-evenly;
  ${mobile({padding:'0'})}

`;

const Categories = () => {
  return (
    <Container>
        {categories.map(item=>(
            <CategoryItem item ={item} key={item.id}/>
        ))}
    </Container>
  )
}

export default Categories