import React, { useState } from 'react';
import { Body, Img, Modal, Button } from './components/atoms';
import { Splash, Footer, Header, Menusection, Itemaddremove } from './components/molecules';
import { Productdetail } from './components/organisms';
import { ThemeProvider } from 'styled-components';
import theme from './theme';

function App() {
  const [modal, setModal] = useState(false);

  return (
    <ThemeProvider theme={theme}>
      <Splash images={<Img variant="cover" name="doritos" location="Products/Upsales" fileType="jpg" />}>
        <Itemaddremove />
      </Splash>
      <Header logoName="365Dining" logoLocation="Diners/Logos" logoFileType="png" bgName="365Dining" bgLocation="Diners/BG" status="Opens at 10:00 AM" bgFileType="jpg" />
      <Body variant="PBStandard">
        <Button onClick={() => setModal(true)}>click this</Button>
        <Menusection name="Specials" />
        <Menusection name="Lunch" />
        <Menusection name="Drinks" />
      </Body>
      <Footer onClick={() => setModal(true)}/>


      {modal === true ?
        (
          <Modal onClose={() => setModal(false)}>
            <Productdetail />
          </Modal>
        )
        :
        (
          <div />
        )
      }

    </ThemeProvider>
  );



}

export default App;
