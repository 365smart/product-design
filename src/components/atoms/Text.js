import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { color, layout, space, typography } from 'styled-system';

const StyledText = styled.p`
  ${color}
  ${layout}
  ${space}
  ${typography}
  margin:0px;
  padding:0px;
`;

function Text(props) {
  return (
    <StyledText color="dark" {...props}>
      {props.children}
      {props.value}
    </StyledText>
  );
}

Text.propTypes = {
  fontSize: PropTypes.string,
  value: PropTypes.string,
}

export default Text;
