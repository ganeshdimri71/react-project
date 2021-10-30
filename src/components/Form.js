import React, { Component } from "react";

class Form extends Component {
	constructor(props) {
		super(props);

		this.state = {
			username: "",
			comments: "",
			topic: "vue",
		};
	}

	handleUserNameChange = (event) => {
		this.setState({
			username: event.target.value,
		});
	};
	handleCommentChange = (event) => {
		this.setState({
			comments: event.target.value,
		});
	};
	handleSelectChange = (event) => {
		this.setState({
			topic: event.target.value,
		});
	};

    handleSubmit = ( event ) => {
        event.preventDefault()
        alert(`${this.state.username} ${this.state.comments} ${this.state.topic}`)
    } 

    render () {
        const { username, comments, topic } = this.state;
		return (
			<form action="" onSubmit={this.handleSubmit}>
				<div>
					<label htmlFor="">User Name</label>
					<input
						type="text"
						value={this.state.username}
						onChange={this.handleUserNameChange}
					/>
				</div>
				<div>
					<label htmlFor="">Comments</label>
					<textarea
						value={this.state.comments}
						onChange={this.handleCommentChange}
					></textarea>
				</div>
				<div>
					<label htmlFor="">Topic</label>
					<select value={this.state.topic} onChange={this.handleSelectChange}>
						<option value="react">React</option>
						<option value="angular">Angular</option>
						<option value="vue">Vue</option>
						<option value="JS">Javascript</option>
					</select>
				</div>
				<button type="submit">Submit</button>

			</form>
		);
	}
}

export default Form;
