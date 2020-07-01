import React from 'react';
import styled from 'styled-components';

const StyledButton = styled.button`
  padding: 8px 16px;
  color: white;
  font-size: 14px;
  border: none;
  outline: none;
  border-radius: 8px;
  margin: 16px;
  background: ${props => props.bgColor ? props.bgColor : 'hotpink'};
  &:active {
    background: deeppink;
  }
`;

function Button(props) {
  return (
    <StyledButton {...props}>
      {props.children}
      {props.label}
    </StyledButton>
  );
}

export default Button;
