import React from 'react'

export default class Welcome extends React.Component {
	render() {
		console.log(this.props);
		return (
			<div>
				<h1>My name is {this.props.name} & my college is {this.props.college}</h1>
				{this.props.children}
			</div>
		)
	}
}