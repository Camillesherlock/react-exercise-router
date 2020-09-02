import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import Car from './Car'
import Mobile from './Mobile'
class Home extends Component {
 state = {
         data: [
        { name: '可乐',
          price: 1
         },
         { name: '可乐',
         price: 2
        },
        { name: '可乐',
          price: 3
         },
        ],
         carNum: 0,
 }
 AddToCar = () => {
  this.setState({carNum: this.state.carNum + 1 });
};

 render(){
return (
        <main>
        <div className="col-1-2">
        <h1>购物车</h1>
        </div>
        <div id = "car" className = 'store'>
        <Car carNum={this.state.carNum}></Car>
        </div>
        <div id="body" className="goods">
          <Mobile
            datas={this.state.data}
            method={this.AddToCar}
          ></Mobile>
        </div>

       </main>

);
}
}
export default Home;