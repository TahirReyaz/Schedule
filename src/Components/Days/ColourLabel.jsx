import React from 'react'

const ColourLabel = (props) => {

    return (
        <span style={{borderRadius: "100%", backgroundColor: props.color, height: "10px", width: "10px"}}>
        </span>
    );
}

export default ColourLabel;