import React from 'react';
import StyledCard from '../styledComponent/StyledCard';
import StyledTitle from '../styledComponent/StyledTitle';

function OutputUserName(props){
    return(
        <StyledCard>
            <StyledTitle>Let The Game Begin</ StyledTitle>
            <h4>{props.user}</h4>
        </StyledCard>
        
    );
}
export default OutputUserName;