import React from 'react';
import styled from 'styled-components';
import { Div, Icon } from '../atoms';
import PropTypes from 'prop-types';


const Container = styled(Div)`
display: flex;
width: 100%;
align-items:center;
flex-wrap:wrap;
padding: ${props => props.theme.space.xs};
padding-top:0px;
`;

const Calories = styled(Div)`
display: flex;
height: ${props => props.theme.space.sm};
border-radius: ${props => props.theme.space.xs};
align-items: center;
background-color: ${props => props.theme.colors.black};
color: ${props => props.theme.colors.white};
margin: ${props => props.theme.space.xxxxs};
font-size: ${props => props.theme.fontSizes.xxs};
padding: ${props => props.theme.space.xxs};
font-weight: ${props => props.theme.fontWeights.heavy};
`;



function Dietary(props) {
  return (
    <Container {...props}>
      <Calories>{props.cal} CAL</Calories>
      <Icon variant="sm" name="golite" />
      <Icon variant="sm" name="nodairy" />
      <Icon variant="sm" name="nogluten" />
      <Icon variant="sm" name="peanut" />
      <Icon variant="sm" name="pork" />
    </Container>
  );
}

Dietary.propTypes = {
  /** Product Base Calories */
  cal: PropTypes.string
}



export default Dietary;
