import React from 'react';
import styled from 'styled-components';

const Div = styled.div`
  padding: 16px;
  width: 100%;
  min-height:100vh;
  display: flex;
  flex-wrap: wrap;
  flex: 1 1 auto;
  align-items: center;
  justify-content: center;
  color: #000000;
  font-size: 18px;
  line-height: 24px;
  background-color:#666666;
`;

function Body(props) {
    return (
        <Div {...props}>
            {props.children}
            {props.label}
        </Div>
    );
}

export default Body;
