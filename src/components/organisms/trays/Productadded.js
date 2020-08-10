
import React from 'react';
import styled from 'styled-components';
import { Div, Button, Icon } from '../../atoms';


const StyledDiv = styled(Div)`
  display:flex;
  flex-direction:column;
  align-items:center;
  width:100%;
  padding:${props => props.theme.space.sm};
  background-color: ${props => props.theme.colors.primary};
  color: ${props => props.theme.colors.white};
`;
const Title = styled(Div)`
  display: flex;
  width: 100%;
  font-size: ${props => props.theme.fontSizes.xxl};
  font-weight: ${props => props.theme.fontWeights.heavy};
  margin: 0px;
  line-height: normal;
  justify-content: center;
`;
const Subtitle = styled(Div)`
  display: flex;
  width: 100%;
  font-size: ${props => props.theme.fontSizes.lg};
  font-weight: ${props => props.theme.fontWeights.heavy};
  margin: 0px;
  line-height: normal;
  justify-content: center;
`;
const Buttontile = styled(Button)`
  flex-direction:column;
  align-items:center;
  justify-content:space-between;
  border:3px solid #ffffff;
  border-radius:${props => props.theme.radii.lg};
`;
function Productadded(props) {
  return (
    <StyledDiv {...props} onClick={props.onClose} >
      {props.children}
      <Subtitle color="white">Placing in your cart</Subtitle>
      <Title color="white" >${props.addAmount.toFixed(2)}</Title>
      <Title color="white" >{props.productName}</Title>
      <Buttontile icons={<Icon name="startover" />} label="Remove It" onClick={props.removeIt} />
    </StyledDiv>
  );
}

Productadded.propTypes = {
  /** Image type */
  // variant: PropTypes.string,
}

export default Productadded;
