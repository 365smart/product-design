import React from 'react';
import styled from 'styled-components';
import { Div, Title, Text } from '../atoms';
import PropTypes from 'prop-types';

const Container = styled(Div)`


    max-width:704px;
    margin:auto;  
    .stattitle{
      font-size:32px;
      font-weight:700;
      border-bottom:8px solid black;
    }

    .statrow.right{
      justify-content:flex-end;
    }
    .statrow.header{
        border-bottom: 4px solid black;
        span {
          font-size: 32px;
        }
     
    }
    hr {
     padding:0px;
     margin:0px;
     border:4px solid black;
    }


`;
const Titlerow = styled(Div)`
display:flex;
justify-content:space-between;
border-bottom:1px solid black;
  font-size: ${props => props.theme.fontSizes.lg};
  font-weight: ${props => props.theme.fontWeights.heavy};

`;

const Statrow = styled(Div)`
display:flex;
justify-content:space-between;
border-bottom:1px solid black;
font-size: ${props => props.theme.fontSizes.sm};
`;
const Footnote = styled(Div)`
border-top: 4px solid black;
display:flex;
justify-content:flex-start;
align-items:flex-start;
span{
  font-size:2em;
  line-height:1em;
}
`;
const Stat = styled(Div)`
display:flex;
align-items:center;
`;
const Name = styled(Div)`
  font-size:  ${props => props.theme.fontSizes.sm};
  font-weight:900;
  margin-right:${props => props.theme.space.xxs};
`;
const Subname = styled(Div)`
  padding-left:${props => props.theme.space.sm};
  margin-right:${props => props.theme.space.xxs};
`
const Rda = styled(Div)`
font-weight: 900;
`;
function Nutrition(props) {
  return (
    <Container {...props}>

      <div class="stattitle">Nutrition Facts</div>
      <Titlerow><span>Calories</span><span>888</span></Titlerow>

      <Statrow justifyContent="flex-end"><Subname>% Daily Value*</Subname></Statrow>

      {props.totalFat > 0 ? <Statrow><Stat ><Name>Total Fat</Name>{props.totalFat}{props.totalFatUnits}</Stat><Rda>{props.totalFatPercent}%</Rda></Statrow> : ""}


      <Statrow><Stat><Subname>Saturated Fat</Subname>{props.saturatedFat}{props.saturatedFatUnits}</Stat><Rda>{props.saturatedFatPercent}%</Rda></Statrow>

      <Statrow><Stat><Name>Cholesterol</Name>{props.cholesterol}{props.cholesterolUnits}</Stat><Rda>{props.cholesterolPercent}%</Rda></Statrow>

      <Statrow><Stat ><Name>Sodium</Name>{props.sodium}{props.sodiumUnits}</Stat><Rda >{props.sodiumPercent}%</Rda></Statrow>

      <Statrow><Stat ><Name>Total Carbohydrate</Name>{props.totalCarbs}{props.totalCarbsUnits}</Stat><Rda >{props.totalCarbsPercent}%</Rda></Statrow>

      <Statrow><Stat><Subname>Dietary Fiber</Subname>{props.dietaryFiber}{props.dietaryFiberUnits}</Stat><Rda >{props.dietaryFiberPercent}%</Rda></Statrow>

      <Statrow><Stat><Subname>Total Sugars</Subname>{props.totalSugars}{props.totalSugarsUnits}</Stat><Rda >{props.totalSugarsPercent}%</Rda></Statrow>

      <Statrow><Stat><Name>Protein</Name>{props.protein}{props.proteinUnits}</Stat><Rda>{props.proteinPercent}%</Rda></Statrow>

      <hr />

      <Statrow><Stat><Subname>Calcium</Subname>{props.calcium}{props.calciumUnits}</Stat> <Rda >{props.calciumPercent}%</Rda></Statrow>

      <Statrow><Stat><Subname>Iron</Subname>{props.iron}{props.ironUnits}</Stat><Rda >{props.ironPercent}%</Rda></Statrow>

      <Statrow><Stat ><Subname>Potassium</Subname>{props.potassium}{props.potassiumUnits}</Stat><Rda>{props.potassiumPercent}%</Rda></Statrow>

      <Footnote>

        <span>*</span>
                      The % Daily Value (DV) tels how much a nutrient in a serving of food
                      contributes to a daily diet. 2,000 calories a day is used for
                      general nutrition advice
                  </Footnote>

    </Container>
  )
}
Nutrition.propTypes = {
  /** Used as title for section */
  // name: PropTypes.string,


}

export default Nutrition;
