import React from 'react'

const MoreButton = props => {
    return (
        <div>
            <button onClick={props.getData}>See More</button>
        </div>
    );
};


export default MoreButton;