import React from 'react';
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
    lineHeight: 'sm',
    paddingBottom: '50vh',
  },
  color,
  layout,
  space,
  border,
  typography,
  variant({
    variants: {

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
  /** Name of icon file */
  // name: PropTypes.string
}

export default Body;
