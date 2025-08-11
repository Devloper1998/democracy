// src\App.js
// import logo from './logo.svg';
import './App.css';
import React from 'react'
import Pagerouters from './Pagerouters';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';

function App() {
  return (
 <>
 <Navbar/>
 <Pagerouters/>
 <Footer/>
 </>
  );
}

export default App;
