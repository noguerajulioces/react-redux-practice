import React from 'react';
import Header from './components/Header';
import Productos from './components/Productos';
import NuevoProducto from './components/NuevoProducto';
import EditarProducto from './components/EditarProducto';

import {BrowserRouter as Router, Route, Switch } from 'react-router-dom';

function App() {
  return (
    <Router>
      <Header />

      <div className="container">
        <Switch>
          <Route exact path="/" component={Productos}></Route>
          <Route exact path="/productos/nuevo" component={NuevoProducto}></Route>
          <Route exact path="/productos/editar/:id" component={NuevoProducto}></Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
