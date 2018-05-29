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


class App extends Component {
  state = {
    counter : 0,  
    user : '',
  }

  handleLogin = (user) => {
    this.setState({ user: user });
  }

  handleClick = () => {
    this.setState({ counter : this.state.counter + 1 })
  }

  handleClickActivetUpgrade1 = () => {
    this.setState({ counter : this.state.counter - 10 })
  }

  //Make 1 click = 2 clicks.
  // handleClick = () => {
  //   let modifier = 1;
  //   if(this.state.counter >= 10){
  //     modifier=2;
  //   }
  //   this.setState ({
  //     counter: this.state.counter + modifier
  //   });
  // }
  
  // enda sättet att skicka data TILL "parent" FRÅN "child" komponent.

  

  
  render() {

    let view = <NameForm handleLogin={this.handleLogin}/>
    if(this.state.user){
      view = <StyledMainWrapper />
    }else{
      return view;
    }

    let upgrade1 = <Upgrade1 handleClickActivetUpgrade1 = {this.handleClickActivetUpgrade1} />
    if(this.state.counter >= 5) {
      upgrade1 = <Upgrade1 handleClickActivetUpgrade1 = {this.handleClickActivetUpgrade1} />
    }else{
      upgrade1 = null;
    }



    return (
      <mainContainer>
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
          {upgrade1}
        </StyledDiv>
      </StyledMainWrapper> 
      </mainContainer>
    );
  }
}





export default App;
