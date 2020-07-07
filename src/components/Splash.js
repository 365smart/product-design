import React from 'react';
import styled from 'styled-components';
import { Div } from './atoms';

const StyledDiv = styled(Div)`
  width: 100%;
  height: 360px;
  background-color: red;
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
    <StyledDiv>
      <img src={require('../img/Products/Upsales/' + props.name + '.jpg')} alt={props.name}/>
    </StyledDiv>
  );
}

export default Splash;
