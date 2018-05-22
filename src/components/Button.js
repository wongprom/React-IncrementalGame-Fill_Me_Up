import React from 'react';
import IncrementButton from '../styledComponent/IncrementButton';

function Button(props) {
    return(
        <IncrementButton onClick={props.handleClick}>
            Click To Fill Me Up
        </IncrementButton>
    )
}
export default Button;