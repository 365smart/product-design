import React from 'react';
import styled from 'styled-components';

const Div = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex: 1 1 auto;
  align-items: flex-start;
  justify-content: center;
  color: #000000;
  font-size: 18px;
  line-height: 24px;
  padding-bottom:50vh;
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
