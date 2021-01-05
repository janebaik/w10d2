import React from 'react';

class Clock extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            time: new Date()
        }
        this.tick = this.tick.bind(this);
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

    componentDidMount() {
        debugger
        this.intervalID = setInterval(this.tick, 1000);
        debugger
    }

    componentWillUnmount() {
        debugger
        clearInterval(this.intervalID);
        debugger
    }

}


export default Clock;

