import React from 'react';
import styled from 'styled-components';
import { Div, Button, Text, Icon } from '../atoms';
import PropTypes from 'prop-types';

const Container = styled(Div)`
  background-color: ${props => props.theme.colors.dark};
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  width: 100%;
  color: ${props => props.theme.colors.white};
`;

const FooterButton = styled(Button)`
  flex: 1 1 auto;
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
  font-size: ${props => props.theme.space.md};
  font-weight: ${props => props.theme.fontWeights.heavy};
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
  font-size: ${props => props.theme.space.md};
  font-weight: ${props => props.theme.fontWeights.heavy};
`;

const FooterAction = styled(Button)`
  flex-direction: column;
  border-radius: ${props => props.theme.radii.lg};
  background-color: ${props => props.theme.colors.primary};
  height: auto;
  min-height: 160px;
  font-weight: ${props => props.theme.fontWeights.heavy};
  color: ${props => props.theme.colors.white};
  padding: ${props => props.theme.space.md};
  padding-bottom: 0px;
  padding-top: 0px;
  margin: ${props => props.theme.space.md};
  border: none;
  align-items: center;
  font-size: ${props => props.theme.fontSizes.xxl};
  justify-content: center;
`;

function Footernav(props) {
  const navSet = props.navSet;

  if (navSet === 'main') {
    return (
      <Container {...props} >
        <FooterButton icons={<Icon name="help" />} label="Help" onClick={props.onHelp} />
        <FooterButton icons={<Icon name="myaccount" />} label="My Account" onClick={props.onMyAccount} />
        <FooterButton icons={<Icon name="search" />} label="Search" onClick={props.onSearch} />
        {
          props.newTotal > 0 ?
            (<FooterAction label={'$' + props.newTotal} subMessage={<Text variant="md" color="white">View Order</Text>} />)
            :
            (<div />
            )
        }

      </Container>
    );
  }
  if (navSet === 'product') {
    return (
      <Container {...props} >
        <FooterNavMin icons={<Icon name="close" />} label="Close" onClick={props.onClose} />
        <FooterAction
          onClick={() => { props.onClose(); props.setAddAmount(props.addAmount); props.onAdd() }}
          label={'$' + props.totalCost} subMessage={<Text variant="md" color="white">Add to Cart</Text>} />
      </Container>
    );
  }
  if (navSet === 'search') {
    return (
      <Container {...props} >
        <FooterNavMin icons={<Icon name="close" />} label="Close" onClick={props.onClose} />
        <FooterButton icons={<Icon name="help" />} label="Diners" onClick={props.onHelp} />
        <FooterButton icons={<Icon name="myaccount" />} label="Categories" onClick={props.onMyAccount} />
        <FooterButton icons={<Icon name="search" />} label="Products" onClick={props.onSearch} />
      </Container>
    );
  }



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
