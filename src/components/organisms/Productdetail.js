import React, { useState } from 'react';
import styled from 'styled-components';
import { Div, Button, Icon, Body, Img, Footer, Title, Text } from '../atoms';
import { Dietary, Splash, Itemaddremove, Footernav, Nutrition, Slider, Slideset } from '../molecules';

const StyledDiv = styled(Div)`
  width:100%;
`;

const Details = styled(Div)`
  width: 100%;
  background-color: ${props => props.theme.colors.mistdark};
  padding: ${props => props.theme.space.md};
  text-align: center;
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
align-items: center;
`;

const AccordionSubhead = styled(Div)`
  display: flex;
  width: 100%;
  font-size: ${props => props.theme.fontSizes.lg};
  padding: ${props => props.theme.space.md};
  padding-bottom: ${props => props.theme.space.xxs};
  padding-top: 0px;
  align-items: center;
  line-height: ${props => props.theme.lineHeights.lg};
`;

const AccordionNote = styled(Div)`
color: ${props => props.theme.colors.grey};
font-size: ${props => props.theme.fontSizes.md};
margin: ${props => props.theme.space.xxxs};
`;

const AccordionControl = styled(Div)`
display: flex;
color:  ${props => props.theme.colors.white};
margin: ${props => props.theme.space.xxs};
border-radius: ${props => props.theme.radii.xl};
padding: 0px;
flex: 0 1 0;
align-items: center;
font-size: ${props => props.theme.fontSizes.lg};
button{
  margin:0px;
  background-color: inherit;
}
`;

const AccordionContent = styled(Div)`
`;

const AccordionOption = styled(Div)`
  padding-bottom: ${props => props.theme.space.md}
`;

const Tabs = styled(Div)`
  display: flex;
  justify-content: flex-start;
  flex-wrap: wrap;
  width: 100%;
  padding: ${props => props.theme.space.md};
  padding-bottom: 0px;
  padding-top: 0px;
`;

const Tab = styled(Button)`
  border-radius: ${props => props.theme.radii.xl};
  margin: ${props => props.theme.space.xxxs};
  background-color: ${props => props.theme.colors.tab};
  color: ${props => props.theme.colors.black};
  font-weight: ${props => props.theme.fontWeights.light};
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
              <AccordionContent>
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
              <AccordionContent>
                <Nutrition
                  totalCalories={888}

                  totalFat={33}
                  totalFatUnits={'g'}
                  totalFatPercent={51}

                  saturatedFat={5}
                  saturatedFatUnits={'g'}
                  saturatedFatPercent={26}

                  cholesterol={56}
                  cholesterolUnits={'mg'}
                  cholesterolPercent={19}

                  sodium={632}
                  sodiumUnits={'mg'}
                  sodiumPercent={26}

                  totalCarbs={101}
                  totalCarbsUnits={'g'}
                  totalCarbsPercent={0}

                  dietaryFiber={12}
                  dietaryFiberUnits={'g'}
                  dietaryFiberPercent={49}

                  totalSugars={9}
                  totalSugarsUnits={'g'}
                  totalSugarsPercent={0}

                  protein={41}
                  proteinUnits={'g'}
                  proteinPercent={82}

                  calcium={41}
                  calciumUnits={'mg'}
                  calciumPercent={82}

                  iron={5}
                  ironUnits={'mg'}
                  ironPercent={28}

                  potassium={747}
                  potassiumUnits={'mg'}
                  potassiumPercent={21}
                />
              </AccordionContent>
            )
            :
            (
              <div />
            )}

        </AccordionSection>
        {/* Add Amount: {props.addAmount} <br />
              Product Price: {totalPrice} <br />
              Cart Total: {props.cartTotal} <br />
              Next Cart Total: {props.newTotal} */}
      </Body>
      <Footer>
        <Slider sliderMessage="You might want to add">
          <Slideset slideSet="products" />
        </Slider>
        <Footernav
          navSet="product"
          onAdd={props.onAdd}
          setAddAmount={props.setAddAmount}
          addAmount={totalPrice}
          totalCost={totalPrice}
          onClose={props.onClose} />
      </Footer>
    </StyledDiv>
  );
}

Productdetail.propTypes = {
  /** Image type */
  // variant: PropTypes.string,
}

export default Productdetail;
