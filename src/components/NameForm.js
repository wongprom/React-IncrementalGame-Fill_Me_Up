import React from 'react';
import StyledDiv from '../styledComponent/StyledDiv';

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
            <StyledDiv>
                <h1>Welcome To The Incremental Game.</h1> 
                <h5>"Your Mission Is To Fill Up The Glass As Fast As Possible By Clicks!!"</h5>
                
                
                <form onSubmit={this.handleSubmit}>
                    <label>
                        <h3>Before You Can Begin, Please Enter Your Name</h3><br />
                        <input type="text" placeholder="Your Name" value={this.state.user} onChange={this.handleChange} />
                    </label>
                    <input type="submit" value="Submit"  />
                </form>  
                
            </StyledDiv>
        );
    } 
}
export default NameForm;