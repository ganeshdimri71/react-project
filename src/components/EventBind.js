import React, { Component } from 'react'

class EventBind extends Component {
	constructor(props) {
		super(props);

		this.state = {
			message: "Hello",
        };
        //5
        this.clickHandler = this.clickHandler.bind(this);
	}
	/* clickHandler () {
        this.setState({ message:'GoodBye'})
    } */

	//2
	clickHandler =  ()=> {
        this.setState({ message:'GoodBye'})
    }

	render() {
		return (
			<div>
				<div>{this.state.message}</div>
				{/* <button onClick={this.clickHandler}>Button Clicked</button> */}
				{/* 3 */}
				{/* {<button onClick={this.clickHandler.bind(this)}>Button Clicked</button>} */}
				{/* 4 */}
				{<button onClick={()=>this.clickHandler()}>Button Clicked</button>}
			</div>
		);
	}
}

export default EventBind
