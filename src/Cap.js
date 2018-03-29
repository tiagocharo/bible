import React, { Component } from 'react';

export default class Cap extends Component {
	
	constructor() {
		super();
		this.verses = [];
	}

	componentWillMount() {
		this.props.location.state.caps.forEach( (cap, index) => {
			if((index + 1) == this.props.match.params.number) {
				cap.forEach(text => {
					this.verses.push(text)
				})
			}
		})
	}

	render() {
		return (
			<div>
				{
					this.verses.map( (text, index) => <p>{`${index + 1} - ${text}`}</p>)
				}
			</div>
		)
	}
}