import React from 'react';
import styled from 'styled-components';
import { Div, Button, Text, Icon } from '../atoms';
import PropTypes from 'prop-types';

const Container = styled(Div)`
background-color:#22212D;
display:flex;
flex-wrap:wrap;
width:100%;
color:${props => props.theme.colors.white};
`;



function Footernav(props) {
  return (
    <Container {...props} >
      <Button variant="footernav" icons={<Icon name="help" />} label="Help" />
      <Button variant="footernav" icons={<Icon name="myaccount" />} label="My Account" />
      <Button variant="footernav" icons={<Icon name="search" />} label="Search" />
      <Button variant="footeraction" label="$14.50" subMessage={<Text variant="md" color="white">View Order</Text>} />
    </Container>
  );
}

Footernav.propTypes = {
  /** Button variant */
  variant: PropTypes.string,
  /** Icon on button */
  name: PropTypes.string,
  /** Primawry button text */
  label: PropTypes.string,
  /** Text color of submessage */
  color: PropTypes.string,
}

export default Footernav;
