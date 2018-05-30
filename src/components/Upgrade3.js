import React from 'react';
import StyledCard from '../styledComponent/StyledCard';

function Upgrade3(props) {
    return(
        <StyledCard onClick = {props.upgradeFunction}>
            <h2>Upgrade 3</h2>
            <p>This Upgrade Cost: 70 Clicks</p>
            <h3>Upgrade Info</h3>
            <p>1 Click = 10 Clicks</p>   
        </StyledCard>
    );
}
export default Upgrade3;