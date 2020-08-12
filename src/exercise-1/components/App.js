import React, {Component} from 'react';
import '../styles/App.css';
import {BrowserRouter as Router} from 'react-router-dom';
import {Switch} from 'react-router-dom';
import {Route} from 'react-router-dom';
import {Link} from 'react-router-dom'
import About from "../pages/About"
import Home from "../pages/Home"
import Profile from '../pages/Profile';
import Products from '../pages/Products';
import Product1 from '../pages/Product1';
import Product2 from '../pages/Product2';
import Product3 from '../pages/Product3';
class App extends Component {
  render() {
    return (

      <Router>
     
     <Link to="/">Home</Link>
     <Link to="p">Products</Link>
     <Link to="/m">My Profile</Link>
     <Link to="about">About Us</Link>
     
    <Switch>
     <Route exact path="/about" component={About}/>
     <Route exact path="/" component={Home}/>
     <Route exact path="/m" component={Profile}/>
     <Route exact path="/p" component={Products}/>
     <Route exact path="/goods" component={Products}/>
     <Route exact path="/product/1" component={Product1}/>
     <Route exact path="/product/2" component={Product2}/>
     <Route exact path="/product/3" component={Product3}/>

     </Switch>
      </Router>
     
      
      
      
    );
  }
}

export default App;
