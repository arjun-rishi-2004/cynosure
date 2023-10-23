import React, { Component } from 'react';

class CountdownTimer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      targetDate: new Date('2023-10-26T00:00:00'),
      timeRemaining: {},
      countdownInterval: null,
    };
  }

  componentDidMount() {
    // Calculate the initial time remaining
    this.calculateTimeRemaining();
    
    // Start the countdown timer
    const countdownInterval = setInterval(() => {
      this.calculateTimeRemaining();
    }, 1000);

    this.setState({ countdownInterval });
  }

  componentWillUnmount() {
    // Clear the interval when the component is unmounted
    if (this.state.countdownInterval) {
      clearInterval(this.state.countdownInterval);
    }
  }

  calculateTimeRemaining() {
    const now = new Date();
    const timeDiff = this.state.targetDate - now;

    if (timeDiff <= 0) {
      // The target date has been reached, stop the countdown
      clearInterval(this.state.countdownInterval);
      this.setState({ timeRemaining: { days: 0, hours: 0, minutes: 0, seconds: 0 } });
    } else {
      // Calculate time remaining
      const days = Math.floor(timeDiff / (1000 * 60 * 60 * 24));
      const hours = Math.floor((timeDiff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((timeDiff % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((timeDiff % (1000 * 60)) / 1000);
      
      this.setState({ timeRemaining: { days, hours, minutes, seconds } });
    }
  }

  render() {
    const { timeRemaining } = this.state;

    return (
      <div>
        <p>{timeRemaining.days} days {timeRemaining.hours} hours {timeRemaining.minutes} minutes {timeRemaining.seconds} seconds</p>
      </div>
    );
  }
}

export default CountdownTimer;
