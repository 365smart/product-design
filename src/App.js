import React from 'react';

import styled from 'styled-components';

const Header = styled.div`
  padding: 16px;
  background: red;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-size: 18px;
  line-height: 24px;
`;

const Button = styled.button`
  padding: 8px 16px;
  background: blue;
  color: white;
  font-size: 14px;
  border: none;
  outline: none;
  border-radius: 8px;
  margin: 16px;
  &:active {
    background: darkblue;
  }
`;

function App() {
  return (
    <div className="App">
      <Header>
        I am the header
      </Header>
      <Button>
        Press Me
      </Button>
    </div>
  );
}

export default App;
