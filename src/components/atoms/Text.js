import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { color, layout, space, typography } from 'styled-system';

const StyledText = styled.p`
  ${color}
  ${layout}
  ${space}
  ${typography}
`;

function Text(props) {
  return (
    <StyledText {...props}>
      {props.children}
    </StyledText>
  );
}

Text.propTypes = {
  fontSize: PropTypes.string,
}

export default Text;
