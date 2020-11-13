import Person from './Person/Person';
import './App.css';
import React, { Component } from 'react';
import { render } from '@testing-library/react';

class App extends Component {
	state = {
		people: [
			{ name: 'Hien Pham', age: '20' },
			{ name: 'Van Ha', age: '19' },
			{ name: 'Long Pham', age: '20' },
		],
	};

	render() {
		return (
			<div className='App'>
				<Person
					name={this.state.people[0].name}
					age={this.state.people[0].age}
				/>
				<Person
					name={this.state.people[1].name}
					age={this.state.people[1].age}>
					My course: Develop for myself
				</Person>
				<Person
					name={this.state.people[2].name}
					age={this.state.people[2].age}
				/>
			</div>
		);
	}
}

export default App;
