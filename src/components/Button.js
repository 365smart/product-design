import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const StyledButton = styled.button`
  padding: ${props => props.theme.space.xxs} ${props => props.theme.space.xs};
  color: ${props => props.theme.colors.white};
  font-size: ${props => props.theme.fontSizes.xs};
  border: none;
  outline: none;
  border-radius: ${props => props.theme.radii.md};
  margin: ${props => props.theme.space.xs};
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
  /** label/text */
  label: PropTypes.string,
  /** background color */
  bgColor: PropTypes.string,
}


export default Button;
