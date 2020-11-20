import React, { Component } from 'react'

const Person = (props) => {

    let style = {
        border: '1px solid #555',
        borderRadius: '10px',
        width: '30%',
        padding: '10px',
        margin: '20px auto',
        boxShadow: '0 5px 15px -10px #929292'
    }

    return (
        <div className="person">
            <div style={style}>
                <h3>I'm a {props.name} and I'm {props.age} year old</h3>
                <input type="text" name="name" placeholder={props.name} onChange={ props.changed}/>
            </div>
        </div>
    )
}

export default Person;