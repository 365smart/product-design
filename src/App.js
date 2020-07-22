import React, { useState } from 'react';
import { Body, Img, Modal } from './components/atoms';
import { Splash, Footer, Header, Menusection, Itemaddremove } from './components/molecules';
import { Productdetail } from './components/organisms';
import { ThemeProvider } from 'styled-components';
import theme from './theme';

function App() {
  // const [alert, setAlert] = useState(true);

  return (
    <ThemeProvider theme={theme}>
      <Splash images={<Img variant="cover" name="doritos" location="Products/Upsales" fileType="jpg" />}>
        <Itemaddremove />
      </Splash>
      <Header logoName="365Dining" logoLocation="Diners/Logos" logoFileType="png" bgName="365Dining" bgLocation="Diners/BG" status="Opens at 10:00 AM" bgFileType="jpg" />
      <Body variant="PBStandard">
        <Menusection name="Specials" />
        <Menusection name="Lunch" />
        <Menusection name="Drinks" />
      </Body>
      <Footer />
      <Modal >
        <Productdetail />
      </Modal>

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
