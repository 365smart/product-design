import React from 'react';
import PropTypes from 'prop-types';

import styled from 'styled-components';
import { Div, Text } from './atoms';

<<<<<<< HEAD
const Div = styled.div`
  width: 100vw;
  height:160px;
  display: flex;
  flex-direction:column;
=======
const Container = styled(Div)`
  padding: 16px;
  width: 100%;
  display: flex;
  height: 64px;
>>>>>>> 5180f52cc536724e563b5faf29446a4c05ef3b21
  align-items: center;
  justify-content: center;
  color: white;
  font-size: 18px;
  line-height: 24px;
  position:sticky;
  top:0px;
  overflow: hidden;
  padding-bottom:32px;
  .headerBg{
    position:absolute;
    z-index:-1;
    img {
      object-fit: cover;
      min-width: 100%;
      min-height: 100%;
    }
  }
  .headerLogo{   
    height:100%;
    display:flex;
        img {
          object-fit: contain;
          height:100%;
        }
  }
  .dinerStatus{
    background-color:#ffffff;
    color:#000000;
    height:32px;
    position:absolute;
    bottom:0px;
    margin:auto;
    display:flex;
    justify-content:center;
    align-items:center;
    padding-left:16px; 
    padding-right:16px;
  }
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
<<<<<<< HEAD
    <Div {...props}>
      {props.children}
      {props.label}
      <div className="headerBg"><img src={require('../img/Diners/' + props.name + '-logobg.jpg')} /></div>
      <div className="headerLogo"><img src={require('../img/Diners/' + props.name + '-logo.png')} /></div>
      <div className="dinerStatus">Open 10:00 am</div>
    </Div>
=======
    <Container {...props}>
      <Left>{props.leftNav}</Left>
      <Center>{props.label}</Center>
      <Right>{props.rightNav}</Right>
    </Container>
>>>>>>> 5180f52cc536724e563b5faf29446a4c05ef3b21
  );
}

Header.propTypes = {
  label: PropTypes.string,
  leftNav: PropTypes.object,
  rightNav: PropTypes.object,
}

export default Header;
