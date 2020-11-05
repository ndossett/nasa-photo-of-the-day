import React from 'react'

const PhotoCard = props => {
    return (
        <div>
            {props.error ? 
                (<p>Error: {props.error}</p>) : 
                (props.photoD.map(photoData => (
                     <div>
                        <h2>{photoData.title}</h2>
                    </div>
                 ))
              )}
        </div>
    );
};

export default PhotoCard;