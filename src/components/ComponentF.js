import React, { Component } from 'react'
import { UserConsumer } from './UserContext'

 class ComponentF extends Component {
    render() {
        return (
            // <div>
            //     Component F
            // </div>
            // 1
            <UserConsumer>
                {
                    (username) => {
                        return <div>Hello {username }</div>
                    }
                }
            </UserConsumer>
        )
    }
}

export default ComponentF
