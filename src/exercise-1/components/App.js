import React, {Component} from 'react';
import '../styles/App.css';
import {BrowserRouter as Router} from 'react-router-dom';
import {Switch} from 'react-router-dom';
import {Route} from 'react-router-dom';
import {Link} from 'react-router-dom'
import About from "../pages/About"
import Profile from '../pages/Profile';
import Products from '../pages/Products';
import Product from '../pages/Product';
import Home from '../pages/Home'
class App extends Component {
  
  render() {
    return (
      <Router>
     <Link to="/">购物车</Link>
     <Link to="/orders">订单</Link>
     <Link to="addgoods">+</Link>
    <Switch>
     <Route exact path="/addgoods" component={About}/>
     <Route exact path="/orders" component={Profile}/>
     <Route exact path="/" component={Home}/>
     </Switch>
      </Router>
    );
  }

  AddToCar = () => {
    this.setState({ carNum: this.state.carNum + 1 });
  };
}

export default App;
