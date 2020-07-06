import React from 'react';
import styled from 'styled-components';

const Div = styled.div`
  width: 100%;
  height:360px;
  background-color:red;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  img {
    object-fit: cover;
    min-width: 100%;
    min-height: 100%;
  }
`;

function Splash(props) {
  return (
    <Div>
      <img src={require('../img/Products/' + props.name + '.jpg')}/>
    </Div>
  );
}

export default Splash;
