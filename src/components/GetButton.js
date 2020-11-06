import React from 'react'
import styled from 'styled-components'

const ButtonDiv = styled.div`
    button:hover {
      background-color: green;
      font-size: 1.2rem;
    }
`

const GetButton = props => {
    return (
        <ButtonDiv>
            {
                props.isFetchingData ? (
                    <p>Loading photo of the day...</p>
                ) : (
                    <button onClick={props.getDataBtn}>See Photo</button>
                )
            }
        </ButtonDiv>
    );
};


export default GetButton;