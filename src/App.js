import React, { Component } from 'react';
import Header from './components/Header';
import Button from './components/Button';


class App extends Component {
  state = {
    counter : 0,
  }

  handleClick = () => {
    this.setState ({
      counter: this.state.counter + 1
    });
  }
  render() {
    return (
      <div>
        <Header />
        <Button handleClick={this.handleClick} />
        <h2>{this.state.counter}</h2>
      </div>
    );
  }
}

export default App;
