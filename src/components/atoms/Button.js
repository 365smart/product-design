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

const StyledButton = styled('button')(
  {
    border: 'none',
    outline: 'none',
    fontWeight: 'bold',
    '&:active': {
      opacity: .75,
    }
  },
  color,
  layout,
  space,
  flexbox,
  border,
  typography,
  variant({
    variants: {
      xs: {
        px: 'xs',
        py: 'xxs',
        fontSize: 'xs',
        lineHeight: 'xs',
        borderRadius: 'md',
      },
      sm: {
        px: 'sm',
        py: 'xxs',
        fontSize: 'sm',
        lineHeight: 'sm',
        borderRadius: 'md',
      },
      md: {
        px: 'sm',
        py: 'xxs',
        fontSize: 'md',
        lineHeight: 'md',
        borderRadius: 'lg',
      },
      lg: {
        px: 'md',
        py: 'xxs',
        fontSize: 'lg',
        lineHeight: 'lg',
        borderRadius: 'lg',
      },
      xl: {
        px: 'md',
        py: 'xs',
        fontSize: 'xl',
        lineHeight: 'xl',
        borderRadius: 'lg',
      },
      xxl: {
        px: 'xl',
        py: 'sm',
        fontSize: 'xxl',
        lineHeight: 'xxl',
        borderRadius: 'xl',
      },
    }
  })
);

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
      {props.prepend}
      {props.children}
      {props.label}
      {props.append}
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
