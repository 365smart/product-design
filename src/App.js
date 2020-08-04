import React, { useState } from 'react';
import { Body, Img, Modal, Button, Footer, Icon } from './components/atoms';
import { Splash, Header, Menusection, Itemaddremove, Slider, Slideset, Footermessage, Footernav } from './components/molecules';
import { Productdetail, Help, Search, Myaccount } from './components/organisms';
import { ThemeProvider } from 'styled-components';
import theme from './theme';

function App(props) {
  const [modal, setModal] = useState(false);
  const [cartTotal, setCartTotal] = useState(0);
  const [addAmount, setAddAmount] = useState(0);
  const newTotal = addAmount + cartTotal;


  return (
    <ThemeProvider theme={theme}>
      <Splash images={<Img variant="cover" name="doritos" location="Products/Upsales" fileType="jpg" />}>
        <Itemaddremove />
      </Splash>
      <Header logoName="365Dining" logoLocation="Diners/Logos" logoFileType="png" bgName="365Dining" bgLocation="Diners/BG" status="Opens at 10:00 AM" bgFileType="jpg" />
      <Body variant="PBStandard">
        <Menusection name="Specials" onProductDetail={() => setModal('ProductDetail')} dietarySet="productCard" />
        <Menusection name="Lunch" onProductDetail={() => setModal('ProductDetail')} dietarySet="productCard" />
        <Menusection name="Drinks" onProductDetail={() => setModal('ProductDetail')} dietarySet="productCard" />
      </Body>
      <Footer>
        <Slider sliderMessage="Tap for more choices">
          <Slideset slideSet="diners" />
        </Slider>
        <Footermessage icons={<Icon name="barcode" />} footerMessage="Scan an item at any time" />
        <Footernav newTotal={newTotal.toFixed(2)} onHelp={() => setModal('Help')} onSearch={() => setModal('Search')} onMyAccount={() => setModal('MyAccount')} navSet="main" onClose={() => setModal(false)} />


      </Footer>
      {modal === 'Help' ?
        (
          <Modal>y
            <Help onClose={() => setModal(false)} />
          </Modal>
        )
        :
        (
          modal === 'Search' ?
            (
              <Modal>
                <Search onClose={() => setModal(false)} />
              </Modal>
            )
            :
            (
              modal === 'MyAccount' ?
                (
                  <Modal>
                    <Myaccount onClose={() => setModal(false)} />
                  </Modal>
                )
                :
                (
                  modal === 'ProductDetail' ?
                    (
                      <Modal>
                        <Productdetail
                          cal="723"
                          basePrice={8.25}
                          onClose={() => setModal(false)}
                          addAmount={addAmount}
                          setAddAmount={setAddAmount}
                          newTotal={newTotal}
                          onAdd={() => setCartTotal(newTotal)}
                          dietarySet="productDetail"
                          cartTotal={cartTotal} />
                      </Modal>
                    )
                    :
                    (
                      <div />
                    )
                )
            )

        )
      }

    </ThemeProvider>
  );



}

export default App;
