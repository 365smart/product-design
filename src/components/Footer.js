import React from 'react';
import styled from 'styled-components';
import Footernav from './Footernav';
import Footermessage from './molecules/Footermessage';
import Slider from './Slider';
import { Div } from './atoms';

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
      <Slider message="Tap for more choices" />
      <Footermessage message="Scan an item at any time" />
      <Footernav total={props.total} message={props.message} />
    </Container>
  );
}

export default Footer;
