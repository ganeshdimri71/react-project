import React, { Component } from 'react'

 class User extends Component {
    render() {
        return (
            <div>
                {/* Vishwas */}
                {/* 1 */}
                {/* {this.props.name} */}
                {/* 2 */}
                {/* {this.props.name()} */}
                {/* 3 */}
                {this.props.render(false)}
            </div>
        )
    }
}

export default User
