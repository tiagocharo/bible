import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import App from '../App';
import Book from '../Book';
import Cap from '../Cap';

export default class Routes extends Component {

	render() {
		return (
			<Router>
				<div>
					<Route exact path="/" component={App} />
					<Route exact={true} path="/book/:name" component={Book} />
					<Route path="/book/:name/cap/:number" component={Cap} />
				</div>
			</Router>
		)
	}
}