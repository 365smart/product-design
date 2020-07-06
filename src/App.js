import React, { useState } from 'react'
import styled, { ThemeProvider } from 'styled-components'
import theme from './theme'

import { Button, Header, Body, Card, Splash, Footer } from './components'

function App() {
  const [alert, setAlert] = useState(true);
  return (
    <ThemeProvider theme={theme}>
      <Splash name="bella1"/>
      <Header
        label="365 Product Design"
        bg="primary"
        leftNav={<span role="img" aria-label="back">Left Nav</span>}
        rightNav={<span role="img" aria-label="next">Right Nav</span>}/>
      <Body>
        <Card>test1</Card>
        <Card>test1</Card>
        <Card>test1</Card>
        <Card>test1</Card>
        <Card>test1</Card>
        <Card>test1</Card>
        <Card>test1</Card>
        <Card>test1</Card>
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
