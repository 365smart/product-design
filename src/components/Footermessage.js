import React from 'react';
import styled from 'styled-components';
import { Div, Text } from './atoms';
import barcode from '../img/Icons/barcode.png';



const Container = styled(Div)`
background-color: ${props => props.bgColor ? props.bgColor : props.theme.colors.primary};
display:flex;
height:120px;
justify-content:flex-start;
align-items: center;
width:100%;
`;

const Icon = styled.img`
  object-fit: contain;
  height: 80px;
  width:80px;
  margin: ${props => props.theme.space.xs};
`;

const Message = styled(Text)`
  color: ${props => props.theme.colors.white};
  font-weight: ${props => props.theme.fontWeights.heavy};
  margin: ${props => props.theme.space.xs};
  font-size: ${props => props.theme.fontSizes.xl};

`;


function Footermessage(props) {
  return (
    <Container {...props}>
      <Icon src={barcode} alt="barcode" />
      <Message>{props.message}</Message>
    </Container>
  );
}

export default Footermessage;
