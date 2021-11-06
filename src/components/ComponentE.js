import React, { Component } from 'react'
import ComponentF from './ComponentF'
// 1
import UserContext from './UserContext'

class ComponentE extends Component {
    // 2
    static contextType = UserContext
    // 2
    render() {
        // return (
        //     <ComponentF />
        // )
        // 1
        return (
            <div>
                Component E Context {this.context}
                <ComponentF />
            </div>
        )
    }
}

// 1

// ComponentE.contextType = UserContext
// 1
export default ComponentE
