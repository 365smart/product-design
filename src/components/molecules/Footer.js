import React from 'react';
import styled from 'styled-components';
import { Footernav, Footermessage, Slider } from '.';
import { Div, Icon } from '../atoms';

const Container = styled(Div)`
  display: flex;
  flex-direction:column;
  align-items: flex-bottom;
  justify-content: center;
  position:fixed;
  bottom:0px;
  left:0px;
  right:0px;
`;

function Footer(props) {
  return (
    <Container {...props}>
      <Slider sliderMessage="Tap for more choices" />
      <Footermessage icons={<Icon name="barcode" />} footerMessage="Scan an item at any time" />
      <Footernav />
    </Container>
  );
}
export default Footer;
