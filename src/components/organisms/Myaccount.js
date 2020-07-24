
import React from 'react';
import styled from 'styled-components';
import { Div, Body, Text, Button } from '../atoms';

const StyledDiv = styled(Div)`

`;

const CloseButton = styled(Button)`
  position: absolute;
  right: 16px;
  top: 16px;
`;


function Myaccount(props) {
  return (
    <StyledDiv {...props}>
      {props.children}
      <Body>
        <CloseButton onClick={props.onClose}>Close</CloseButton>
        <Text variant="xxl">My Account</Text>
      </Body>
    </StyledDiv>
  );
}

Myaccount.propTypes = {
  /** Image type */
  // variant: PropTypes.string,
}

export default Myaccount;

