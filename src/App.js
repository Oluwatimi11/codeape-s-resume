import React from 'react';
import './App.css';
import Header from "./components/Header";
import About from "./components/About";
import Services from "./components/Services";
import Signup from "./components/Signup";
import Footer from "./components/Footer";
import Home from './components/Home';
import Navbar from './components/Navbar';
import Navlink from './components/Navlink';

function App() {
  return (
    <div className="App">
      <Header>
        <Navbar>
          <Navlink />
        </Navbar>
      </Header>
      <Home />
      <About />
      <Services />
      <Signup />
      <Footer />
    </div>
  );
}

export default App;
