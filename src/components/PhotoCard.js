import React from 'react'
import styled from 'styled-components'

const PhotoDiv = styled.div`
    width: 70%;
    text-align: center;
    display:flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    margin: 1rem auto;
    img {
        width:75%
    }
    h2 {
        font-size: 3rem;
        color: blue;
    }
    p {
        font-size: 1.2rem;
    }
`

const PhotoCard = props => {
    return (
        <PhotoDiv>
            <h2>{props.photoD.title}</h2>
            <img src={props.photoD.hdurl} alt=''/>
            <p>{props.photoD.explanation}</p>
            
        </PhotoDiv>
    );
};

export default PhotoCard;
