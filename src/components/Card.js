import React from 'react';
import styled from 'styled-components';
import { Div, Text, Button } from './atoms';
import Dietary from './Dietary';
import Productimage from './Productimage';


const Container = styled(Div)`
  display: flex;
  flex: 0 1 auto;
  width:33.3333%;
  align-items: stretch;
  justify-content: center;
  box-sizing: border-box;
  position:relative;
  padding:${props => props.theme.space.xxs};
`;

const Plate = styled(Div)`
    overflow:hidden;
    border:1px solid ${props => props.theme.colors.border};
    background-color:${props => props.theme.colors.white};
    border-radius:${props => props.theme.radii.lg};
    display:flex;
    flex:1 1 auto;
    flex-direction:column;


    //   @media only screen and (max-width: 768px) {
//     background-color:red;
//   }
`;

const Statrow = styled(Div)`
display:flex;
flex-wrap:wrap;
width:100%;
justify-content:space-between;
align-items:center;
font-size:${props => props.theme.fontSizes.sm};
padding: ${props => props.theme.space.xs};
`;




function Card(props) {
    return (
        <Container {...props}>
            <Plate>
                <Productimage name={props.name} />
                <Statrow>
                    <Text>{props.name}</Text>
                    <Text>{props.price}</Text>
                </Statrow>
                <Dietary pl="xs" pr="xs" pb="xs" cal="723" />
            </Plate>
        </Container>
    );
}

export default Card;
