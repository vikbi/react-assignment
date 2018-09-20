import React from 'react';

const ValidationComponent = (props) => {
    return (
        (props.length < 5) ? <p>Txt too short</p> : <p>dummy</p>
    )
}

export default ValidationComponent;