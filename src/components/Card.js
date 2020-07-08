import React from 'react';
import styled from 'styled-components';
import Buttoncontrol from './Buttoncontrol';
import { Div, Text } from './atoms';

const Container = styled(Div)`
  display: flex;
  flex: 0 1 auto;
  width:33.3333%;
  align-items: center;
  justify-content: center;
  box-sizing: border-box;
  position:relative;
`;

const Plate = styled(Div)`
  
    overflow:hidden;
    border:1px solid ${props => props.theme.colors.border};
    //   @media only screen and (max-width: 768px) {
//     background-color:red;
//   }
`;
const Splash = styled(Div)`
height: 160px;
width:100%;
overflow:hidden;
`;
const Image = styled.img`
  object-fit: contain;
  height: 100%;
  width:100%;
`;
const Controls = styled(Div)`
position:absolute;
top:0px;
left:0px;
right:0px;
display:flex;
flex:1 1 auto;
justify-content:flex-end;
`;
const Statrow = styled(Div)`
display:flex;
width:100%;
justify-content:space-between;
align-items:center;
`;

const Stat = styled(Div)`

`;


const Dietary = styled(Div)`

`;

function Card(props) {
    return (
        <Container {...props} p="xxs">
            <Plate bg="white" borderRadius="lg">
                <Splash>
                    <Controls p="xxs">
                        <Buttoncontrol />
                        <Buttoncontrol />
                    </Controls>
                    <Image src={require('../img/Products/' + props.name + '.jpg')} alt={props.name} />
                </Splash>
                <Statrow fontSize="sm" p="xs" >
                    <Text>{props.name}</Text>
                    <Text>{props.price}</Text>
                </Statrow>
                <Dietary></Dietary>

            </Plate>
        </Container>
    );
}

export default Card;
