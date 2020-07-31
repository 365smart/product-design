import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { color, layout, space, typography, border, variant } from 'styled-system';

const StyledIcon = styled('img')(
  {
    objectFit: 'contain',
    height: '80px',
    width: '80px',
    margin: '16px'
  },
  color,
  layout,
  space,
  border,
  typography,
  variant({
    variants: {
      sm: {
        display: 'flex',
        height: 'sm',
        width: 'sm',
        borderRadius: 'mdlg',
        margin: 'xxxxs',
      },
      md: {
        display: 'flex',
        height: 'md',
        width: 'md',
        borderRadius: 'xs',
        margin: 'xxxxs',
      },
      forControls: {
        height: '100%',
        width: '100%',
        margin: '0px'
      }
    }
  })
);



function Icon(props) {
  return (
    <StyledIcon src={require('../../img/Icons/' + props.name + '.png')} alt={props.name} variant={props.variant}  {...props}>
    </StyledIcon>
  );
}

Icon.propTypes = {
  /** Name of icon file */
  name: PropTypes.string,

}

export default Icon;
