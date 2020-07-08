import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { variant } from 'styled-system';
import {
  color,
  layout,
  space,
  flexbox,
  border,
  typography
} from 'styled-system';

const StyledButton = styled.button`
  ${color}
  ${layout}
  ${space}
  ${flexbox}
  ${border}
  ${typography}
  border: none;
  outline: none;
  &:active {
    opacity: .85
  },
  variant({
    variants: {
      primary: {
        color: 'pink',
        bg: 'pink',
      },
      secondary: {
        color: 'blue',
        bg: 'blue',
      },
    }
  })
`;

function Button(props) {
  return (
    <StyledButton
      px="xs"
      py="xxs"
      m="xs"
      fontSize="sm"
      color="lightText"
      borderRadius="md"
      bg="primary"
      {...props}>
      {props.children}
      {props.label}
    </StyledButton>
  );
}

Button.propTypes = {
  /** Text content */
  label: PropTypes.string,
  /** Background color */
  bg: PropTypes.string,
  /** Text color */
  color: PropTypes.string,
  /** Roundness of corners */
  borderRadius: PropTypes.string
}

export default Button;
