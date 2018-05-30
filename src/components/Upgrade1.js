import React from 'react';
import StyledCard from '../styledComponent/StyledCard';
 
function Upgrade1(props) {
    return(
        <StyledCard onClick = {props.handleClickActivetUpgrade1}>
            <h2>Upgrade 1</h2>
            <p>This Upgrade Cost: 10 Clicks</p>
            <h3>Upgrade Info</h3>
            <p>1 Click = 2 Clicks</p>    
        </StyledCard>
    );  
}
export default Upgrade1;