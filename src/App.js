import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import styled from 'styled-components';

const Wrapper = styled.div`
  height: 100vh;
  width: 100vw;
  background-color: papayawhip;
`;

function App() {
  return (
    <Wrapper>
      <Header>

      </Header>
    </Wrapper>
  );
}

export default App;
