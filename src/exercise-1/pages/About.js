import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import Home from "../pages/Home";
class About extends Component {

 render(){
return (<div>
        <h1>Compony: ThoughtWorks Local</h1>
        <h1>Location:xi'an</h1>
        <h1>For more information,please view our</h1>
        <Link to="/">Home</Link>
        </div>

);

 }

}

export default About;