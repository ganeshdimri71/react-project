import React, { Component, PureComponent } from "react";
import RegComp from "./RegComp";
import PureComp from "./PureComp";
import MemoComp from "./MemoComp";

// class ParentComp extends Component {
// class ParentComp extends PureComponent {
class ParentComp extends Component {
	constructor(props) {
		super(props);

		this.state = {
			value: "Vishaws",
		};
	}

	componentDidMount() {
		setInterval(() => {
			this.setState({ name: "Vishaws" });
		}, 2000);
	}
	render() {
		console.log(
			"****************************************Parent Componenet Render...!************************************************"
		);
		return (
			<div>
				Parent Componenet
				{/* <RegComp name={this.state.name} />
				<PureComp name={this.state.name} /> */}
                <MemoComp name={this.state.name }/>

			</div>
		);
	}
}

export default ParentComp;
