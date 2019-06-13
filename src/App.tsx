import React, { useState, useEffect } from 'react';
import { init as initMolphene } from './modules/molphene';
import './App.scss';
import Initialize from "./components/Initialize";
import Home from "./components/Home";

export default function App(): JSX.Element {
  const [initialised, setInitialized] = useState(false);

  useEffect(() => {
    initMolphene(module => setInitialized(true));

    // eslint-disable-next-line
  }, []);

  return initialised ? <Home /> : <Initialize />;
}
