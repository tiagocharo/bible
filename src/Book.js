import React, { Component } from 'react';
import { Link } from "react-router-dom";

export default class Book extends Component {
	constructor() {
		super()
		this.state = {
			caps: 0
		}
	}

	componentWillMount() {
		this.props.location.state.text.forEach( (cap, index) => {
			if(cap.name === this.props.match.params.name) {
				this.setState({
					caps: cap.chapters
				})
			}
		})
	}


	render() {
		return (
			<div>
				{
					this.state.caps.map((text, index) => 
						<Link
							to={
								{
									pathname: `${this.props.match.params.name}/cap/${index + 1}`,
									state: {
										caps: this.state.caps
									}
								}
							}
							key={index}
							className="caps">{index + 1}</Link>
					)
				}
			</div>
		)
	}
}