import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { color, layout, space, flexbox, border } from 'styled-system';

const StyledDiv = styled.div`
  ${color}
  ${layout}
  ${space}
  ${flexbox}
  ${border}
`;

function Div(props) {
  return (
    <StyledDiv {...props}>
      {props.children}
    </StyledDiv>
  );
}

Div.propTypes = {
  children: PropTypes.object,
}

export default Div;
