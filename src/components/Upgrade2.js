import React from 'react'; 
import StyledCard from '../styledComponent/StyledCard';

function Upgrade2(props) {
    return(
        <StyledCard onClick = {props.handleClickActivateUpgrade2}>
            <h2>Upgrade 2</h2>
            <p>This Upgrade Cost: 30 Clicks</p>
            <h3>Upgrade Info</h3>
            <p>1 Click = 5 Clicks</p>    
        </StyledCard>
    );
}
export default Upgrade2;