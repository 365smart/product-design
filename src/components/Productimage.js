import React from 'react';
import styled from 'styled-components';
import { Div, Button } from './atoms';

const Splash = styled(Div)`
width:100%;
overflow:hidden;
`;
const Buttoncontrol = styled(Button)`
height: 64px;
width:64px;
margin:${props => props.theme.space.xxs};
border-radius:${props => props.theme.radii.xl};
background-color:${props => props.theme.colors.primary};
`;
const Image = styled.img`
  object-fit: contain;
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
padding:${props => props.theme.space.xxs};

`;


function Productimage(props) {
  return (
    <Splash>
      <Controls>
        <Buttoncontrol />
        <Buttoncontrol />
      </Controls>
      <Image src={require('../img/Products/' + props.name + '.jpg')} alt={props.name} />
    </Splash>
  );
}


export default Productimage;
