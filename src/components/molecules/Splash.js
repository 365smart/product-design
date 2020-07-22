import React from 'react';
import styled from 'styled-components';
import { Div } from '../atoms';
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
const StyledDiv = styled(Div)(
  {
    width: '100%',
    height: '360px',
    backgroundColor: 'red',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    overflow: 'hidden',
    position: 'relative'
  },
  color,
  layout,
  space,
  flexbox,
  border,
  typography,
  variant({
    variants: {
      autoHeight: {
        height: 'auto'
      }
    }
  })
);



function Splash(props) {
  return (
    <StyledDiv {...props}>

      {props.images}
      {props.children}


    </StyledDiv>
  );
}

Splash.propTypes = {
  /** Imported Image objects from Img atom*/
  images: PropTypes.object
}

export default Splash;
