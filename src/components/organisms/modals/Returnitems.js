
import React from 'react';
import styled from 'styled-components';
import { Div, Body, Button, Icon, Text, Title, Footer, Img } from '../../atoms';
import { Footernav, Splash, Itemaddremove } from '../../molecules';

const StyledDiv = styled(Div)`
  width:100%;
  background-color:${props => props.theme.colors.warning};
`;
const FooterNavMin = styled(Button)`
  flex: 0 1 auto;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  height: 224px;
  border-right: 2px solid #ffffff;
  box-sizing: border-box;
  background-color: transparent;
  margin: 0px;
  border-radius: 0px;
  color: white;
  padding: ${props => props.theme.space.md};
  font-size: ${props => props.theme.space.sm};
  font-weight: ${props => props.theme.fontWeights.heavy};
`;

const FooterAction = styled(Button)`
  flex-direction: column;
  border-radius: ${props => props.theme.radii.lg};
  background-color: ${props => props.theme.colors.warning};
  height: auto;
  min-height: 160px;
  font-weight: ${props => props.theme.fontWeights.heavy};
  color: ${props => props.theme.colors.dark};
  padding: ${props => props.theme.space.md};
  padding-bottom: 0px;
  padding-top: 0px;
  margin: ${props => props.theme.space.md};
  border: none;
  align-items: center;
  font-size: ${props => props.theme.fontSizes.xl};
  justify-content: center;
`;
function Returnitems(props) {
  return (
    <StyledDiv {...props}>
      {props.children}

      <Splash images={<Img variant="cover" name="Upsales_0002_Layer 22" location="Products/Upsales" fileType="jpg" />}>
        <Itemaddremove />
      </Splash>
      <Body variant="PBStandard" bg="warning" >
        <Title bg="warning" variant="xxlHeadSticky">
          <Text>Search</Text>
        </Title>
      </Body>


      <Footer>
        <Footernav navSet="default"
          onClose={props.onClose} >
          <FooterNavMin icons={<Icon name="close" />} label="Close" onClick={props.onClose} />
          <FooterAction
            onClick={() => { props.onClose(); }}
            label="Did it!" />
        </Footernav>
      </Footer>
    </StyledDiv>
  );
}

Returnitems.propTypes = {
  /** Image type */
  // variant: PropTypes.string,
}

export default Returnitems;
