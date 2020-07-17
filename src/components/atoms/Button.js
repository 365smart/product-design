import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import {
  color,
  layout,
  space,
  flexbox,
  border,
  typography,
  variant
} from 'styled-system';

const StyledButton = styled('button')(
  {
    border: 'none',
    outline: 'none',
    fontWeight: 'bold',
    display: 'flex',
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
      footernav: {
        flex: '1 1 auto',
        flexDirection: 'column',
        justifyContent: 'space-between',
        alignItems: 'center',
        height: '224px',
        borderRight: '2px solid #ffffff',
        boxSizing: 'border-box',
        backgroundColor: 'transparent',
        margin: '0px',
        borderRadius: '0px',
        color: 'white',
        padding: 'md',
        fontSize: 'md',
        fontWeight: 'heavy'
      },
      footeraction: {
        flexDirection: 'column',
        borderRadius: 'lg',
        backgroundColor: 'primary',
        height: 'auto',
        minHeight: '160px',
        fontWeight: 'heavy',
        color: 'white',
        p: 'md',
        pb: '0',
        pt: '0',
        margin: 'md',
        border: 'none',
        alignItems: 'center',
        fontSize: 'xxl',
        justifyContent: 'center'
      },
      control: {
        height: 'xl',
        width: 'xl',
        margin: 'xxs',
        borderRadius: 'xl',
        backgroundColor: 'primary',
        padding: '.75rem'
      },
      controlGhostDark: {
        height: '64px',
        width: '64px',
        margin: 'xxs',
        borderRadius: 'xl',
        backgroundColor: 'ghostdark',
        color: 'white',
        padding: '.75rem'
      }

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
      {props.icons}
      {props.label}
      {props.subMessage}
      {props.append}
    </StyledButton>
  );
}

Button.propTypes = {
  /** Text content */
  label: PropTypes.string,
  /** Text content */
  name: PropTypes.string,
  /** Text content */
  subMessage: PropTypes.object,
  /** Background color */
  bg: PropTypes.string,
  /** Text color */
  color: PropTypes.string,
  /** Roundness of corners */
  borderRadius: PropTypes.string
}

export default Button;
