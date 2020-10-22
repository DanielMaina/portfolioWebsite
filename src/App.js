import React from "react";
import { Router } from "react-router-dom";
import "./App.css";

import Home from "./pages/Home";
import History from "./pages/History";
import Error from "./pages/Error";
import Navbar from "./components/landing/Navbar";

import {Route, Switch} from 'react-router-dom';

function App() {
  return (
    <>
      <Navbar />
      <Route exact path="/" component={Home} 
      />
      <Route exact path="/history" component={History} />
    </>

  );
}

export default App;
