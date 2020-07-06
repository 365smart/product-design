import React, { useState } from 'react'
import styled from 'styled-components';
import { Button, Header, Body, Card, Splash, Footer } from './components';

function App() {
  const [alert, setAlert] = useState(true);
  return (
    <div>
      <img src='./static/img/Product/bella1.jpg'></img>
      <Header label="365 Product Design" bgColor="orange" >
        <span role="img" aria-label="smiley">😀</span>
      </Header>
      <Body>
        <Card>test1</Card>
        <Card>test1</Card>
        <Card>test1</Card>
        <Card>test1</Card>
        <Card>test1</Card>
        <Card>test1</Card>
        <Card>test1</Card>
        <Card>test1</Card>
      </ Body>
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
