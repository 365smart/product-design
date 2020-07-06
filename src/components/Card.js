import React from 'react';
import styled from 'styled-components';

const Div = styled.div`
  padding: 16px;
  display: flex;
  flex: 0 1 auto;
  width:25%;
  height:256px;
  min-width:320px;
  align-items: center;
  justify-content: center;
  border:1px solid red; 
  background-color:$myColor;
  box-sizing: border-box;
  @media only screen and (max-width: 768px) {
    background-color:red;
  }
`;

function Card(props) {
    return (
        <Div {...props}>
            {props.children}
            {props.label}
        </Div>
    );
}

export default Card;
