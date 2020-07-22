import React, { useState } from 'react';
import styled from 'styled-components';
import { Div, Icon, Button } from '../atoms';
const Container = styled(Div)`
`;

const CountControl = styled(Button)`
display:flex;
margin: ${props => props.theme.space.xxs};
border-radius: ${props => props.theme.radii.xl};
padding:0px;
background-color:${props => props.theme.colors.black};
flex:0 1 0;
align-items:center;
font-size:${props => props.theme.fontSizes.xl};
button{
    margin:0px; 
    background-color:${props => props.theme.colors.black};
}
`;




function Itemaddremove(props) {
  const [count, setCount] = useState(0);
  function addItem() {
    setCount(count + 1);
  }

  function removeItem() {
    setCount(count - 1)
  }
  return (
    <Container {...props} variant="controlsTR">
      {count === 0 ?
        (
          <Div variant="controlsTR">
            <Button variant="xlCircleGhostDark"><Icon variant="forControls" name="info" /></Button>
            <Button variant="xlCircle" onClick={() => addItem()} ><Icon variant="forControls" name="add" /></Button></Div>
        )
        :
        (
          <Div variant="controlsTR">

            <Button variant="xlCircleGhostDark"><Icon variant="forControls" name="info" /></Button>

            <CountControl>
              <Button variant="xlCircle" onClick={() => removeItem()} >
                <Icon variant="forControls" name="subtract" />
              </Button>
              {count}
              <Button variant="xlCircle" onClick={() => addItem()} >
                <Icon variant="forControls" name="add" />
              </Button>
            </CountControl>

          </Div>
        )
      }
    </Container>
  );
}
export default Itemaddremove;
