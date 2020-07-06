import React from 'react';
import PropTypes from 'prop-types';

import styled from 'styled-components';
import { Div, Text } from './atoms';

const Container = styled(Div)`
  width: 100vw;
  height: 160px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: 18px;
  line-height: 24px;
  position: sticky;
  top: 0px;
  overflow: hidden;
  padding-bottom: 32px;
`;

const Center = styled(Text)`
  flex: 1;
  text-align: center;
`

const Background = styled.img`
  position: absolute;
  z-index:-1;
  object-fit: cover;
  min-width: 100%;
  min-height: 100%;
`;

const Time = styled(Div)`
  background-color: #ffffff;
  height: 32px;
  position: absolute;
  bottom: 0px;
  margin: auto;
  display: flex;
  justify-content: center;
  align-items: center;
  padding-left: 16px;
  padding-right: 16px;
  border-top-right-radius: 12px;
  border-top-left-radius: 12px;
`

const Logo = styled.img`
  object-fit: contain;
  height:100%;
`;

function Header(props) {
  return (
    <Container {...props}>
      <Logo src={require('../img/Diners/' + props.name + '-logo.png')} />
      <Background src={require('../img/Diners/' + props.name + '-logobg.jpg')} />
      <Time className="dinerStatus">Open 10:00 am</Time>
    </Container>
  );
}

Header.propTypes = {
  label: PropTypes.string,
  leftNav: PropTypes.object,
  rightNav: PropTypes.object,
}

export default Header;
