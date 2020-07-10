import React from 'react';
import styled from 'styled-components';
import Card from './Card';
import { Div } from './atoms';

const Container = styled(Div)`
  display: flex;
  flex-wrap: wrap;
  flex: 1 1 auto;
  align-items: flex-start;
  justify-content: center;
  width:100%;
`;

const Sectionname = styled(Div)`
display:flex;
width:100%;
padding:32px;
height:160px;
font-size: 64px;
font-weight:700;
margin:0px;
justify-content:flex-start;
align-items:center;
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
            <Sectionname>{props.name}</Sectionname>
            <Deck>
                <Card name="bella1" price="1.00" cal="723" />
                <Card name="bella2" price="2.00" cal="355" />
                <Card name="bella3" price="3.00" cal="782" />
                <Card name="bella4" price="2.50" cal="891" />
                <Card name="bella5" price="1.50" cal="933" />
                <Card name="taco1" price="2.00" cal="432" />
                <Card name="taco2" price="3.50" cal="512" />
                <Card name="taco3" price="3.25" cal="1102" />
            </Deck>
        </Container>
    )
}

export default Menusection;
