import Person from './Person/Person';
import './App.css';
import React, { Component } from 'react';
import { render } from '@testing-library/react';

class App extends Component {
	state = {
		people: [
			{ id: 'user1', name: 'Hien Pham', age: '20' },
			{ id: 'user2', name: 'Van Ha', age: '19' },
			{ id: 'user3', name: 'Long Pham', age: '20' },
		],
		otherState: 'Some thing',
		displayPerson: false
	};

	personsHandler = () => {
		let disPerson = this.state.displayPerson;
		this.setState({
			displayPerson: !disPerson
		})
	}

	changedNameHandler = (event, id) => {
		const personId = this.state.people.findIndex((person) => {
			return person.id === id;
		});

		let persons = [...this.state.people];
		persons[personId].name = event.target.value;
		this.setState({
			people: persons
		})

	}

	render() {
		let { people, otherState, displayPerson } = this.state;

		let persons = displayPerson === true ? (
			people.map((person) => {
				return <Person name={person.name} age={person.age} key={person.id} changed={ (event) => this.changedNameHandler(event, person.id)}/>
			})
		) : null

		return (
			<div className='App'>
				<button onClick={this.personsHandler}>Click</button>
				{persons}
			</div>
		);
	}
}

export default App;
