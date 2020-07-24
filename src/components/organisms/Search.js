
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

function Search(props) {
  return (
    <StyledDiv {...props}>
      {props.children}
      <Body>
        <CloseButton onClick={props.onClose}>Close</CloseButton>
        <Text variant="xxl">Search</Text>
      </Body>
    </StyledDiv>
  );
}

Search.propTypes = {
  /** Image type */
  // variant: PropTypes.string,
}

export default Search;

