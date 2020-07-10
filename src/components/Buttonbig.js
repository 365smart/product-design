import React from 'react';
import styled from 'styled-components';

const StyledButton = styled.button`
border-radius: ${props => props.theme.radii.lg};
background-color: ${props => props.bgColor ? props.bgColor : props.theme.colors.primary};
min-height: 160px;
font-size: ${props => props.theme.fontSizes.xxl};
font-weight: ${props => props.theme.fontWeights.heavy};
color:${props => props.theme.colors.white};
padding: ${props => props.theme.space.md};
`;

function Buttoncontrol(props) {
  return (
    <StyledButton {...props}>
    </StyledButton>
  );
}




export default Buttoncontrol;
