import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Div, Img } from '../atoms';


const Container = styled(Div)`
  width: 100vw;
  height: 160px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  font-size: ${props => props.theme.space.sm};
  line-height: ${props => props.theme.space.md};
  position: sticky;
  top: 0px;
  z-index:1;
  overflow: hidden;
  padding-bottom: ${props => props.theme.space.md};
`;
const EateryStatus = styled(Div)`
height:${props => props.theme.space.md};
font-weight: ${props => props.theme.fontWeights.heavy};
position: absolute;
bottom: 0px;
margin: auto;
display: flex;
justify-content: center;
align-items: center;
border-top-right-radius: ${props => props.theme.radii.mdlg};
border-top-left-radius:${props => props.theme.radii.mdlg};
background-color: ${props => props.theme.colors.white};
font-size: ${props => props.theme.fontSizes.sm};
padding:${props => props.theme.space.xxs};
padding-top: 0px;
padding-bottom: 0px;
`;




function Header(props) {
  return (
    <Container {...props}>
      <Img variant="logo" name={props.logoName} location={props.logoLocation} fileType={props.logoFileType} />;
      <Img variant="background" name={props.bgName} location={props.bgLocation} fileType={props.bgFileType} />;
      <EateryStatus variant="eateryStatus">{props.status}</EateryStatus>
    </Container>
  );
}

Header.propTypes = {
  /** name of diner for themeing */
  name: PropTypes.string,
  /** status of diner */
  status: PropTypes.string,
}

export default Header;
