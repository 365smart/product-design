import React, { useState } from 'react'
<<<<<<< HEAD
import styled from 'styled-components';
import { Button, Header, Body, Card, Splash, Footer, Menusection } from './components';
=======
import styled, { ThemeProvider } from 'styled-components'
import theme from './theme'

import { Button, Header, Body, Card, Splash, Footer } from './components'
>>>>>>> 5180f52cc536724e563b5faf29446a4c05ef3b21

function App() {
  const [alert, setAlert] = useState(true);
  return (
<<<<<<< HEAD
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

=======
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
>>>>>>> 5180f52cc536724e563b5faf29446a4c05ef3b21
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
