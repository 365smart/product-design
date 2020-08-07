import React from 'react';
import styled from 'styled-components';
import { Card } from '.';
import { Div, Title } from '../atoms';
import PropTypes from 'prop-types';

const Container = styled(Div)`
  display: flex;
  flex-wrap: wrap;
  flex: 1 1 auto;
  align-items: flex-start;
  justify-content: center;
  width:100%;
`;

const Deck = styled(Div)`
padding:${props => props.theme.space.sm};
display:flex;
flex-wrap:wrap;
flex:1 1 auto;
width:100%;
justify-content:flex-start;
`;


function Menusection(props) {
  return (
    <Container {...props}>
      <Title variant="xxlHead" value={props.name} pb="0" />
      <Deck>
        <Card setProductPrice={props.setProductPrice} setProductName={props.setProductName} dietarySet={props.dietarySet} publicName="Blackened Salmon" name="bella1" price={1.00} cal="723" imageVariant="cover" splashVariant="autoHeight" location="Products" fileType="jpg" onProductDetail={props.onProductDetail} />
        <Card setProductPrice={props.setProductPrice} setProductName={props.setProductName} dietarySet={props.dietarySet} publicName="Crispy Truffle Fries" name="bella2" price={2.00} cal="355" imageVariant="cover" splashVariant="autoHeight" location="Products" fileType="jpg" onProductDetail={props.onProductDetail} />
        <Card setProductPrice={props.setProductPrice} setProductName={props.setProductName} dietarySet={props.dietarySet} publicName="Shrimp Salad" name="bella3" price={3.00} cal="782" imageVariant="cover" splashVariant="autoHeight" location="Products" fileType="jpg" onProductDetail={props.onProductDetail} />
        <Card setProductPrice={props.setProductPrice} setProductName={props.setProductName} dietarySet={props.dietarySet} publicName="Pasta Supreme" name="bella4" price={2.50} cal="891" imageVariant="cover" splashVariant="autoHeight" location="Products" fileType="jpg" onProductDetail={props.onProductDetail} />
        <Card setProductPrice={props.setProductPrice} setProductName={props.setProductName} dietarySet={props.dietarySet} publicName="Lemon Shrimp Fry" name="bella5" price={1.50} cal="933" imageVariant="cover" splashVariant="autoHeight" location="Products" fileType="jpg" onProductDetail={props.onProductDetail} />
        <Card setProductPrice={props.setProductPrice} setProductName={props.setProductName} dietarySet={props.dietarySet} publicName="Cajun Tacos" name="taco1" price={2.00} cal="432" imageVariant="cover" splashVariant="autoHeight" location="Products" fileType="jpg" onProductDetail={props.onProductDetail} />
        <Card setProductPrice={props.setProductPrice} setProductName={props.setProductName} dietarySet={props.dietarySet} publicName="Taco Light" name="taco2" price={3.50} cal="512" imageVariant="cover" splashVariant="autoHeight" location="Products" fileType="jpg" onProductDetail={props.onProductDetail} />
        <Card setProductPrice={props.setProductPrice} setProductName={props.setProductName} dietarySet={props.dietarySet} publicName="Southwest Taco" name="taco3" price={3.25} cal="1102" imageVariant="cover" splashVariant="autoHeight" location="Products" fileType="jpg" onProductDetail={props.onProductDetail} />
      </Deck>
    </Container>
  )
}
Menusection.propTypes = {
  /** Used as title for section */
  name: PropTypes.string,


}

export default Menusection;
