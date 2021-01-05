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

        let hours = this.state.time.getHours();
        let minutes = this.state.time.getMinutes();
        let seconds = this.state.time.getSeconds();

        let date = this.state.time.toDateString();

        return (
            <div className='time'>
                <h1>Clock</h1>
                <h1>Time:</h1>
                <div>
                    {hours}:{minutes}:{seconds} PDT
                </div>
                <h1>Date:</h1>
                <div>
                    {date}
                </div>
            </div>
        )
    }

    tick() {
        this.setState({time: new Date()});
    }

    componentDidMount() {
        debugger
        this.intervalID = setInterval(this.tick, 1000);
        // debugger
    }

    componentWillUnmount() {
        debugger
        clearInterval(this.intervalID);
        debugger
    }

}


export default Clock;

