import React from 'react';
import styled from 'styled-components';
import { Div, Icon, Title } from '../atoms';
import PropTypes from 'prop-types';

const Container = styled(Div)`
  background-color: white;
  display: flex;
  width: 100vw;
  overflow: hidden;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;
  box-shadow: 0px 0px 64px 0px rgba(0,0,0,0.25);
`;

const IndicatorLeft = styled(Div)`
  display: flex;
  width: 80px;
  height: 80px;
  background-color: rgba(128,128,128,.5);
  border-radius: 50%;
  position: fixed;
  z-index: 1;
  left: -40px;
  justify-content: center;
  align-items: center;
  transform: rotate(90deg);
  padding-bottom: 16px;
`;

const IndicatorRight = styled(Div)`
  display: flex;
  width: 80px;
  height: 80px;
  background-color: rgba(128,128,128,.5);
  border-radius: 50%;
  position: fixed;
  z-index: 1;
  right: -40px;
  margin: auto;
  justify-content: center;
  align-items: center;
  transform: rotate(-90deg);
  padding-bottom: ${props => props.theme.space.xs};
`;

const SlideZone = styled(Div)`
  display: flex;
  justifyContent: flex-start;
  align-items: center;
  max-width: 100%;
  overflow: scroll;
  position: relative;
  padding: ${props => props.theme.space.xxs};
  padding-left: ${props => props.theme.space.sm};
  padding-right: ${props => props.theme.space.sm};
`;

function Slider(props) {
  return (
    <Container {...props}>
      <Title variant="mdHead" value={props.sliderMessage} />
      <SlideZone>
        <IndicatorLeft><Icon name="angle-down-white" variant="forControls" /></IndicatorLeft>
        {props.children}
        <IndicatorRight><Icon name="angle-down-white" variant="forControls" /></IndicatorRight>
      </SlideZone>
    </Container>
  );
}

Slider.propTypes = {
  /** Message that will appear above the slideset*/
  sliderMessage: PropTypes.string
}

export default Slider;
