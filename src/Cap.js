import React, { Component } from 'react';
import backIcon from './image/back.png'

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

	back() {
		this.props.history.goBack();
	}

	render() {
		return (
			<div>
				<div className="verses">
					{
						this.verses.map( (text, index) => 
							<p key={index}>
								{`${index + 1}. ${text}`}
							</p>
						)
					}
				</div>
				<div 
					onClick={ (event) => {this.back(event)} }
					className="container-back">
					<img 
						className="back-icon" 
						src={backIcon} />
				</div>
			</div>
		)
	}
}