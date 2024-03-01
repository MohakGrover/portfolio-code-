import logo from './logo.svg';
import './App.css';
import React from 'react';
import Navbar from './navbar';
import './navbar.css';
import AppName from './AppNAme';




function App() {
  return (

    <div className="App">
      <div className="App">
      <Navbar />
      {/* other components and content */}
    </div>
      <header className="App-header">
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
        </a>
        <div className="App">
      <AppName />
      {/* other components and content */}
    </div>
      </header>
    </div>
  );
}

export default App;
