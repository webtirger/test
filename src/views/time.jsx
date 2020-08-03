import React from 'react'
import PropTypes from 'prop-types'
export default class Time extends React.Component {
    static propTypes = {
        currentTime: PropTypes.string.isRequired
    }
    state = {
        timeString: '00:00:00'
    }
    componentWillReceiveProps() {
        this.timeDeal(this.props.currentTime)
    }

    timeDeal = (currentTime) => {
        let seconds = currentTime;
        let minutes = parseInt(seconds / 60);
        let hours = parseInt(minutes / 60);
        let timeString;
        if (seconds >= 60) seconds %= 60;
        if (seconds < 10) seconds = '0' + seconds;
        if (minutes >= 60) minutes %= 60;
        if (minutes < 10) minutes = '0' + minutes;
        if (hours < 10) hours = '0' + hours;
        timeString = `${hours}:${minutes}:${seconds}`;
        this.setState({ timeString })
        // console.log(timeString)
    }
    render() {
        const { timeString } = this.state;
        return (
            <div >
                {
                    timeString
                }
            </div>
        );
    }
}