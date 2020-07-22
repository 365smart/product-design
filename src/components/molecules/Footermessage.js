import React from 'react';
import styled from 'styled-components';
import { Div, Text } from '../atoms';
import PropTypes from 'prop-types';



const Container = styled(Div)`
background-color: ${props => props.bgColor ? props.bgColor : props.theme.colors.primary};
display:flex;
height:120px;
justify-content:flex-start;
align-items: center;
width:100%;
`;

const Icons = styled(Div)`

`;




function Footermessage(props) {
  return (
    <Container {...props}>
      <Icons>
        {props.icons}
      </Icons>
      <Text>{props.footerMessage}</Text>
    </Container>
  );
}

Footermessage.propTypes = {
  /** Icons */
  icons: PropTypes.object,
  /** Text message */
  footerMessage: PropTypes.string,
}

export default Footermessage;
