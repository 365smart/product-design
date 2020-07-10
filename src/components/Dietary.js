import React from 'react';
import styled from 'styled-components';
import { Div } from './atoms';

const Container = styled(Div)`
  display: flex;
  width: 100%;
  align-items:center;
  flex-wrap:wrap;
`;
const Micon = styled.img`
  display: flex;
  height: ${props => props.theme.space.sm};
  width: ${props => props.theme.space.sm};
  border-radius: ${props => props.theme.radii.mdlg};
  margin: ${props => props.theme.space.xxxxs};
`;
const Miconinfo = styled(Div)`
  display: flex;
  height: 24px;
  border-radius: 12px;
  align-items: center;
  background-color: ${props => props.theme.colors.black};
  color:${props => props.theme.colors.white};
  margin: ${props => props.theme.space.xxxxs};
  font-size: ${props => props.theme.fontSizes.xxs};
  padding: ${props => props.theme.space.xxs};
  font-weight: ${props => props.theme.fontWeights.heavy};
`;

function Dietary(props) {

  return (
    <Container {...props}>
      <Miconinfo>{props.cal} CAL</Miconinfo>
      <Micon src={require('../img/Dietary/golite.png')} alt="golite" />
      <Micon src={require('../img/Dietary/nodairy.png')} alt="nodairy" />
      <Micon src={require('../img/Dietary/nogluten.png')} alt="nogluten" />
      <Micon src={require('../img/Dietary/peanut.png')} alt="peanut" />
      <Micon src={require('../img/Dietary/pork.png')} alt="pork" />
    </Container>
  );
}

export default Dietary;
