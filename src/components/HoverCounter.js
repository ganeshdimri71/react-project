import React, { Component } from 'react'
import UpdatedComponent from './WithCounter'

export class HoverCounter extends Component {
    // constructor(props) {
    //     super(props);

    //     this.state = {
    //         count: 0,
    //     };
    // }

    // incrementCount = () => {
    //     this.setState(prevState => {
    //         return { count: prevState.count + 1 }
    //     }

    //     )
    // }
    render() {
        // const { count } = this.state
        // 2
        const {count,incrementCount} = this.props
        return (
            <div>
                {/* <h2 onMouseOver={this.incrementCount}>Hovered {count} times</h2> */}
                {/* 1 */}
                {/* <h2 onMouseOver={this.incrementCount}>{this.props.name }Hovered {count} times</h2> */}
                {/* 2 */}
                <h2 onMouseOver={incrementCount}>
                    {this.props.name}
                    Hovered {count} times</h2>
            </div>
        )
    }
}

// export default HoverCounter
// 1
export default UpdatedComponent(HoverCounter)
