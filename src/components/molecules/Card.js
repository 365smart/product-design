import React, { useState } from 'react';
import styled from 'styled-components';
import { Div, Text, Button, Icon, Img } from '../atoms';
import { Dietary, Splash } from '.';
import Itemaddremove from './Itemaddremove';


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
                <Splash variant={props.splashVariant} images={<Img variant={props.imageVariant} name={props.name} location={props.location} fileType={props.fileType} />} >
                    <Itemaddremove />
                </Splash>
                <Statrow>
                    <Text>{props.name}</Text>
                    <Text>{props.price}</Text>
                </Statrow>
                <Dietary cal={props.cal} />
            </Plate>
        </Container >
    );
}

export default Card;
