import React from 'react';
import Navigation from '../src/components/Navigation';
import Hero from '../src/components/Jumbotron';
import Project from '../src/components/Project';
import About from '../src/components/About';
import './App.css';

function App() {
  return (
    <div>
      <Navigation />
      <Hero />
      <About />
      <Project />
    </div>
  );
}

export default App;
