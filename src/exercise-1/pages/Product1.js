import React, {Component} from 'react';
import { Link, Router } from 'react-router-dom';
import {Switch} from 'react-router-dom';
import {Route} from 'react-router-dom';
class Product1 extends Component {
state = {
 
  one:{id:1,
  name:"Bicycle",
  price:30,
  quantity:15,
  desc:"Bicycle is Good",}
  
};
 render(){
return ( <div>
         <p>name:{this.state.one.name}</p>
         <p>id:{this.state.one.id}</p>
         <p>price:{this.state.one.price}</p>
         <p>quantity:{this.state.one.quantity}</p>
         <p>desc:{this.state.one.desc}</p>
        </div>

);

 }

}

export default Product1;