import React from 'react';
import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import ListEmployeeComponent from './components/ListEmployeeComponent';
import HeaderComponent from './components/HeaderComponent';
import FooterComponent from './components/FooterComponent';
import CreateEmployeeComponet from './components/CreateEmployeeComponet';
import UpdateEmployeeComponent from './components/UpdateEmployeeComponent';
import ViewEmployeeComponent from './components/ViewEmployeeComponent';


function App() {
  return (
    <div>
      <Router>
        <div>
          <HeaderComponent />     
          <div className="container"> 
            <Switch>
              <Route path="/" exact component={ListEmployeeComponent}></Route>
              <Route path="/employees" component= {ListEmployeeComponent}></Route>
              <Route path="/add-employee" component= {CreateEmployeeComponet}></Route>
              <Route path="/update-employee/:id" component= {UpdateEmployeeComponent}></Route>
              <Route path="/view-employee/:id" component={ViewEmployeeComponent}></Route>
            </Switch>
          </div>
          <FooterComponent />      
        </div>
      </Router>
    </div>
  );
}

export default App;
