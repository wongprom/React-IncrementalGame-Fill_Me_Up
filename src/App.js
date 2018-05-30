import React, { Component } from 'react';
import Header from './components/Header';
import Button from './components/Button';
import Card from './components/Card';
import StyledCard from './styledComponent/StyledCard';
import StyledDiv from './styledComponent/StyledDiv';
import StyledMainWrapper from './styledComponent/StyledMainWrapper';
import StyledTitle from './styledComponent/StyledTitle';
import NameForm from './components/NameForm';
import OutputUserName from './components/OutputUserName';
import Upgrade1 from './components/Upgrade1';
import Upgrade2 from './components/Upgrade2';


class App extends Component {
  state = {
    counter : 0,  
    user : '',
    multiplier: 1
  }

  handleLogin = (user) => {
    this.setState({ user: user });
  }

  handleClick = () => {
    this.setState({ 
      counter : this.state.counter  + (1 * this.state.multiplier)
    })
  }


  handleClickActivetUpgrade1 = () => {
    this.setState({ 
      counter : this.state.counter - 10,
      multiplier : this.state.multiplier + 1
    })
  }

  handleClickActivateUpgrade2 = () => {
    this.setState({
      counter : this.state.counter -30,
      multiplier : this.state.multiplier + 3
    })
  }

  render() {

    let view = <NameForm handleLogin={this.handleLogin}/>
    if(this.state.user){
      view = <StyledMainWrapper />
    }else{
      return view;
    }

    let upgrade1 = <Upgrade1 handleClickActivetUpgrade1 = {this.handleClickActivetUpgrade1} />
    if(this.state.counter >= 10) {
      upgrade1 = <Upgrade1 handleClickActivetUpgrade1 = {this.handleClickActivetUpgrade1} />
    }else{
      upgrade1 = null;
    }

    let upgrade2 = <Upgrade2 handleClickActivateUpgrade2 = {this.handleClickActivateUpgrade2} />
    if(this.state.counter >= 30) {
      upgrade2 = <Upgrade2 handleClickActivateUpgrade2 = {this.handleClickActivateUpgrade2}/>
    }else{
      upgrade2 = null;
    }

    return (
      <React.Fragment>
        {view}
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
          <OutputUserName user={this.state.user}/>
          <StyledTitle>
          
          </StyledTitle>
        </StyledDiv>

        <StyledDiv>
          <StyledTitle>
            Column 3 <br />
            Main Content Goes Here
          </StyledTitle> 
          { upgrade1 }
          { upgrade2 }
        </StyledDiv>
      </StyledMainWrapper> 
      </React.Fragment>
    );
  }
}

export default App;
