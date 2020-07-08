import React from 'react';
import styled from 'styled-components';
import { Div, Text } from './atoms';
import help from '../img/Icons/help.png';
import myaccount from '../img/Icons/myaccount.png';
import search from '../img/Icons/search.png';


const Container = styled(Div)`
background-color:#22212D;
display:flex;
width:100%;
`;


const Navbutton = styled(Div)`
display:flex;
flex:1 1 auto;
flex-direction:column;
justify-content:space-between;
align-items:center;
height:224px;
border-right:2px solid #ffffff;
box-sizing:border-box;
&:last-child{
  border:none;
}
`;
const Icon = styled(Div)`
img{
  object-fit: contain;
  height: 80px;
  width:80px;
}
`;


function Footernav(props) {
  return (
    <Container {...props} color="white">
      <Navbutton p="md">
        <Icon m="xs">
          <img src={help} alt="help" />
        </Icon>
        <Text fontSize="md" fontWeight="heavy">Help</Text>
      </Navbutton>
      <Navbutton p="md">
        <Icon m="xs">
          <img src={myaccount} alt="myaccount" />
        </Icon>
        <Text fontSize="md" fontWeight="heavy">My Account</Text>
      </Navbutton>
      <Navbutton p="md">
        <Icon m="xs">
          <img src={search} alt="search" />
        </Icon>
        <Text fontSize="md" fontWeight="heavy">Search</Text>
      </Navbutton>
    </Container>
  );
}

export default Footernav;
