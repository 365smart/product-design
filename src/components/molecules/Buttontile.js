
import React from 'react';
import styled from 'styled-components';
import { Div, Img, Button, Icon } from '../atoms';
import { Itemaddremove } from '.';
import PropTypes from 'prop-types';
import {
  color,
  layout,
  space,
  flexbox,
  border,
  typography,
  variant
} from 'styled-system';

const StyledDiv = styled('div')(
  {
    display: 'flex',
    flex: '1 1 auto',
    flexDirection: 'column',
    justifyContent: 'space - between',
    alignItems: 'center',
    boxSizing: 'border - box',
    margin: '0px',
    borderRadius: '0px',
    color: 'black',
    padding: '2rem',
    fontSize: '24px',
    fontWeight: '700',
    border: '1px solid #C2C2C5',
    backgroundColor: '#ffffff',
    borderRadius: '1rem'
  },
  color,
  layout,
  space,
  flexbox,
  border,
  typography,
  variant({
    variants: {
      linedLight: {
        backgroundColor: 'transparent',
        border: '3px solid white'
      },
    }
  })
);


function Buttontile(props) {
  return (
    <StyledDiv {...props}>
      {props.children}
    </StyledDiv>
  );
}

Buttontile.propTypes = {
  /** Image type */
  // variant: PropTypes.string,
}

export default Buttontile;
