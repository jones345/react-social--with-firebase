import React from 'react';
 import SignUp from './SignUp/SignUp';
 import SignIn from './SignIn/SignIn';
 import PasswordForget from './PasswordForget/PasswordForget';
 import Home from './Home/Home'
 import Header from './Header/Header'
 import SideBar from './Navigation/SideBar'
 import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
const App = () => (
 
<Router>
    <Switch>
    <Route  exact path="/" component={SignUp}/>
    <Route  exact path="/signup" component={SignIn}/>
    <Route  exact path="/forgot" component={PasswordForget}/>
    <Route  exact path="/Home" component={Home}/>
    </Switch>
 </Router>
 
  
);
 
export default App;