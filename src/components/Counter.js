import React, { Component } from "react";

class Counter extends Component {
	constructor(props) {
		super(props);

		this.state = {
			count: 0,
		};
	}

	/* increment = () => {
		this.setState({
			count: this.state.count + 1,
		});
		console.log(this.state.count);
	}; */

	//1
	increment = () => {
		/* this.setState(
			{
				count: this.state.count + 1,
			},
			() => {
				console.log("Callback Value : ", this.state.count);
			}
		);
		console.log(this.state.count); */
		/* 4 */
		/* this.setState((prevState) => {
			return { count: prevState.count + 1 };
		}); */
		 /* 5 */ 
		 this.setState((prevState, props) => {
			return { count: prevState.count + props.addValue };
		}); 
	};

	//2

	incrementFive = () => {
		this.increment();
		this.increment();
		this.increment();
		this.increment();
		this.increment();
	};

	render() {
		return (
			<div>
				<div>Count - {this.state.count}</div>
				{/* <button onClick={() => this.increment()}>Increment</button> */}
				{/* 2 */}
				<button onClick={() => this.incrementFive()}>Increment Five</button>
			</div>
		);
	}
}

export default Counter;
