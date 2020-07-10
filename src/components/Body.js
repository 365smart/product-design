import React from 'react';
import styled from 'styled-components';
import { Div } from './atoms';


const Container = styled(Div)`
background-color:${props => props.theme.colors.white};
flex: 1 1 auto;
flex-wrap: wrap;
align-items: flex-start;
justify-content: center;
font-size: ${props => props.theme.fontSizes.sm};
line-height: ${props => props.theme.fontSizes.sm};
padding-bottom:50vh;
`;

function Body(props) {
  return (
    <Container

      {...props}>
      {props.children}
      {props.label}
    </Container>
  );
}

export default Body;
