import React, {Component} from 'react';
import { Link, Router } from 'react-router-dom';
import {Switch} from 'react-router-dom';
import {Route} from 'react-router-dom';
class Product2 extends Component {
state = {
 
    two:{id:2,name:"TV",price:40,quantity:16,desc:"TV is Good",}
  
};
 render(){
return ( <div>
         <p>name:{this.state.two.name}</p>
         <p>id:{this.state.two.id}</p>
         <p>price:{this.state.two.price}</p>
         <p>quantity:{this.state.two.quantity}</p>
         <p>desc:{this.state.two.desc}</p>
        </div>

);

 }

}

export default Product2;