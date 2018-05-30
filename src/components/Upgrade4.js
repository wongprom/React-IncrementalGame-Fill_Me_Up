import React from 'react';
import StyledCard from '../styledComponent/StyledCard';

function Upgrade4(props) {
    return (
        <StyledCard onClick = {props.upgradeFunction}>
            <h2>Upgrade 4</h2>
            <p>This Upgrade Cost: 200 Clicks</p>
            <h3>Upgrade Info</h3>
            <p>1 Click = 20 Clicks</p>   
        </StyledCard>
    );
}
export default Upgrade4;