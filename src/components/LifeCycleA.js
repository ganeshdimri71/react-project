import React, { Component } from "react";
import LifeCycleB from "./LifeCycleB";

class LifeCycleA extends Component {
	constructor(props) {
		super(props);

		this.state = {
			name: "Vishwas",
		};
		console.log("LifeCycle A Constructor");
	}

	changeState = () => {
		this.setState({ name: "Code Evolution..!" });
	};

	static getDerivedStateFromProps(props, state) {
		console.log("Lifecycle A getDrivedStateFrom Props...!");
		return null;
	}

	componentDidMount() {
		console.log("LifeCycle A Componenet Did Mount...!");
	}

	shouldComponentUpdate() {
		console.log("LifecycleA should Component Update...!");
		return true;
	}

	getSnapshotBeforeUpdate(prevProps, prevState) {
		console.log("Life Cycle A getSnapshotBeforeUpdate...!");
		return null;
	}

	componentDidUpdate() {
		console.log("Life Cycle A coponent Did Update...!");
	}

	render() {
		console.log("LifecycleA rendered...!");
		return (
			<div>
				<div> Lifecycle A </div>
				<LifeCycleB />
				<button onClick={this.changeState}>Change State</button>
			</div>
		);
	}
}

export default LifeCycleA;
