import React, { Component } from 'react'

const Person = (props) => {
    return (
        <div className="person">
            <h3>I'm a {props.name} and I'm {props.age} year old</h3>
            <i>{ props.children}</i>
        </div>
    )
}

export default Person;