import React from 'react';

const CharComponent = (props) => {

    const style = {
        display : 'inline block',
        padding : '16px',
        textAlign: 'center',
        margin: '16px',
        border: '1px solid black'
    }
    let index = props.key1;
    return (
        <div style={style} onClick={() => props.removeChar(index)}>
            {props.char}
        </div>
    )
}

export default CharComponent;