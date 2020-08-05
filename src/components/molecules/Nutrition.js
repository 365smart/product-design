import React from 'react';
import styled from 'styled-components';
import { Div } from '../atoms';
import PropTypes from 'prop-types';

const Container = styled(Div)`
  max-width: 704px;
  margin: auto;
  .stattitle{
    font-size: 32px;
    font-weight: 700;
    border-bottom: 8px solid black;
  }
  .statrow.right{
    justify-content: flex-end;
  }
  .statrow.header{
    border-bottom: 4px solid black;
    span {
      font-size: 32px;
    }
  }
  hr {
   padding: 0px;
   margin: 0px;
   border: 4px solid black;
  }
`;

const Titlerow = styled(Div)`
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid black;
  font-size: ${props => props.theme.fontSizes.lg};
  font-weight: ${props => props.theme.fontWeights.heavy};
`;

const Statrow = styled(Div)`
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid black;
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
  display: flex;
  align-items: center;
`;

const Name = styled(Div)`
  font-size: ${props => props.theme.fontSizes.sm};
  font-weight: 900;
  margin-right: ${props => props.theme.space.xxs};
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
      <div>Nutrition Facts</div>
      <Titlerow><span>Calories</span><span>{props.totalCalories}</span></Titlerow>
      <Statrow justifyContent="flex-end"><Subname>% Daily Value*</Subname></Statrow>

      {props.totalFat != null ?
        <Statrow>
          <Stat>
            <Name>Total Fat</Name>
            {props.totalFat}
            {props.totalFatUnits}
          </Stat>
          <Rda>{props.totalFatPercent}%</Rda>
        </Statrow> : <div/>
      }

      {props.saturatedFat != null ?
        <Statrow>
          <Stat>
            <Subname>Saturated Fat</Subname>{props.saturatedFat}{props.saturatedFatUnits}
          </Stat>
          <Rda>{props.saturatedFatPercent}%</Rda>
        </Statrow> : <div/>
      }

      {props.cholesterol != null ?
        <Statrow>
          <Stat>
            <Name>Cholesterol</Name>{props.cholesterol}{props.cholesterolUnits}
          </Stat>
          <Rda>{props.cholesterolPercent}%</Rda>
        </Statrow> : <div/>
      }

      {props.sodium != null ?
        <Statrow>
          <Stat>
            <Name>Sodium</Name>{props.sodium}{props.sodiumUnits}
          </Stat>
          <Rda>{props.sodiumPercent}%</Rda>
        </Statrow> : <div/>
      }

      {props.totalCarbs != null ?
        <Statrow>
          <Stat>
            <Name>Total Carbohydrate</Name>{props.totalCarbs}{props.totalCarbsUnits}
          </Stat>
          <Rda>{props.totalCarbsPercent}%</Rda>
        </Statrow> : <div/>
      }

      {props.dietaryFiber != null ?
        <Statrow>
          <Stat>
            <Subname>Dietary Fiber</Subname>{props.dietaryFiber}{props.dietaryFiberUnits}
          </Stat>
          <Rda>{props.dietaryFiberPercent}%</Rda>
        </Statrow> : <div/>
      }

      {props.totalSugars != null ?
        <Statrow>
          <Stat>
            <Subname>Total Sugars</Subname>{props.totalSugars}{props.totalSugarsUnits}
          </Stat>
          <Rda>{props.totalSugarsPercent}%</Rda>
        </Statrow> : <div/>
      }

      {props.protein != null ?
        <Statrow>
          <Stat>
            <Name>Protein</Name>{props.protein}{props.proteinUnits}
          </Stat>
          <Rda>{props.proteinPercent}%</Rda>
        </Statrow> : <div/>
      }

      <hr/>

      {props.calcium != null ?
        <Statrow>
          <Stat>
            <Subname>Calcium</Subname>{props.calcium}{props.calciumUnits}
          </Stat>
          <Rda>{props.calciumPercent}%</Rda>
        </Statrow> : <div/>
      }

      {props.iron != null ?
        <Statrow>
          <Stat>
            <Subname>Iron</Subname>{props.iron}{props.ironUnits}
          </Stat>
          <Rda>{props.ironPercent}%</Rda>
        </Statrow> : <div/>
      }

      {props.potassium != null ?
        <Statrow>
          <Stat>
            <Subname>Potassium</Subname>{props.potassium}{props.potassiumUnits}
          </Stat>
          <Rda>{props.potassiumPercent}%</Rda>
        </Statrow> : <div/>
      }

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
  /** Used as Total Calories for section */
  totalCalories: PropTypes.string,
  /** Used as Total Fat for section */
  totalFat: PropTypes.string,
  /** Used as Saturated Fat for section */
  saturatedFat: PropTypes.string,
  /** Used as Cholesterol for section */
  cholesterol: PropTypes.string,
  /** Used as Sodium for section */
  sodium: PropTypes.string,
  /** Used as Total Carbs for section */
  totalCarbs: PropTypes.string,
  /** Used as Dietary Fiber for section */
  dietaryFiber: PropTypes.string,
  /** Used as Total Sugars for section */
  totalSugars: PropTypes.string,
  /** Used as Protein for section */
  protein: PropTypes.string,
  /** Used as Calcium for section */
  calcium: PropTypes.string,
  /** Used as Iron for section */
  iron: PropTypes.string,
  /** Used as Potassium for section */
  potassium: PropTypes.string,
}

export default Nutrition;
