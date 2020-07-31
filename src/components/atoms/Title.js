import React from 'react';
import styled from 'styled-components';
import { variant } from 'styled-system';
import PropTypes from 'prop-types';
import { color, layout, space, typography, border } from 'styled-system';

const StyledTitle = styled('div')(
  {
    margin: 0,
    padding: 0,
    userSelect: 'none',
    position: 'relative',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  color,
  layout,
  space,
  border,
  typography,
  variant({
    variants: {
      mdHead: {
        display: 'flex',
        flex: '1 1 auto',
        justifyContent: 'center',
        margin: '0px',
        fontSize: 'md',
        fontWeight: 'heavy',
        padding: 'xs',
        lineHeight: 'normal',
        width: '100%',
      },
      xlHead: {
        display: 'flex',
        width: '100%',
        padding: 'md',
        fontSize: 'xl',
        fontWeight: 'heavy',
        margin: '0px',
        lineHeight: 'normal'
      },
      xxlHead: {
        display: 'flex',
        width: '100%',
        padding: 'md',
        paddingBottom: '0px',
        fontSize: 'xxl',
        fontWeight: 'heavy',
        margin: '0px',
        alignItems: 'flex-end',
        lineHeight: 'normal',
      },
      xxlHeadSticky: {
        display: 'flex',
        width: '100%',
        padding: 'md',
        fontSize: 'xxl',
        fontWeight: 'heavy',
        margin: '0px',
        alignItems: 'flex-end',
        lineHeight: 'normal',
        position: 'sticky',
        top: '0px',
        zIndex: '1',
        backgroundColor: 'white',
        display: 'flex',
        justifyContent: 'space-between'
      }
    }
  })
);

function Title(props) {
  return (
    <StyledTitle color="dark" {...props}>
      {props.children}
      {props.value}
    </StyledTitle>
  );
}

Title.propTypes = {
  /** Title type */
  variant: PropTypes.string,

}

export default Title;
