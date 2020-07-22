
import React from 'react';
import styled from 'styled-components';
import { Div, Body } from '../atoms';
// import { Menusection } from '../molecules';

const StyledDiv = styled(Div)`

`;

function Productdetail(props) {
  return (
    <StyledDiv {...props}>
      {props.children}
      <Body>
        <p>
          Lorem ipsum dolor sit amet consectetur adipiscing elit, urna consequat felis vehicula class ultricies mollis dictumst, aenean non a in donec nulla. Phasellus ante pellentesque erat cum risus consequat imperdiet aliquam, integer placerat et turpis mi eros nec lobortis taciti, vehicula nisl litora tellus ligula porttitor metus.
        </p>
        <p>
          Vivamus integer non suscipit taciti mus etiam at primis tempor sagittis sit, euismod libero facilisi aptent elementum felis blandit cursus gravida sociis erat ante, eleifend lectus nullam dapibus netus feugiat curae curabitur est ad. Massa curae fringilla porttitor quam sollicitudin iaculis aptent leo ligula euismod dictumst, orci penatibus mauris eros etiam praesent erat volutpat posuere hac. Metus fringilla nec ullamcorper odio aliquam lacinia conubia mauris tempor, etiam ultricies proin quisque lectus sociis id tristique, integer phasellus taciti pretium adipiscing tortor sagittis ligula.
        </p>
        {/* <Menusection name="Specials" />
        <Menusection name="Lunch" />
        <Menusection name="Drinks" /> */}
      </Body>
    </StyledDiv>
  );
}

Productdetail.propTypes = {
  /** Image type */
  // variant: PropTypes.string,
}

export default Productdetail;

