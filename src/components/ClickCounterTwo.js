import React, { Component } from 'react'

class ClickCounterTwo extends Component {
    //  constructor(props) {
    //      super(props)
     
    //      this.state = {
    //           count:0
    //      }
    //  }
    // incrementCount = () => {
    //     this.setState(prevState => {
    //         return {count:prevState.count+1}
    //     })
    // }
    render() {
        // const {count} = this.state
        // 1
        const {count, incrementCount} = this.props
        return (
            <div>
                {/* <button onClick={this.incrementCount}>Clicked {count} Times</button> */}
                <button onClick={incrementCount}>Clicked {count} Times</button>
            </div>
        )
    }
}

export default ClickCounterTwo
