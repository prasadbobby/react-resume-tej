/*import React from 'react'

export default class States extends React.Component {
	constructor(){
			super();
			this.state={
				count:"0"
			}
		}
		increment=()=>{
		// this.setState=this.state.count+1
		this.setState({ count: this.state.count + 1 });
	}
		
		reset=()=>{
			this.setState({
				count: "0"
			})
		}
	render() {
		
		return (
			<div>
				<h1>Here we are using states</h1>
				<h2>Here we are increasing the count</h2>
				// <h2>{this.state.count}</h2>
				<button onClick={this.increment}>Increment</button>
				<button onClick={()=> this.reset()}>Reset..!</button>
			</div>
		)
	}
}*/


import React from 'react'

export default class classState extends React.Component {
	constructor(props){
		let countInc=0;
		super(props);
		this.state={
			count: 0
		}
	}
	increment=()=>{
		this.setState({ count: this.state.count + 1 });
	}

	decrement=()=>{
		this.setState({ count: this.state.count - 1 });
	}

	reset=()=>{
			this.setState({
				count: 0
			})
		}
	render() {
		return (
			<div>
				<h1>{this.state.count}</h1>
				<button onClick={this.increment}>Increment</button>
				<button onClick={this.decrement}>Decrement</button>
				<button onClick={()=> this.reset()}>Reset..!</button>
			</div>
		)
	}
}