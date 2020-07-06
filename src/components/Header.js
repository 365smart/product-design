import React from 'react';
import PropTypes from 'prop-types';

import styled from 'styled-components';
import { Div, Text } from './atoms';

const Container = styled(Div)`
  padding: 16px;
  width: 100%;
  display: flex;
  height: 64px;
  align-items: center;
  justify-content: center;
  color: white;
  font-size: 18px;
  line-height: 24px;
  position:sticky;
  top:0px;
`;

const Left = styled(Div)`
  &:active {
    filter: brightness(.75);
  }
`;

const Right = styled(Div)`
  &:active {
    filter: brightness(.75);
  }
`;

const Center = styled(Text)`
  flex: 1;
  text-align: center;
`

function Header(props) {
  return (
    <Container {...props}>
      <Left>{props.leftNav}</Left>
      <Center>{props.label}</Center>
      <Right>{props.rightNav}</Right>
    </Container>
  );
}

Header.propTypes = {
  label: PropTypes.string,
  leftNav: PropTypes.object,
  rightNav: PropTypes.object,
}

export default Header;
