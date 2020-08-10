import React, { useState } from 'react';
import { Body, Img, Modal, Tray, Footer, Icon } from './components/atoms';
import { Splash, Header, Menusection, Itemaddremove, Slider, Slideset, Footermessage, Footernav } from './components/molecules';
import { Productadded, Productdetail, Help, Search, Myaccount, Returnitems } from './components/organisms';
import { ThemeProvider } from 'styled-components';
import theme from './theme';

function App(props) {
  const [modal, setModal] = useState(false);
  const [tray, setTray] = useState(false);
  const [removeIt, setRemoveIt] = useState(0);
  const [cartTotal, setCartTotal] = useState(0);
  const [addAmount, setAddAmount] = useState(0);
  const [productName, setProductName] = useState(0);
  const [productPrice, setProductPrice] = useState(0);
  const newTotal = addAmount + cartTotal - removeIt;
  function itemAdded(newTotal) {
    setRemoveIt(0);
    setCartTotal(newTotal);
    setTray('Productadded');
  }
  function startOver() {
    setAddAmount(0);
    setCartTotal(0);
    setModal('Returnitems')
    // setRemoveIt(0);
  }



  return (
    <ThemeProvider theme={theme}>
      <Splash images={<Img variant="cover" name="doritos" location="Products/Upsales" fileType="jpg" />}>
        <Itemaddremove />
      </Splash>
      <Header logoName="365Dining" logoLocation="Diners/Logos" logoFileType="png" bgName="365Dining" bgLocation="Diners/BG" status="Opens at 10:00 AM" bgFileType="jpg" />
      <Body variant="PBStandard">
        <Menusection name="Specials" setProductPrice={setProductPrice} setProductName={setProductName} onProductDetail={() => setModal('ProductDetail')} dietarySet="productCard" />
        <Menusection name="Lunch" setProductPrice={setProductPrice} setProductName={setProductName} onProductDetail={() => setModal('ProductDetail')} dietarySet="productCard" />
        <Menusection name="Drinks" setProductPrice={setProductPrice} setProductName={setProductName} onProductDetail={() => setModal('ProductDetail')} dietarySet="productCard" />
      </Body>
      <Footer>
        <Slider sliderMessage="Tap for more choices">
          <Slideset slideSet="diners" />
        </Slider>
        <Footermessage icons={<Icon name="barcode" />} footerMessage="Scan an item at any time" />
        <Footernav onStartOver={() => startOver()} newTotal={newTotal.toFixed(2)} onHelp={() => setModal('Help')} onSearch={() => setModal('Search')} onMyAccount={() => setModal('MyAccount')} navSet="main" onClose={() => setModal(false)} />
      </Footer>

      {modal === 'Help' ?
        (
          <Modal>
            <Help onClose={() => setModal(false)} />
          </Modal>
        )
        :
        (
          <div />
        )
      }

      {modal === 'Search' ?
        (
          <Modal>
            <Search onClose={() => setModal(false)} />
          </Modal>
        )
        :
        (
          <div />
        )
      }

      {modal === 'MyAccount' ?
        (
          <Modal>
            <Myaccount onClose={() => setModal(false)} />
          </Modal>
        )
        :
        (
          <div />
        )
      }

      {modal === 'ProductDetail' ?
        (
          <Modal>
            <Productdetail
              cal="723"
              basePrice={productPrice}
              onClose={() => setModal(false)}
              addAmount={addAmount}
              setAddAmount={setAddAmount}
              productName={productName}
              newTotal={newTotal}
              onAdd={() => itemAdded(newTotal)}
              dietarySet="productDetail"
              cartTotal={cartTotal} />
          </Modal>
        )
        :
        (
          <div />
        )
      }
      {modal === 'Returnitems' ?
        (
          <Modal>
            <Returnitems onClose={() => setModal(false)} />
          </Modal>
        )
        :
        (
          <div />
        )
      }
      {tray === 'Productadded' ?
        (
          <Tray>
            <Productadded productName={productName} addAmount={addAmount} onClose={() => setTray(false)} removeIt={() => setRemoveIt(addAmount)} />
          </Tray>
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
