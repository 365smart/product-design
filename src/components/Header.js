import React from 'react';
import styled from 'styled-components';

const Div = styled.div`
  width: 100vw;
  height:160px;
  display: flex;
  flex-direction:column;
  align-items: center;
  justify-content: center;
  color: white;
  font-size: 18px;
  line-height: 24px;
  background: ${props => props.bgColor ? props.bgColor : 'rebeccapurple'};
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

function Header(props) {
  return (
    <Div {...props}>
      {props.children}
      {props.label}
      <div className="headerBg"><img src={require('../img/Diners/' + props.name + '-logobg.jpg')} /></div>
      <div className="headerLogo"><img src={require('../img/Diners/' + props.name + '-logo.png')} /></div>
      <div className="dinerStatus">Open 10:00 am</div>
    </Div>
  );
}

export default Header;
