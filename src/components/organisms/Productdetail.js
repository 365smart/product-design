
import React from 'react';
import styled from 'styled-components';
import { Div, Body, Button, Img, Footer, Title, Text } from '../atoms';
import { Menusection, Header, Splash, Itemaddremove, Footernav, Slider, Slideset } from '../molecules';

const StyledDiv = styled(Div)`
width:100%;
`;

const CloseButton = styled(Button)`

`;

function Productdetail(props) {
  return (

    <StyledDiv {...props}>
      {props.children}
      <Splash images={<Img variant="cover" name="bella3" location="Products" fileType="jpg" />}>
        <Itemaddremove />
      </Splash>
      <Body variant="PBStandard">
        <Title variant="xxlHeadSticky">
          <Text>Name of Product</Text>
          <Text>$8.88</Text>
        </Title>
      </Body>
      <Footer>
        <Slider sliderMessage="You might want to add">
          <Slideset slideSet="products" />
        </Slider>
        <Footernav navSet="product" onClose={props.onClose} />
      </Footer>
    </StyledDiv>
  );
}

Productdetail.propTypes = {
  /** Image type */
  // variant: PropTypes.string,
}

export default Productdetail;

