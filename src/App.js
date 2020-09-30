import React, { Component } from 'react';
import Profile from './Components/profile';
import "./App.css"

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      person:{fullName:"Makki Boukhris",bio:"bio", imgSrc:"https://scontent.ftun3-1.fna.fbcdn.net/v/t1.0-9/69370951_2401033676646860_8708337464437112832_o.jpg?_nc_cat=108&_nc_sid=09cbfe&_nc_ohc=04CvLmLuY5IAX8MkfZm&_nc_ht=scontent.ftun3-1.fna&oh=cf7a99a6e7ff5bfa94a4fa6dae977b6a&oe=5F9917D7", profession:"Student"},
      Show:false,
      timer:""
    }
  }
ChangeShow=()=>{
this.setState({Show:!this.state.Show})
console.log(this.state.Show)
  }
  componentDidMount(){
    setInterval(()=>{
this.setState({timer:new Date().toString().slice(15,25)})
    },1000)
  }
  render() { 
    return (  
    <div className="container">
      <h1 className="text">{this.state.timer}</h1>
      <button className="btn" onClick={this.ChangeShow}>Show</button>
      <Profile fullName={this.state.person.fullName} bio={this.state.person.bio} src={this.state.person.imgSrc} profession={this.state. person.profession} show={this.state.Show}/>
      
      
    </div>
    );
  }
}

export default App;