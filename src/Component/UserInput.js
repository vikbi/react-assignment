import React from 'react';

const UserInput = (props) => {
    return (
        <div className="User-input">
            <input onChange={props.change} />
        </div>
    )
}

export default UserInput;