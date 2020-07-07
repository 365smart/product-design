import React, { useState } from 'react'
import { Header, Body, Card, Splash, Footer, Menusection } from './components';
import { ThemeProvider } from 'styled-components'
import theme from './theme'


function App() {
  const [alert, setAlert] = useState(true);
  return (
    <ThemeProvider theme={theme}>
      <Splash name="doritos"/>
      <Header name="365Dining" status="Open at 10:00 AM"/>
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
