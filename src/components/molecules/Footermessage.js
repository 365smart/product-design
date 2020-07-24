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

const Message = styled(Div)`
  color: ${props => props.theme.colors.white};
  font-weight: ${props => props.theme.fontWeights.heavy};
  margin: ${props => props.theme.space.xs};
  font-size: ${props => props.theme.fontSizes.xl};
`;


function Footermessage(props) {
  return (
    <Container {...props}>
      <Icons>
        {props.icons}
      </Icons>
      <Message>{props.footerMessage}</Message>
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
