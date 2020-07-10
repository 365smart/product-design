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
  font-size: ${props => props.theme.space.sm};
  line-height: ${props => props.theme.space.md};
  position: sticky;
  top: 0px;
  z-index:1;
  overflow: hidden;
  padding-bottom: ${props => props.theme.space.md};
`;

const Background = styled.img`
  position: absolute;
  z-index:-1;
  object-fit: cover;
  min-width: 100%;
  min-height: 100%;
`;

const Time = styled(Text)`
  height: ${props => props.theme.space.md};
  font-weight:700;
  position: absolute;
  bottom: 0px;
  margin: auto;
  display: flex;
  justify-content: center;
  align-items: center;
  border-top-right-radius: ${props => props.theme.radii.mdlg};
  border-top-left-radius: ${props => props.theme.radii.mdlg};
  background-color: ${props => props.theme.colors.white};
  font-size: ${props => props.theme.fontSizes.sm};
  padding: ${props => props.theme.space.xxs};
  padding-top:0px;
  padding-bottom:0px;
`

const Logo = styled.img`
  object-fit: contain;
  height: 100%;
`;

function Header(props) {
  return (
    <Container {...props}>
      <Logo src={require('../img/Diners/Logos/' + props.name + '.png')} alt={props.name} />
      <Background src={require('../img/Diners/BG/' + props.name + '.jpg')} alt={props.name} />
      <Time>
        {props.status}
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
