import React from 'react';
// import logo from './logo.svg';
// import './App.css';
import PreLoader from './PreLoader';
import Header from './Header';
// import About from './About';
// import Login from './Login';
import Issuer from './Issuer';
import Footer from './Footer';

function App() {
  return (
    <div className="App">
      <PreLoader />
      <Header />
      {/* <About /> */}
      {/* <Login /> */}
      <Issuer />
      <Footer />
    </div>
  );
}

export default App;
