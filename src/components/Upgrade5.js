import React from 'react';
import StyledCard from '../styledComponent/StyledCard';

function Upgrade5(props) {
    return (
        <StyledCard onClick = {props.autoClicker}>
            <h2>Upgrade 5</h2>
            <p>This Upgrade Cost: 400 Clicks</p>
            <h3>Upgrade Info</h3>
            <p>Auto Clicker = 1 Click/Sec</p>   
        </StyledCard>
    );
}
export default Upgrade5;