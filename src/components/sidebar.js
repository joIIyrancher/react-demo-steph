import React, { Component } from 'react';

let sidebar_style = {
  backgroundColor: '#FF0000',
  height: '100%',
  width: '40%',
}

export default class Sidebar extends Component {
  constructor(props) {
    super(props);
  }



  render() {
    return (
      <div style={sidebar_style}>
        <h1>Sidebar</h1>
        <h1>Title: {this.props.title}</h1> 
        <button onClick={this.props._increaseScore} >Change Title</button>
      </div>
    )
  }
}