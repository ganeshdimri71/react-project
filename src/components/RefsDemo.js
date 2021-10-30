import React, { Component } from "react";

class RefsDemo extends Component {
	constructor(props) {
		super(props);

		this.state = {};
		this.inputRef = React.createRef();
        // 1 
		this.cbRef = null;
		this.setCbRef = (element) => {
			this.cbRef = element;
		};
	}

	componentDidMount() {
		// console.log(this.inputRef);
		// this.inputRef.current.focus();
         
        // 1
		if (this.cbRef) {
			this.cbRef.focus();
		}
	}
	clickHandler = () => {
		alert(this.inputRef.current.value);
	};

	render() {
		return (
			<div>
				<input type="text" ref={this.inputRef} />
				<input type="text" ref={this.setCbRef} />
				<button onClick={this.clickHandler}>Click</button>
			</div>
		);
	}
}

export default RefsDemo;
