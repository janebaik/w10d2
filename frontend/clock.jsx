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

        seconds = (seconds<10) ? `0${seconds}` : seconds;
        minutes = (minutes < 10) ? `0${minutes}` : minutes;

        return (
            <div className='time'>
                <h1 className="clock-title">Clock</h1>
                <div className='box-time'>
                    <div className='boxed-time'>
                        <h1>Time:</h1>
                        <div>
                            {hours}:{minutes}:{seconds} PDT
                        </div>
                    </div>
                    <div className='boxed-time'>
                        <h1>Date:</h1>
                        <div>
                            {date}
                        </div>
                    </div>
                </div>
            </div>
        )
    }

    tick() {
        this.setState({time: new Date()});
    }

    componentDidMount() {
        this.intervalID = setInterval(this.tick, 1000);
        
    }

    componentWillUnmount() {  
        clearInterval(this.intervalID);
    }

}


export default Clock;

