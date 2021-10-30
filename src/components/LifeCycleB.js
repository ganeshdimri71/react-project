import React, { Component } from "react";

class LifeCycleB extends Component {
	constructor(props) {
		super(props);

		this.state = {
			name: "Vishwas",
		};
		console.log("LifeCycle B Constructor");
	}

	

	static getDerivedStateFromProps(props, state) {
		console.log("Lifecycle B getDrivedStateFrom Props...!");
		return null;
	}

	componentDidMount() {
		console.log("LifeCycle B Componenet Did Mount...!");
	}

	shouldComponentUpdate() {
		console.log("LifecycleB should Component Update...!");
		return true;
	}

	getSnapshotBeforeUpdate(prevProps, prevState) {
		console.log("Life Cycle B getSnapshotBeforeUpdate..!");
		return null;
	}

	componentDidUpdate() {
		console.log("Life Cycle B Component Did Update...!");
	}

	render() {
		console.log("LifecycleB rendered...!");
		return (
			<div>
				<div>Lifecycle B</div>
			
			</div>
		);
	}
}

export default LifeCycleB;
