import React from 'react';
import styled from 'styled-components';
import { Div, Icon, Title } from '../atoms';
import { Slide } from '../molecules';
import PropTypes from 'prop-types';


import {
  color,
  layout,
  space,
  flexbox,
  border,
  typography,
} from 'styled-system';
const Container = styled(Div)(
  {
    backgroundColor: 'white',
    display: 'flex',
    width: '100vw',
    overflow: 'hidden',
    flexDirection: 'column',
    justifyContent: 'flex-end',
    alignItems: 'center',
    webkitBoxShadow: '0px 0px 64px 0px rgba(0,0,0,0.25)',
    mozBoxShadow: '0px 0px 64px 0px rgba(0,0,0,0.25)',
    boxShadow: '0px 0px 64px 0px rgba(0,0,0,0.25)',
  },
  color,
  layout,
  space,
  flexbox,
  border,
  typography
);
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
padding-bottom:16px;
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
transform: rotate(-90deg);
padding-bottom:${props => props.theme.space.xs};
`;
const SlideZone = styled(Div)`
display: flex;
justifyC-content: flex-start;
align-items: center;
max-width: 100%;
overflow: scroll;
position: relative;
padding: ${props => props.theme.space.xxs};
padding-left: ${props => props.theme.space.sm};
padding-right: ${props => props.theme.space.sm};
`;


function Splash(props) {
  return (
    <Container {...props}>
      <Title variant="mdHead" value={props.sliderMessage} />
      <SlideZone>
        <IndicatorLeft><Icon name="angle-down-white" variant="forControls" /></IndicatorLeft>
        <Slide variant="contain" name="Bellas" location="Diners/Logos" fileType="png" />
        <Slide variant="contain" name="365Dining-black" location="Diners/Logos" fileType="png" />
        <Slide variant="contain" name="Angelos" location="Diners/Logos" fileType="png" />
        <Slide variant="contain" name="Drinks" location="Diners/Logos" fileType="png" />
        <Slide variant="contain" name="Frutandvegi" location="Diners/Logos" fileType="png" />
        <Slide variant="contain" name="Grillvalley" location="Diners/Logos" fileType="png" />
        <Slide variant="contain" name="Saffronbloom" location="Diners/Logos" fileType="png" />
        <Slide variant="contain" name="Speckledplate" location="Diners/Logos" fileType="png" />
        <Slide variant="contain" name="Streetsiders" location="Diners/Logos" fileType="png" />
        <Slide variant="contain" name="Worldwalkcafe" location="Diners/Logos" fileType="png" />';
        <IndicatorRight><Icon name="angle-down-white" variant="forControls" /></IndicatorRight>
      </SlideZone>
    </Container>
  );
}

Splash.propTypes = {
  /** Message that will appear above the slideset*/
  sliderMessage: PropTypes.string
}

export default Splash;
