import React from 'react';
import styled from 'styled-components';
import { Div, Text, Img } from '../atoms';
import { Dietary, Splash } from '.';
import Itemaddremove from './Itemaddremove';


const Container = styled(Div)`
  display: flex;
  flex: 0 1 auto;
  width: 33.3333%;
  align-items: stretch;
  justify-content: center;
  box-sizing: border-box;
  position: relative;
  padding: ${props => props.theme.space.xxs};
`;

const Plate = styled(Div)`
  overflow: hidden;
  border: 1px solid ${props => props.theme.colors.border};
  background-color: ${props => props.theme.colors.white};
  border-radius: ${props => props.theme.radii.lg};
  display: flex;
  flex: 1 1 auto;
  flex-direction: column;
`;

const Statrow = styled(Div)`
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  justify-content: space-between;
  align-items: center;
  font-size: ${props => props.theme.fontSizes.sm};
  padding: ${props => props.theme.space.xs};
`;

function Card(props) {
  return (
    <Container {...props}>
      <Plate>
        <Splash variant={props.splashVariant} images={<Img variant={props.imageVariant} name={props.name} location={props.location} fileType={props.fileType} />} >
          <Itemaddremove setProductPrice={props.setProductPrice} setProductName={props.setProductName} productName={props.publicName} onProductDetail={props.onProductDetail} price={props.price} />
        </Splash>
        <Statrow>
          <Text>{props.publicName}</Text>
          <Text>{props.price.toFixed(2)}</Text>
        </Statrow>
        <Dietary cal={props.cal} dietarySet={props.dietarySet} />
      </Plate>
    </Container>
  );
}


export default Card;
