import React from 'react';
import './App.css';
import {Route, Switch} from "react-router-dom";
import Header from "./components/Header/Header"; 
import Auth from "./components/Auth/Auth"; 
import Dashboard from "./components/Dashboard/Dashboard"; 
import Cellar from "./components/Cellar/Cellar";
import Form from "./components/Form/Form";  

function App() {
  return (
    <div className="App">
      <Header/>
      <Switch>
        <Route exact path="/" component={Auth}/>
        <Route path="/dashboard" component={Dashboard}/>
        <Route path="/cellar" component={Cellar}/>
        <Route path="/form" component={Form}/>
      </Switch>
    </div>
  );
}

export default App;
