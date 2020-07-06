import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const StyledButton = styled.button`
  padding: 8px 16px;
  color: white;
  font-size: 14px;
  border: none;
  outline: none;
  border-radius: 8px;
  margin: 16px;
  background: ${props => props.bgColor ? props.bgColor : '#2555D9'};
  &:active {
    opacity: .85
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

Button.propTypes = {
  label: PropTypes.string,
  bgColor: PropTypes.string,
}

export default Button;
