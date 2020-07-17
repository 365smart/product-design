import React from 'react';
import styled from 'styled-components';
import { Div, Icon } from '../atoms';
import PropTypes from 'prop-types';


const Container = styled(Div)`
display: flex;
width: 100%;
align-items:center;
flex-wrap:wrap;
padding: ${props => props.theme.space.xs};
padding-top:0px;
`;



function Dietary(props) {
  return (
    <Container {...props}>
      <Div variant="smDietary">{props.cal} CAL</Div>
      <Icon variant="sm" name="golite" />
      <Icon variant="sm" name="nodairy" />
      <Icon variant="sm" name="nogluten" />
      <Icon variant="sm" name="peanut" />
      <Icon variant="sm" name="pork" />
    </Container>
  );
}

Dietary.propTypes = {
  /** Product Base Calories */
  cal: PropTypes.string
}



export default Dietary;
