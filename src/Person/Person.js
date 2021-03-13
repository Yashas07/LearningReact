import React from 'react'
// import Radium from 'radium'

import './Person.css'
const person = (props) => {

    // const style = {
    //     '@media (min-width: 500px)' : {
    //         width : '450px'
    //     }
    // } style={style}
    return (
        <div className="Person" >
            <p onClick={props.click}>I'm a nested {props.name} and my age is {props.age}</p>
            <p>{props.children}</p>
            <input type="text" onChange={props.changed} value={props.name}></input>
        </div>
    );
}

export default person;