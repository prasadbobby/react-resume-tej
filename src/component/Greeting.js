import React from 'react';

let Greeting=(props)=>{
	console.log(props);
	return(
		
		<div>
		<h1> This is {props.name} this is my mail {props.mail}</h1>
		</div>
		);
}

export default Greeting;