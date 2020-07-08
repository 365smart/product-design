import React from 'react';
import styled from 'styled-components';

const StyledButton = styled.button`
  height:64px;
  width:64px;
  border-radius: 50%;
  border: none;
  outline: none;
  margin: 8px;
  padding:0px;
  background-color: ${props => props.bgColor ? props.bgColor : '#2555D9'};
  &:active {
    opacity: .85
  }
`;

function Buttoncontrol(props) {
  return (
    <StyledButton {...props}>
    </StyledButton>
  );
}




export default Buttoncontrol;
