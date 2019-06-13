import React from 'react';
import reactLogo from '../react-logo.svg';
import "./Initialize.scss"

export default function Initialize(): JSX.Element {
  return (
    <div className="App">
      <header className="App-header">
        <img src={reactLogo} className="App-logo" alt="logo" />
        <p>
          Initializing...
        </p>
      </header>
    </div>
  );
}
