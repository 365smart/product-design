import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { color, layout, space, typography, border, variant } from 'styled-system';

const StyledDiv = styled('div')(
  {
    backgroundColor: 'white',
    flex: '1 1 auto',
    flexWrap: 'wrap',
    alignItems: 'flex-start',
    justifyContent: 'center',
    fontSize: 'sm',
    lineHeight: 'sm'
  },
  color,
  layout,
  space,
  border,
  typography,
  variant({
    variants: {
      PBStandard: {
        paddingBottom: '50vh',
      },
    }
  })
);



function Body(props) {
  return (
    <StyledDiv
      {...props}>
      {props.children}
      {props.label}
    </StyledDiv>
  );
}

Body.propTypes = {
  /** Variant creates body with enough padding at bottom to clear the fixed footer elements */
  variant: PropTypes.string
}

export default Body;
