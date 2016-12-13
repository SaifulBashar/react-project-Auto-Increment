import React, { Component } from 'react';
import List from './List';
import './App.css'

class Test extends Component {
  constructor(props){
    super(props);
    this.onClick = this.onClick.bind(this);
    this.state = {
      count:1,
      number : []
    };

  }
  onClick(){
    this.state.number.push(this.state.count);
    this.setState({
      count : this.state.count +1
    });
  }
  render(){
    return(
      <div>
        <h1>hello</h1>
        <List  i = {this.state.number}/>
        <button onClick = {this.onClick}>click</button>
      </div>

    );
  }
}

export default Test;
