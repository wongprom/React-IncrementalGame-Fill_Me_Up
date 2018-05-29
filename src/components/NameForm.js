import React from 'react';

class NameForm extends React.Component {
    state = {
        user : '',
    }
    
    handleChange = (event) => {
        this.setState({ user : event.target.value});
    }

        
    handleSubmit = (event) => {
        event.preventDefault();
        //skicka från child till parent
        this.props.handleLogin(this.state.user);   
    }
    
    render() {  
        return(  
            <form onSubmit={this.handleSubmit}>
            <label>
              Name:
              <input type="text" placeholder="your name" value={this.state.user} onChange={this.handleChange} />
            </label>
            <input type="submit" value="Submit"  />
          </form>  
        );
    } 
}
export default NameForm;