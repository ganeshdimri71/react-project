import React from 'react'

const UpdatedComponent = OriginalComponent => {
    class NewComponent extends React.Component {
        // 1
        constructor(props) {
            super(props);

            this.state = {
                count: 0,
            };
        }

        incrementCount = () => {
            this.setState(prevState => {
                return { count: prevState.count + 1 }
            }

            )
        }
        // 1
        render() {
            console.log(this.props.name)
          
            // return <OriginalComponent name='Vishwas'  />
            return <OriginalComponent count={this.state.count} incrementCount={this.incrementCount} {...this.props} />
            
        }

    }
    return NewComponent
}
export default UpdatedComponent