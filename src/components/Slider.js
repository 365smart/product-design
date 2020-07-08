import React from 'react';
import styled from 'styled-components';
import { Div, Text } from './atoms';
import Threesixfivedining from '../img/Diners/Logos/365Dining-black.png';
import Angelos from '../img/Diners/Logos/Angelos.png';
import Bellas from '../img/Diners/Logos/Bellas.png';
import Drinks from '../img/Diners/Logos/Drinks.png';
import Frutandvegi from '../img/Diners/Logos/Frutandvegi.png';
import Grillvalley from '../img/Diners/Logos/Grillvalley.png';
import Saffronbloom from '../img/Diners/Logos/Saffronbloom.png';
import Speckledplate from '../img/Diners/Logos/Speckledplate.png';
import Streetsiders from '../img/Diners/Logos/Streetsiders.png';
import Worldwalkcafe from '../img/Diners/Logos/Worldwalkcafe.png';
import Angledown from '../img/Icons/angle-down-white.png';

const Container = styled(Div)`
background-color:#ffffff;
display:flex;
width:100vw;
overflow:hidden;
flex-direction:column;
justify-content:flex-end;
align-items:center;
-webkit-box-shadow: 0px 0px 64px 0px rgba(0,0,0,0.25);
-moz-box-shadow: 0px 0px 64px 0px rgba(0,0,0,0.25);
box-shadow: 0px 0px 64px 0px rgba(0,0,0,0.25);
`;

const Slidezone = styled(Div)`
display:flex;
justify-content:flex-start;
align-items:center;
width:100vw;
width:100%;
overflow:scroll;
position:relative;
`;

const IndicatorLeft = styled(Div)`
display:flex;
width:80px;
height:80px;
background-color:rgba(128,128,128,.5);
border-radius:50%;
position:fixed;
z-index:1;
left:-40px;
justify-content:center;
align-items:center;
transform: rotate(90deg);
background-image: url(${Angledown});
background-size:65%;
background-position:50% 0%;;
background-repeat:no-repeat;
`;
const IndicatorRight = styled(Div)`
display:flex;
width:80px;
height:80px;
background-color:rgba(128,128,128,.5);
border-radius:50%;
position:fixed;
z-index:1;
right:-40px;
justify-content:center;
align-items:center;
background-image: url(${Angledown});
background-size:65%;
background-position:50% 0%;
transform: rotate(-90deg);
background-repeat:no-repeat;
`;

const Slide = styled(Div)`
display:flex;
flex: none;
width:328px;
height:160px;
background-color:#ffffff;
justify-content:center;
align-items:center;
border:1px solid rgba(128,128,128,.5);
border-radius:16px;
img{
  height:100%;
  width:100%;
  object-fit: contain;
}
`;



function Slider(props) {
  return (
    <Container {...props} color="white" >
      <Text fontSize="md" fontWeight="heavy" color="black">{props.message}</Text>
      <Slidezone p="xxs" pl="sm" pr="sm">
        <IndicatorLeft />
        <Slide m="xxs"><img src={Threesixfivedining} alt="Threesixfivedining" /></Slide>
        <Slide m="xxs"><img src={Angelos} alt="Angelos" /></Slide>
        <Slide m="xxs"><img src={Bellas} alt="Bellas" /></Slide>
        <Slide m="xxs"><img src={Drinks} alt="Drinks" /></Slide>
        <Slide m="xxs"><img src={Frutandvegi} alt="Frutandvegi" /></Slide>
        <Slide m="xxs"><img src={Grillvalley} alt="Grillvalley" /></Slide>
        <Slide m="xxs"><img src={Saffronbloom} alt="Saffronbloom" /></Slide>
        <Slide m="xxs"><img src={Speckledplate} alt="Speckledplate" /></Slide>
        <Slide m="xxs"><img src={Streetsiders} alt="Streetsiders" /></Slide>
        <Slide m="xxs"><img src={Worldwalkcafe} alt="Worldwalkcafe" /></Slide>
        <IndicatorRight />

      </Slidezone>
    </Container>
  );
}

export default Slider;
