import React, { useState } from 'react'
import styled from 'styled-components';
import { Button, Header, Body, Card, Splash, Footer, Menusection } from './components';

function App() {
  const [alert, setAlert] = useState(true);
  return (
    <div>
      <Splash name="doritos" />
      <Header name="365Dining">

      </Header>
      <Body>
        <Menusection name="Specials">
        </ Menusection>
        <Menusection name="Lunch">
        </ Menusection>
        <Menusection name="Drinks">
        </ Menusection>
      </Body>

      <Footer />

      {/* {alert === true ?
        (
          <div>
            <Button label="Fake News" onClick={() => (setAlert(false))} />
            It's true
          </div>
        )
        :
        (
          <div>
            <Button label="Make it true" onClick={() => (setAlert(true))} />
          Totally False
          </div>
        )
      } */}

    </div>
  );
}

export default App;
