import React, {Component} from 'react';
import { Link, Router } from 'react-router-dom';
import {Switch} from 'react-router-dom';
import {Route} from 'react-router-dom';
class Product extends Component {
    state={
    products1 : [
        {id:1,name:"Bicycle",price:30,quantity:15,desc:"Bicycle is Good"},
        {id:2,name:"TV",price:40,quantity:16,desc:"TV is Good"},
        {id:3,name:"pencil",price:50,quantity:17,desc:"Pencil is Good"},
    ],
    data:[1,2,3],
    
};

 render(){
return ( <div>
         <p>{this.props.match.params.id}</p>
         <p>name:{this.state.products1[0].name}</p>
         <p>id:{this.state.id}</p>
         <p>price:{this.state.price}</p>
         <p>quantity:{this.state.quantity}</p>
         <p>desc:{this.state.desc}</p>
        </div>

);

 }

}


export default Product;