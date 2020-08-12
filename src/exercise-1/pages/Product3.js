import React, {Component} from 'react';
import { Link, Router } from 'react-router-dom';
import {Switch} from 'react-router-dom';
import {Route} from 'react-router-dom';
class Product3 extends Component {
state = {
 
    three:{id:3,name:"pencil",price:50,quantity:17,desc:"Pencil is Good",}
  
};
 render(){
return ( <div>
         <p>name:{this.state.three.name}</p>
         <p>id:{this.state.three.id}</p>
         <p>price:{this.state.three.price}</p>
         <p>quantity:{this.state.three.quantity}</p>
         <p>desc:{this.state.three.desc}</p>
        </div>

);

 }

}

export default Product3;