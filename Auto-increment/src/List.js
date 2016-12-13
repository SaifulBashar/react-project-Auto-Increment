import React, { Component } from 'react';
import './App.css'
class List extends Component{
  render(){
    return(
      <ul>

        {
          this.props.i.map(
            item => (<div className='App'><li>{item}</li><p></p></div>)
          )
        }
      </ul>
    );
  }
}
export default List;
