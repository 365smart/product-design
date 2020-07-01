import React from 'react';
import styled from 'styled-components';

const Div = styled.div`
  padding: 16px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-size: 18px;
  line-height: 24px;
  background: ${props => props.bgColor ? props.bgColor : 'rebeccapurple'};
`;

function Header(props) {
  return (
    <Div {...props}>
      {props.children}
      {props.label}
    </Div>
  );
}

export default Header;
