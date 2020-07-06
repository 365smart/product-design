import React from 'react';
import styled from 'styled-components';

const Div = styled.div`
  padding: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-size: 18px;
  line-height: 24px;
  background: ${props => props.bgColor ? props.bgColor : 'rebeccapurple'};
  position:fixed;
  bottom:0px;
  left:0px;
  right:0px;
`;

function Footer(props) {
  return (
    <Div {...props}>
      {props.children}
      {props.label}
    </Div>
  );
}

export default Footer;
