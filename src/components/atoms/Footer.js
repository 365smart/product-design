import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Div } from '.';

const StyledDiv = styled(Div)`
  display: flex;
  flex-direction:column;
  align-items: flex-bottom;
  justify-content: center;
  position:fixed;
  bottom:0px;
  left:0px;
  right:0px;
`;





function Footer(props) {
  return (
    <StyledDiv
      {...props}>
      {props.children}
    </StyledDiv>
  );
}

Footer.propTypes = {
  /** Variant creates body with enough padding at bottom to clear the fixed footer elements */
  variant: PropTypes.string
}

export default Footer;
