import React from 'react';
import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react/cjs/react.production.min';
import ListadoPeliculas from './ListadoPeliculas';
import { BrowserRouter, Route } from 'react-router-dom';
import Blog from './Blog';


function App() {

  return(
    <BrowserRouter>
    <Switch>
      <Route path="/">
      <Blog/>
      </Route>
      <Route path="/">
      <ListadoPeliculas/>
      </Route>
    </Switch>
    </BrowserRouter>
    
  )
  ();
}


export default App;
