import React, { Component } from "react";

class Message extends Component {
	//1
	constructor() {
		super();

		this.state = {
			message: "Welcome Visitor",
		};
	}

    changeMesseage = () => {
        this.setState( {
            message:"Thank you for Subscribing"
        })
    }

	render() {
		/* return (
			<h1>
				Welcome {this.props.name} a.k.a {this.props.heroName}
			</h1>
		); */

		//1
		return (
			<div>
				<h1>{this.state.message}</h1>
				<button onClick={() => this.changeMesseage()}>Subscribe</button>
			</div>
		);
	}
}

export default Message;
