import React from 'react';
import styled from 'styled-components';
import AppRouter from './Router';
import Header from './components/sections/Header';
import Footer from './components/sections/Footer';

import './scss/main.scss'

const Container = styled.div``;

class App extends React.PureComponent {
  render() {
    return (
      <Container>
        <Header />
          <AppRouter />
        <Footer />
      </Container>
    );
  }
}

export default App;
