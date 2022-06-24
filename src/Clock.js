import React from "react";
import {BetterClockFormatter} from "./BetterClockFormatter";

class Clock extends React.Component {
  constructor(props) {
    super(props);
    const currentTime = new Date();
    this.state = {
      hour: currentTime.getHours(),
      minutes: currentTime.getMinutes(),
      seconds: currentTime.getSeconds(),
      ampm: currentTime.getHours() >= 12 ? "pm" : "am"
    };
    this.setTimer(); // start up the timeout
  }

  setTimer() {
    setTimeout(this.updateClock.bind(this), 1000);
  }

  updateClock() {
    // This will be called in one second
    const currentTime = new Date();
    this.setState(
      {
        hour: currentTime.getHours(),
        minutes: currentTime.getMinutes(),
        seconds: currentTime.getSeconds(),
        ampm: currentTime.getHours() >= 12 ? "pm" : "am"
      },
      this.setTimer
    );
  }

  render() {
    return (
      <div className="clock">
        <BetterClockFormatter {...this.props} {...this.state}/>
      </div>
    );
  }

  componentWillUnmount() {
    if (this.timeout) {
      clearTimeout(this.timeout);
    }
  }
}

export default Clock;
