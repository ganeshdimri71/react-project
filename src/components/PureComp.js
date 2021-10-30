import React from "react";

class PureComp extends React.PureComponent {
	render() {
		console.log("Pure Componenet Render...!");
		return <div>Pure Componenet {this.props.name}</div>;
	}
}

export default PureComp;
