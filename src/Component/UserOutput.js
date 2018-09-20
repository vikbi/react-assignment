import React from 'react';

const UserOutput = ( props ) => {
    const style = {
        border : "5px solid #bbb",
        padding : "4px",
        textAlign : "center"
    }
    return (
        <div style={style}>
            <p>{props.username}</p>
        </div>
    );
}

export default UserOutput;