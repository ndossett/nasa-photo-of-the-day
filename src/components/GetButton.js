import React from 'react'

const GetButton = props => {
    return (
        <div>
            {
                props.isFetchingData ? (
                    <p>Loading photo of the day...</p>
                ) : (
                    <button onClick={props.getDataBtn}>See More</button>
                )
            }
        </div>
    );
};


export default GetButton;