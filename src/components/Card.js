import React from 'react';
import StyledCard from '../styledComponent/StyledCard';

function Card(props) {
    return(
        <StyledCard>
            <p>{props.pressTotal}</p>
        </StyledCard>
    );
}
export default Card;
