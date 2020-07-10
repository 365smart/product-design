import React from 'react';
import styled from 'styled-components';
import { Div, Button, Text } from './atoms';
import help from '../img/Icons/help.png';
import myaccount from '../img/Icons/myaccount.png';
import search from '../img/Icons/search.png';
import Buttonbig from './Buttonbig';


const Container = styled(Div)`
background-color:#22212D;
display:flex;
width:100%;
color:${props => props.theme.colors.white};
`;

const Navbutton = styled(Button)`
display:flex;
flex:1 1 auto;
flex-direction:column;
justify-content:space-between;
align-items:center;
height:224px;
border-right:2px solid #ffffff;
box-sizing:border-box;
background-color:transparent;
margin:0px;
border-radius:0px;
color:${props => props.theme.colors.white};
font-weight:${props => props.theme.fontWeights.heavy};
font-size:${props => props.theme.fontSizes.md};
padding:${props => props.theme.space.md};
&:last-child{
  border:none;
}
`;

const Buttonmessage = styled(Text)`
padding:0px;
font-size:${props => props.theme.fontSizes.md};
color:${props => props.theme.colors.white};
`;


const Icon = styled.img`

  object-fit: contain;
  height: 80px;
  width:80px;
  margin:${props => props.theme.space.xs};
`;


function Footernav(props) {
  return (
    <Container {...props} >
      <Navbutton>
        <Icon src={help} alt="help" />
       Help
      </Navbutton>
      <Navbutton>
        <Icon src={myaccount} alt="myaccount" />
       My Account
      </Navbutton>
      <Navbutton>
        <Icon src={search} alt="search" />
       Search
      </Navbutton>
      <Navbutton>
        <Buttonbig>
          {props.total}
          <Buttonmessage>
            {props.message}
          </Buttonmessage>
        </Buttonbig>
      </Navbutton>
    </Container>
  );
}

export default Footernav;
