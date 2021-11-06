import React, { Component } from 'react'
import UpdatedComponent from './WithCounter'

class ClickCounter extends Component {
	// constructor(props) {
	// 	super(props);

	// 	this.state = {
	// 		count: 0,
	// 	};
	// }

	// incrementCount = () => {
	// 	this.setState(prevState => {
	// 		return { count: prevState.count + 1 }
	// 	}

	// 	)
	// }

	render() {
		// 2
		const { count, incrementCount} = this.props
		return (
			<div>
				{/* <button onClick={this.incrementCount}>
					Clicked {this.state.count}{" "}
				</button> */}
				{/* 1 */}
				<button onClick={incrementCount}>
					{this.props.name}
					Clicked {count} times
				</button>
			</div>
		);
	}
}
// export default ClickCounter
// 1
export default UpdatedComponent(ClickCounter)
