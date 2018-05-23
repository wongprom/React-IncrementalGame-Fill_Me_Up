import React, { Component } from 'react';
import Header from './components/Header';
import Button from './components/Button';
import Card from './components/Card';
import StyledCard from './styledComponent/StyledCard';
import StyledDiv from './styledComponent/StyledDiv';
import StyledMainWrapper from './styledComponent/StyledMainWrapper';
import StyledTitle from './styledComponent/StyledTitle';





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
      <StyledMainWrapper>
        <StyledDiv>
        <StyledTitle>
          Column 1 <br />
          Main Content Goes Here
         </StyledTitle>
          <Button handleClick={this.handleClick} />
          <Card pressTotal={this.state.counter} />
        </StyledDiv>

        <StyledDiv>
        <StyledTitle>
          Column 2 <br />
          Main Content Goes Here
         </StyledTitle>
        </StyledDiv>

        <StyledDiv>
          <StyledTitle>
            Column 3 <br />
            Main Content Goes Here
          </StyledTitle> 
        </StyledDiv>
      </StyledMainWrapper>
    );
  }
}

const values = {
  
}



export default App;
