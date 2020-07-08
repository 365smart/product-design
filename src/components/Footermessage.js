import React from 'react';
import styled from 'styled-components';
import { Div, Text } from './atoms';
import barcode from '../img/Icons/barcode.png';



const Container = styled(Div)`
background: ${props => props.bgColor ? props.bgColor : '#2555D9'};
display:flex;
height:120px;
justify-content:flex-start;
align-items: center;
width:100%;
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
    <Container {...props}>
      <Icon m="xs">
        <img src={barcode} alt="barcode" />
      </Icon>
      <Text color="white" fontWeight="heavy" m="xs" fontSize="xl">{props.message}</Text>
    </Container>
  );
}

export default Footernav;
