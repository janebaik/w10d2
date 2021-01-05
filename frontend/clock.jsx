import React from 'react';

class Clock extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            time: new Date()
        }


    }

    render() {
        return (
            <div>
                <h1>Clock</h1>
            </div>
        )
    }

    tick() {
        this.setState({time: new Date()});
    }

}


export default Clock;

