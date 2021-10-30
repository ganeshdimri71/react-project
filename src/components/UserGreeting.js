import React, { Component } from "react";

export class UserGreeting extends Component {
	constructor(props) {
		super(props);

		this.state = {
			isLoggedIn: true,
		};
	}

	render() {
		/* if (this.state.isLoggedIn) {
			return <div>Welcome Vishwas</div>;
		} else {
			return <div>Welcome Guest</div>;
		} */

		//1
		/* let message;
		if (this.state.isLoggedIn) {
			message = <div>Welcome Vishwas</div>;
		} else {
			message = <div>Welcome Guest</div>;
		}
		return <div>{message}</div>; */

       /*  return this.state.isLoggedIn ? (
            <div>Welcome Vishwas</div>
        ) : (
                <div>Welcome Guest</div>
            ) */
		
		return this.state.isLoggedIn && <div>Welcome Vishwas</div>
	}
}

export default UserGreeting;
