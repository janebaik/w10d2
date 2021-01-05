import React from 'react';

class Tab extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
       
        }
    }

    render() {
        debugger
        return (
            <div onClick={this.props.tab}>{this.props.tabs[0].content}</div>
        )
    }

}

export default Tab;