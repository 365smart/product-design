import React from 'react';
import styled from 'styled-components';

const Div = styled.div`
  width: 100%;
  height:360px;
  background-color:red;
  display: flex;
  align-items: center;
  justify-content: center;
  background-image:url("./images/Products/bella1.jpg");
  background-size:cover;
`;

function Splash(props) {
  return (
    <Div  {...props}>
      {props.children}
      {props.label}
    </Div>
  );
}

export default Splash;
