
import React from 'react';
import styled from 'styled-components';
import { Div, Body, Text, Title, Button, Footer, Img } from '../atoms';
import { Footernav, Splash, Itemaddremove } from '../molecules';

const StyledDiv = styled(Div)`
width:100%;
`;

const CloseButton = styled(Button)`
  position: absolute;
  right: 16px;
  top: 16px;
`;

function Search(props) {
  return (
    <StyledDiv {...props}>
      {props.children}

      <Splash images={<Img variant="cover" name="Upsales_0002_Layer 22" location="Products/Upsales" fileType="jpg" />}>
        <Itemaddremove />
      </Splash>
      <Body variant="PBStandard"  >
        <Title variant="xxlHeadSticky">
          <Text>Search</Text>
        </Title>
      </Body>


      <Footer>
        <Footernav
          navSet="search"
          onClose={props.onClose} />
      </Footer>
    </StyledDiv>
  );
}

Search.propTypes = {
  /** Image type */
  // variant: PropTypes.string,
}

export default Search;

