import React from 'react';
import StyledCard from '../styledComponent/StyledCard';
import StyledTitle from '../styledComponent/StyledTitle';

function Card(props) {
    return(
        <StyledCard>
            <StyledTitle>StyledTitle <br />You have pressed : </StyledTitle>
            <p>{props.pressTotal}</p>
        </StyledCard>
    );
}
export default Card;
