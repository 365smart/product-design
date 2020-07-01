import React, { useState } from 'react'
import styled from 'styled-components';
import { Button, Header } from './components';

function App() {
  const [alert, setAlert] = useState(true);
  return (
    <div>
      <Header label="365 Product Design"/>
      {alert === true ?
        (
          <div>
            <Button label="Fake News" onClick={() => (setAlert(false))}/>
            It's true
          </div>
        )
        :
        (
        <div>
          <Button label="Make it true" onClick={() => (setAlert(true))}/>
          Totally False
        </div>
        )
      }
    </div>
  );
}

export default App;
