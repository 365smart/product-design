import React, { useState } from 'react'
import { Button, Header, Body, Card, Splash, Footer, Menusection } from './components';
import styled, { ThemeProvider } from 'styled-components'
import theme from './theme'


function App() {
  const [alert, setAlert] = useState(true);
  return (
    <ThemeProvider theme={theme}>
      <Splash name="doritos"/>
      <Header
        label="365 Product Design"
        name="365Dining"
        bg="primary"
        leftNav={<span role="img" aria-label="back">Left Nav</span>}
        rightNav={<span role="img" aria-label="next">Right Nav</span>}/>
      <Body>
        <Menusection name="Specials"/>
        <Menusection name="Lunch"/>
        <Menusection name="Drinks"/>
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

    </ThemeProvider>
  );
}

export default App;
