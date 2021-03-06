import React from 'react';
import './App.css';
import Header from '../header/Header';
import Main from '../main/Main';
import Footer from '../footer/Footer';

function App() {
  return (
    <section className="panel">
      <Header />
      <Main />
      <Footer />
    </section>
  );
}

export default App;
