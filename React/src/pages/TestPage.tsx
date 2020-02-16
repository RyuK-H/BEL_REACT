import React, { Component } from 'react';
import { Button } from '../components/atoms/Button';

export class TestPage extends Component {
	render() {
		return (
			<div id="app">
				<Button>BEL</Button>
				<Button red>BEL</Button>
				<Button gray>BEL</Button>
				<Button className="Test">BEL</Button>
			</div>
		);
	}
}
