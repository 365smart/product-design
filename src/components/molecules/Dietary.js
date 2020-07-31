import React from 'react';
import styled from 'styled-components';
import { Div, Icon, Text } from '../atoms';
import PropTypes from 'prop-types';




const CardContainer = styled(Div)`
display: flex;
width: 100%;
align-items:center;
justify-content:flex-start;
flex-wrap:wrap;
padding: ${props => props.theme.space.xs};
padding-top:0px;
`;
const DetailContainer = styled(Div)`
display: flex;
width: 100%;
align-items:center;
justify-content:center;
flex-wrap:wrap;
padding: ${props => props.theme.space.xs};
padding-top:0px;
`;

const Pill = styled(Div)`
display: flex;
height: ${props => props.theme.space.sm};
border-radius: ${props => props.theme.space.xs};
background-color: ${props => props.theme.colors.black};
color: ${props => props.theme.colors.white};
align-items: center;
justify-content:flex-start;  
margin: ${props => props.theme.space.xxxxs};
padding:${props => props.theme.space.xxs};
font-size: ${props => props.theme.fontSizes.xxs};
font-weight: ${props => props.theme.fontWeights.heavy};
`;
const PillMd = styled(Div)`
display: flex;
height: ${props => props.theme.space.md};
border-radius: ${props => props.theme.space.xs};
background-color: ${props => props.theme.colors.black};
color: ${props => props.theme.colors.white};
align-items: center;
justify-content:flex-start;  
margin: ${props => props.theme.space.xxxxs};
padding:${props => props.theme.space.xxs};
font-size: ${props => props.theme.fontSizes.xxs};
font-weight: ${props => props.theme.fontWeights.heavy};
line-height:1em;
`;
const Legend = styled(Div)`
display: flex;
flex-wrap: nowrap;
border-radius: ${props => props.theme.space.xs};
align-items: center;
justify-content:flex-start;  
margin: ${props => props.theme.space.xxs};
font-size: ${props => props.theme.fontSizes.md};
font-weight: ${props => props.theme.fontWeights.light};
`;




function Dietary(props) {
  const dietarySet = props.dietarySet;
  if (dietarySet === 'productCard') {
    return (
      <CardContainer {...props}>
        <Pill>{props.cal} CAL</Pill>
        <Icon variant="sm" name="golite" />
        <Icon variant="sm" name="nodairy" />
        <Icon variant="sm" name="nogluten" />
        <Icon variant="sm" name="peanut" />
        <Icon variant="sm" name="pork" />
      </CardContainer>
    );
  }
  if (dietarySet === 'productDetail') {
    return (
      <DetailContainer {...props}>
        <PillMd bg="black" color="white"><Text color="white" variant="md" pl="xxs" pr="xxs" >{props.cal} CAL</Text></PillMd>
        <Legend><Icon variant="md" name="golite" />Go Lite</Legend>
        <Legend> <Icon variant="md" name="nodairy" />No Dairy</Legend>
        <Legend> <Icon variant="md" name="nogluten" />No Gluten</Legend>
        <Legend> <Icon variant="md" name="peanut" />Contains Peanuts</Legend>
        <Legend> <Icon variant="md" name="pork" />Contains Pork</Legend>
      </DetailContainer>
    );
  }

}

Dietary.propTypes = {
  /** Product Base Calories */
  cal: PropTypes.string,
  /** Determines which mode the Dietary info is set to */
  dietarySet: PropTypes.string
}



export default Dietary;
