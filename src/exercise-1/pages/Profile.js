import React, {Component} from 'react';

class Profile extends Component {
state ={
Name:"xiao",
Gender:"Female",
Work:"IT industry",
Websit:"./my-profile"

};
 render(){
return (<div>
        <h1>Name:{this.state.Name}</h1>
        <h1>Gender:{this.state.Gender}</h1>
         <h1>Work:{this.state.Work}</h1>
         <h1>Websit:{this.state.Websit}</h1>
        </div>

);

 }

}

export default Profile;