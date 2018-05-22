import React, { Component } from 'react';
import Header from './components/Header';
import Button from './components/Button';
import Card from './components/Card';



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
        <Card pressTotal={this.state.counter} />
        <Button handleClick={this.handleClick} />
      </div>
    );
  }
}



export default App;
