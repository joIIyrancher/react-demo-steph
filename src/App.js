import React, { Component } from 'react';
import axios from 'axios';

import Sidebar from './components/sidebar';

let app_style = {
  backgroundColor: '#0000FF',
  height: '100vh',
  width: '100vw'
}

export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      score: 22,
      color: 'blue',
      teams: 2,
      title: 'anything'
    }
    this._increaseScore = this._increaseScore.bind(this);
  }

  _increaseScore() {
    let self = this;
    axios.get('http://jsonplaceholder.typicode.com/posts/1')
    .then(function(res) {
      console.log(res.data.title);
      self.setState({
        title: res.data.title
      })
    })

  }

  render() {
    return (
      <div style={app_style}>
        <Sidebar {...this.state} _increaseScore={this._increaseScore} />
      </div>
    );
  }
}
