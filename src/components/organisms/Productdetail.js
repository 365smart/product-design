import React, { useState } from 'react';
import styled from 'styled-components';
import { Div, Button, Icon, Body, Img, Footer, Title, Text } from '../atoms';
import { Dietary, Splash, Itemaddremove, Footernav, Slider, Slideset } from '../molecules';

const StyledDiv = styled(Div)`
width:100%;
`;

const Details = styled(Div)`
width:100%;
background-color: ${props => props.theme.colors.mistdark};
padding: ${props => props.theme.space.md};
text-align:center;
`;

const AccordionSection = styled(Div)``;
const AccordionHead = styled(Div)`
display: flex;
width: 100%;
padding: ${props => props.theme.space.md};
margin: 0px;
font-size: ${props => props.theme.fontSizes.xl};
font-weight: ${props => props.theme.fontWeights.heavy};
justify-content: space-between;
align-items:center;
`;
const AccordionSubhead = styled(Div)`
display:flex;
width: 100%;
font-size: ${props => props.theme.fontSizes.lg};
padding: ${props => props.theme.space.md};
padding-bottom:${props => props.theme.space.xxs};
padding-top:0px;
align-items:center;
line-height:1em;
`;
const AccordionNote = styled(Div)`
color:${props => props.theme.colors.grey};
font-size:${props => props.theme.fontSizes.md};
margin:${props => props.theme.space.xxxs};
`;
const AccordionControl = styled(Div)`
display:flex;
color:  ${props => props.theme.colors.white};
margin: ${props => props.theme.space.xxs};
border-radius: ${props => props.theme.radii.xl};
padding:0px;
flex:0 1 0;
align-items:center;
font-size: ${props => props.theme.fontSizes.lg};
button{
    margin:0px; 
    background-color:inherit;
}

`;
const AccordionContent = styled(Div)`



  .nutrition-info {
    max-width:704px;
    margin:auto;  


    h2 {
      margin: 0;
      padding: 0;
      font-size: 16px;
      display: inline;
    }

    h3 {
      font-weight: normal;
      margin: 0;
      padding:0px;
      padding-left:15px;
      font-size: 15px;
      display: inline;
    }
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
  }

`;
const Statrow = styled(Div)`
display:flex;
justify-content:space-between;
border-bottom:1px solid black;
span:last-child{
  font-weight:900;
}
h1 {
  margin:0px;
  padding:0px;
  font-size: 28px;
  display: inline;
}
`;
const Footnote = styled(Div)`
border-top: 4px solid black;
display:flex;
justify-content:flex-start;
align-items:flex-start;
span{
  font-size:2em;
}
`;


const AccordionOption = styled(Div)`
padding-bottom: ${props => props.theme.space.md}
`;
const Tabs = styled(Div)`
display:flex;
justify-content:flex-start;
flex-wrap:wrap;
width:100%;
padding: ${props => props.theme.space.md};
padding-bottom:0px;
padding-top:0px;
`;
const Tab = styled(Button)`
border-radius:${props => props.theme.radii.xl};
margin: ${props => props.theme.space.xxxs};
background-color:${props => props.theme.colors.tab};
color:${props => props.theme.colors.black};
font-weight:${props => props.theme.fontWeights.light};
`;


