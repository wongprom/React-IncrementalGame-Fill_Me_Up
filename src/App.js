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
import Upgrade3 from './components/Upgrade3';
import Upgrade4 from './components/Upgrade4';
import Upgrade5 from './components/Upgrade5';

class App extends Component {
  state = {
    counter : 0,  
    user : '',
    multiplier: 1,
   // disabledUpgrades: [],
  }

  handleLogin = (user) => {
    this.setState({ user: user });
  }

  handleClick = () => {
    this.setState({ 
      counter : this.state.counter  + (1 * this.state.multiplier)
    })
  }

  

  handleClickActivateUpgrade1 = () => {
    // let disabledUpgrades = [];
    // disabledUpgrades.push("upgrade1");
    this.setState({ 
      counter : this.state.counter - 10,
      multiplier : this.state.multiplier + 1,
      // disabledUpgrades: disabledUpgrades
    })
  }

  handleClickActivateUpgrade2 = () => {
    // let disabledUpgrades = [];
    // disabledUpgrades.push("upgrade2");
    this.setState({
      counter : this.state.counter -30,
      multiplier : this.state.multiplier + 3,
      // disabledUpgrades: disabledUpgrades
    })
  }

  handleClickActivateUpgrade3 = () => {
    // let disabledUpgrades = [];
    // disabledUpgrades.push("upgrade3");
    this.setState({
      counter : this.state.counter -70,
      multiplier : this.state.multiplier + 5,
      // disabledUpgrades: disabledUpgrades
    })
  }

  handleClickActivateUpgrade4 = () => {
    // let disabledUpgrades = [];
    // disabledUpgrades.push("upgrade4");
    this.setState({
      counter : this.state.counter - 200,
      multiplier : this.state.multiplier + 10,
      // disabledUpgrades: disabledUpgrades
    })
  }

  handleClickActivateUpgrade5 = () => {
    // let disabledUpgrades = [];
    // disabledUpgrades.push("upgrade5");
      this.setState({
        counter : this.state.counter - 400,
      //   disabledUpgrades: disabledUpgrades
       })
      this.interval = setInterval(this.handleClick,1000);
      //clearIntervall stannar räknaren när man kallar på den
      clearInterval(this.interval);
  }

  render() {

    let view = <NameForm handleLogin={this.handleLogin}/>
    //this.state.user = tom = false
    if(this.state.user){
      view = <StyledMainWrapper />
    }else{
      return view;
    }

    let upgrade1 = <Upgrade1 upgradeFunction = {this.handleClickActivateUpgrade1} />
    if(this.state.counter >= 10) {
      upgrade1 = <Upgrade1 upgradeFunction = {this.handleClickActivateUpgrade1} />
    }else{
      upgrade1 = null;
    }

    // (!this.state.disabledUpgrades.includes("upgrade2") && this.state.counter >= 30)
    let upgrade2 = <Upgrade2  upgradeFunction = {this.handleClickActivateUpgrade2} />
    if(this.state.counter >= 30) {
      upgrade2 = <Upgrade2 upgradeFunction = {this.handleClickActivateUpgrade2}/>
    }else{
      upgrade2 = null;
    }

    let upgrade3 = <Upgrade3 upgradeFunction = {this.handleClickActivateUpgrade3} />
    if(this.state.counter >= 100){
      upgrade3 = <Upgrade3 upgradeFunction = {this.handleClickActivateUpgrade3} />
    }else{
      upgrade3 = null;
    }

    let upgrade4 = <Upgrade4 upgradeFunction = {this.handleClickActivateUpgrade4} />
    if(this.state.counter >= 200){
      upgrade4 = <Upgrade4 upgradeFunction = {this.handleClickActivateUpgrade4} />
    }else{
      upgrade4 = null;
    }
  
    let upgrade5 = <Upgrade5 autoClicker = {this.handleClickActivateUpgrade5} />
    if(this.state.counter >= 400){
      upgrade5 = <Upgrade5 autoClicker = {this.handleClickActivateUpgrade5} />
    }else{
      upgrade5 = null;
    }
    
    return (
      <React.Fragment>
        {view }
       <StyledMainWrapper>
        <StyledDiv>
          <StyledTitle>Number Of Clicks</StyledTitle>
          <Card pressTotal={this.state.counter} />
          <Button handleClick={this.handleClick} />
        </StyledDiv>

        <StyledDiv>
          <StyledTitle>User</StyledTitle>
          <OutputUserName user={this.state.user}/> 
        </StyledDiv>
        
        <StyledDiv>
          <StyledTitle>Your Upgrades</StyledTitle> 
          { upgrade1 }
          { upgrade2 }
          { upgrade3 }
          { upgrade4 }
          { upgrade5 }
        </StyledDiv>
      </StyledMainWrapper> 
      </React.Fragment>
    );
  }
}

export default App;
