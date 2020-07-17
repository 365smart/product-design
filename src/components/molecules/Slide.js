
import React from 'react';
import styled from 'styled-components';
import { Div, Img, Button, Icon } from '../atoms';
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
    flex: 'none',
    width: '328px',
    height: '160px',
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
    border: '1px solid',
    borderColor: '#C2C2C5',
    margin: '0.5rem',
    borderRadius: '1rem',
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
      // xs: {
      //   px: 'xs',
      //   py: 'xxs',
      //   fontSize: 'xs',
      //   lineHeight: 'xs',
      //   borderRadius: 'md',
      // },
    }
  })
);


function Slide(props) {
  return (
    <StyledDiv {...props}>
      <Div variant="controlsTR">
        <Button variant="controlGhostDark"><Icon name="info" variant="forControls" /></Button>
      </Div>
      <Img variant={props.variant} name={props.name} location={props.location} fileType={props.fileType} />
    </StyledDiv>
  );
}

Slide.propTypes = {
  /** Image type */
  variant: PropTypes.string,
  /** File location of the image starting within the img folder */
  location: PropTypes.string,
  /** File name for use and alt name */
  name: PropTypes.string,
  /** File format */
  fileType: PropTypes.string,

}

export default Slide;
