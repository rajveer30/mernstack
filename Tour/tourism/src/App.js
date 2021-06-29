import React from 'react';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import Home from './components/Home'
import  Signup  from "../src/components/Signup"
import Jodhpur from './components/Pages/Jodhpur';
import Jaipur from './components/Pages/Jaipur';
import Signin from "../src/components/Signin";
import Udaipur from './components/Pages/Udaipur';
import Mountabu from './components/Pages/Mountabu';
import Shimla from './components/Pages/Shimla';
import Kerala from './components/Pages/Kerala';
import Package from './components/Package';

function App() {
  return (
<>
<Router>
  <Navbar/>
  <Switch>
    <Route path='/' exact  component={Home}/>
    <Route path='/Signin' component={Signin}/>
    <Route path='/Signup' component={Signup}/>
    <Route path='/jodhpur' component={Jodhpur}/>
    {/* <Route path="/Jodhpur/Mehrangarh" component={places}/> */}
    <Route path="/jaipur" component={Jaipur}/>
    <Route path="/kerala" component={Kerala}/>
    <Route path="/udaipur" component={Udaipur}/>
    <Route path="/mountabu" component={Mountabu}/>
    <Route path="/shimla" component={Shimla}/>
    <Route path="/tours" component={Package}/>

    



  </Switch>
</Router>
    </>
  );
}

export default App;