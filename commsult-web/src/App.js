import logo from './logo.svg';
import React from 'react';
import Button from 'Button';

class App extends React.Component {
  constructor(props){
    super (props)
  

  this.state={
    name:"Keivan",
    age:20
    }
  }
  handlerChangeNames = ()=>{
    this.setState({
      name:"Indonesia",
    age:15})
  }


  //render
  render(){
    const{name,age} = this.props
    return(
      <div>
        <h1>{this.state.name}</h1>
        <h3>{this.state.age}</h3>
        
      <h1>{name}</h1>
      <h2>{age}</h2>
      </div>

      
    
    )
  }
}

export default App
