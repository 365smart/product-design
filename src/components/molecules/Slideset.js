import React from 'react';
import styled from 'styled-components';
import { Div } from '../atoms';
import { Slide } from '.';
import PropTypes from 'prop-types';


const Container = styled(Div)`
display:flex;
`;

const SlideSet = styled(Div)`
display:flex;
`;




function Slideset(props) {
  const slideSet = props.slideSet;
  if (slideSet === 'diners') {
    return (
      <Container {...props}>

        <SlideSet >
          <Slide variant="contain" name="Bellas" location="Diners/Logos" fileType="png" controlSet="info" />
          <Slide variant="contain" name="365Dining-black" location="Diners/Logos" fileType="png" controlSet="info" />
          <Slide variant="contain" name="Angelos" location="Diners/Logos" fileType="png" controlSet="info" />
          <Slide variant="contain" name="Drinks" location="Diners/Logos" fileType="png" controlSet="info" />
          <Slide variant="contain" name="Frutandvegi" location="Diners/Logos" fileType="png" controlSet="info" />
          <Slide variant="contain" name="Grillvalley" location="Diners/Logos" fileType="png" controlSet="info" />
          <Slide variant="contain" name="Saffronbloom" location="Diners/Logos" fileType="png" controlSet="info" />
          <Slide variant="contain" name="Speckledplate" location="Diners/Logos" fileType="png" controlSet="info" />
          <Slide variant="contain" name="Streetsiders" location="Diners/Logos" fileType="png" controlSet="info" />
          <Slide variant="contain" name="Worldwalkcafe" location="Diners/Logos" fileType="png" controlSet="info" />';
        </SlideSet>

      </Container>
    );
  }
  if (slideSet === 'products') {
    return (
      <Container {...props}>

        <SlideSet >
          <Slide variant="cover" name="doritos" location="Products/Upsales" fileType="jpg" controlSet="addsub" />
          <Slide variant="cover" name="Upsales_0000_Layer_24" location="Products/Upsales" fileType="jpg" controlSet="addsub" />
          <Slide variant="cover" name="Upsales_0002_Layer 22" location="Products/Upsales" fileType="jpg" controlSet="addsub" />
          <Slide variant="cover" name="Upsales_0003_Layer 21" location="Products/Upsales" fileType="jpg" controlSet="addsub" />
          <Slide variant="cover" name="Upsales_0004_Layer 20" location="Products/Upsales" fileType="jpg" controlSet="addsub" />
          <Slide variant="cover" name="Upsales_0005_Layer 19" location="Products/Upsales" fileType="jpg" controlSet="addsub" />
          <Slide variant="cover" name="Upsales_0006_Layer 18" location="Products/Upsales" fileType="jpg" controlSet="addsub" />
          <Slide variant="cover" name="Upsales_0007_Layer 16" location="Products/Upsales" fileType="jpg" controlSet="addsub" />
        </SlideSet>

      </Container>
    );
  }

}

Slideset.propTypes = {
  /** How to choose what set of images appear in the slider*/
  slideSet: PropTypes.string
}

export default Slideset;
