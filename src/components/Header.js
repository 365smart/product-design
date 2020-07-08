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
  z-index:1;
  overflow: hidden;
`;

const Background = styled.img`
  position: absolute;
  z-index:-1;
  object-fit: cover;
  min-width: 100%;
  min-height: 100%;
`;

const Time = styled(Div)`
  height: 32px;
  font-weight:700;
  position: absolute;
  bottom: 0px;
  margin: auto;
  display: flex;
  justify-content: center;
  align-items: center;
  border-top-right-radius: 12px;
  border-top-left-radius: 12px;
`

const Logo = styled.img`
  object-fit: contain;
  height: 100%;
`;

function Header(props) {
  return (
    <Container {...props} pb="md">
      <Logo src={require('../img/Diners/Logos/' + props.name + '.png')} alt={props.name} />
      <Background src={require('../img/Diners/BG/' + props.name + '.jpg')} alt={props.name} />
      <Time bg="white" px="xs">
        <Text fontSize="sm">{props.status}</Text>
      </Time>
    </Container>
  );
}

Header.propTypes = {
  /** name of diner for themeing */
  name: PropTypes.string,
  /** status of diner */
  status: PropTypes.object,
}

export default Header;
