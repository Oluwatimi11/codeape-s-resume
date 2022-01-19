import React from 'react';
import './App.css';
import Header from "./components/Header";
import About from "./components/About";
import Services from "./components/Services";
import Signup from "./components/Signup";
import Footer from "./components/Footer";
import Home from './components/Home';

function App() {
  return (
    <div className="App">
      <Header />
      <Home />
      <About />
      <Services />
      <Signup />
      <Footer />
    </div>
  );
}

export default App;
