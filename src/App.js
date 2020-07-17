import React, { useState } from 'react';
import { Menusection } from './components';
import { Body, Img, Div, Icon, Button } from './components/atoms';
import { Splash, Footer, Header } from './components/molecules';
import { ThemeProvider } from 'styled-components';
import theme from './theme';

function App() {
  // const [alert, setAlert] = useState(true);

  return (
    <ThemeProvider theme={theme}>
      <Splash images={<Img variant="cover" name="doritos" location="Products/Upsales" fileType="jpg" />}>
        <Div variant="controlsTR">
          <Button variant="controlGhostDark"><Icon variant="forControls" name="info" /></Button>
          <Button variant="control" ><Icon variant="forControls" name="add" /></Button>
        </Div>
      </Splash>
      <Header logoName="365Dining" logoLocation="Diners/Logos" logoFileType="png" bgName="365Dining" bgLocation="Diners/BG" status="Opens at 10:00 AM" bgFileType="jpg" />
      <Body>
        <Menusection name="Specials" />
        <Menusection name="Lunch" />
        <Menusection name="Drinks" />
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
