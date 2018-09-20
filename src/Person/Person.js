import React from 'react';


const person = (props) => {
    return (
        <div>
            <p onClick={props.click}> hi my name is {props.name} and age is : {props.age} </p>
            <p>{props.children}</p>
            <input type="text" onChange={props.changes} />
            </div>
    )
}

export default person;