function Productdetail(props) {
  const [isToggled, setToggled] = useState(false);
  function toggleTarget(name) {
    if (isToggled === name) {
      setToggled()
    }
    else {
      setToggled(name);
    }
  }

  const [meatIsToggled, setMeatToggled] = useState(false);
  const [cheeseIsToggled, setCheeseToggled] = useState(false);
  const [toppingsIsToggled, setToppingsToggled] = useState(false);
  const [caloriesAddedCheese, setCaloriesCheese] = useState(0);
  const [caloriesAddedToppings, setCaloriesToppings] = useState(0);
  const [modifierPrice, setModifierPrice] = useState(0.00);
  const [totalPrice, setTotalPrice] = useState(props.basePrice);

  function toggleMeat(name) {
    if (meatIsToggled === name) {
      setMeatToggled();
    }
    else {
      setMeatToggled(name);
    }

  }
  function toggleCheese(name) {
    if (cheeseIsToggled === name) {
      setCheeseToggled();
      setCaloriesCheese(caloriesAddedCheese - 150);
    }
    else {
      setCheeseToggled(name);
      if (caloriesAddedCheese <= 0) {
        setCaloriesCheese(0);
        setCaloriesCheese(caloriesAddedCheese + 150);
      }
    }
  }



  function toggleToppings(name, price) {
    if (toppingsIsToggled === name) {
      setToppingsToggled();
      setCaloriesToppings(caloriesAddedToppings - 250);
      setModifierPrice(modifierPrice - price);
      setTotalPrice(totalPrice - modifierPrice);
    }
    else {
      setToppingsToggled(name);
      if (caloriesAddedToppings <= 0) {

        setCaloriesToppings(0);
        setCaloriesToppings(caloriesAddedToppings + 250);
        setModifierPrice(modifierPrice + price);
        setTotalPrice(modifierPrice + price + parseFloat(props.basePrice));

      }
      else {
        setModifierPrice(modifierPrice + price);
        setTotalPrice(modifierPrice + price + parseFloat(props.basePrice));


      }
    }

  }









  return (
    <StyledDiv {...props}>
      {props.children}
      <Splash images={<Img variant="cover" name="burger1" location="Products" fileType="jpg" />}>
        <Itemaddremove />
      </Splash>
      <Body variant="PBStandard">
        <Title variant="xxlHeadSticky">
          <Text>Name of Product</Text>
          <Text>${props.basePrice}</Text>
        </Title>
        <Details>
          <Dietary cal={props.cal} dietarySet={props.dietarySet} />
          <Text>Mediterranean flavors combine in this classic sub with an herby kalamata olive and tomato tapenade spread over deli slice ham, salami, and pepperoni w/ shredded lettuce.</Text>
        </Details>

        <AccordionSection>

          <AccordionHead>
            <Text>Modifiers</Text>
            <AccordionControl bg={"modifiers" === isToggled ? "black" : "primary"} >
              {caloriesAddedToppings + caloriesAddedCheese > 0 ? (
                <Div display="flex" alignItems="center"><Text ml="sm" mr="xxs" color="white" >{caloriesAddedToppings + caloriesAddedCheese}</Text><Text fontSize="sm" color="white">CALS</Text></Div>
              ) : (<div />)}
              <Button variant="xlCircle" >
                <Icon variant="forControls" name={"modifiers" === isToggled ? "chevron-up-white" : "chevron-down-white"} onClick={() => toggleTarget('modifiers')} />
              </Button>
            </AccordionControl>
          </AccordionHead>

          {isToggled === "modifiers" ?
            (
              < AccordionContent >
                <AccordionOption>
                  <AccordionSubhead>Meat Temperature <AccordionNote>(Select One)</AccordionNote></AccordionSubhead>
                  <Tabs>
                    <Button variant={'Rare' === meatIsToggled ? "mdPillActive" : "mdPill"} onClick={() => toggleMeat('Rare')} label="Rare" />
                    <Button variant={'Medium Rare' === meatIsToggled ? "mdPillActive" : "mdPill"} onClick={() => toggleMeat('Medium Rare')} label="Medium Rare" />
                    <Button variant={'Medium' === meatIsToggled ? "mdPillActive" : "mdPill"} onClick={() => toggleMeat('Medium')} label="Medium" />
                    <Button variant={'Medium Well' === meatIsToggled ? "mdPillActive" : "mdPill"} onClick={() => toggleMeat('Medium Well')} label="Medium Well" />
                    <Button variant={'Well' === meatIsToggled ? "mdPillActive" : "mdPill"} onClick={() => toggleMeat('Well')} label="Well" />
                  </Tabs>
                </AccordionOption>
                <AccordionOption>
                  <AccordionSubhead>Cheese Choice<AccordionNote>(Select One)</AccordionNote></AccordionSubhead>
                  <Tabs>
                    <Button variant={'American' === cheeseIsToggled ? "mdPillActive" : "mdPill"} onClick={() => toggleCheese('American')} label="American" />
                    <Button variant={'Cheddar' === cheeseIsToggled ? "mdPillActive" : "mdPill"} onClick={() => toggleCheese('Cheddar')} label="Cheddar" />
                    <Button variant={'Swiss' === cheeseIsToggled ? "mdPillActive" : "mdPill"} onClick={() => toggleCheese('Swiss')} label="Swiss" />
                  </Tabs>
                </AccordionOption>
                <AccordionOption>
                  <AccordionSubhead>Toppings<AccordionNote>(Select Any)</AccordionNote></AccordionSubhead>
                  <Tabs>
                    <Button variant={'Tomatoes' === toppingsIsToggled ? "mdPillActive" : "mdPill"} onClick={() => toggleToppings('Tomatoes', 0.00)} label="Tomatoes" />
                    <Button variant={'Onions' === toppingsIsToggled ? "mdPillActive" : "mdPill"} onClick={() => toggleToppings('Onions', 0.00)} label="Onions" />
                    <Button variant={'Lettuce' === toppingsIsToggled ? "mdPillActive" : "mdPill"} onClick={() => toggleToppings('Lettuce', 0.00)} label="Lettuce" />
                    <Button variant={'Pickles' === toppingsIsToggled ? "mdPillActive" : "mdPill"} onClick={() => toggleToppings('Pickles', 0.00)} label="Pickles" />
                    <Button variant={'Bacon' === toppingsIsToggled ? "mdPillActive" : "mdPill"} onClick={() => toggleToppings('Bacon', 1.00)} label="Bacon + $1.00" />
                  </Tabs>
                </AccordionOption>
              </AccordionContent>
            )
            :
            (
              <div />
            )}

        </AccordionSection>


        <AccordionSection>

          <AccordionHead>
            <Text>Add a Note</Text>
            <AccordionControl bg={"addANote" === isToggled ? "black" : "primary"} >
              <Button variant="xlCircle" >
                <Icon variant="forControls" name={"addANote" === isToggled ? "add" : "add"} onClick={() => toggleTarget('addANote')} />
              </Button>
            </AccordionControl>
          </AccordionHead>

          {isToggled === "addANote" ?
            (
              <Div p="xl" fontSize="xl" textAlign="center">Add a note will launch a note creation tray</Div>
            )
            :
            (
              <div />
            )}

        </AccordionSection>


        <AccordionSection>

          <AccordionHead>
            <Text>Nutritional Information</Text>
            <AccordionControl bg={"nutrition" === isToggled ? "black" : "primary"} >
              <Button variant="xlCircle" >
                <Icon variant="forControls" name={"nutrition" === isToggled ? "chevron-up-white" : "chevron-down-white"} onClick={() => toggleTarget('nutrition')} />
              </Button>
            </AccordionControl>
          </AccordionHead>

          {isToggled === "nutrition" ?
            (
              < AccordionContent >


                <div class="nutrition-info">
                  <div class="stattitle">Nutrition Facts</div>
                  <Statrow><h1>Calories</h1><span>888</span></Statrow>
                  <Statrow justifyContent="flex-end"><h3>% Daily Value*</h3></Statrow>
                  <Statrow><span ><h2>Total Fat</h2>33g</span><span>51%</span></Statrow>
                  <Statrow><span><h3>Saturated Fat</h3>5g</span><span>26%</span></Statrow>
                  <Statrow><span><h2>Cholesterol</h2>56mg</span><span>19%</span></Statrow>
                  <Statrow><span ><h2>Sodium</h2>632mg</span><span >26%</span></Statrow>
                  <Statrow><span ><h2>Total Carbohydrate</h2>101g</span><span >%</span></Statrow>
                  <Statrow><span><h3>Dietary Fiber</h3>12g</span><span >49%</span></Statrow>
                  <Statrow><span><h3>Total Sugars</h3>9g</span><span >%</span></Statrow>
                  <Statrow><span><h2>Protein</h2>41g</span><span>82%</span></Statrow>
                  <hr />
                  <Statrow><span><h3>calcium</h3>41mg</span> <span >82%</span></Statrow>
                  <Statrow><span><h3>Iron</h3>5mg</span><span >28%</span></Statrow>
                  <Statrow><span ><h3>potassium</h3> 747mg</span><span>21%</span></Statrow>
                  <Footnote>
                    <span>*</span>
                      The % Daily Value (DV) tels how much a nutrient in a serving of food
                      contributes to a daily diet. 2,000 calories a day is used for
                      general nutrition advice
                  </Footnote>
                </div>

              </AccordionContent>
            )
            :
            (
              <div />
            )}

        </AccordionSection>


      </Body>
      <Footer>
        <Slider sliderMessage="You might want to add">
          <Slideset slideSet="products" />
        </Slider>
        <Footernav navSet="product" totalCost={totalPrice} onClose={props.onClose} />
      </Footer>
    </StyledDiv >
  );
}

Productdetail.propTypes = {
  /** Image type */
  // variant: PropTypes.string,
}

export default Productdetail;

