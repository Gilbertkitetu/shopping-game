import React from 'react';


class Clock extends React.Component {
  
  constructor(props) {
    super(props);
    this.state = {
      date: new Date(),
      hours24: true,
      timerId: ''
    };
    this.months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
  }
  
  componentDidMount() {
    const intervalId = setInterval(() => this.tick(), 1000);
    this.setState({
      timerId: intervalId
    });
  }

  componentWillUnmount() {
    clearInterval(this.state.timerId);
  }

  tick() {
    this.setState({
      date: new Date()
    });
  }

  toggleFormat = () => {
    this.setState({hours24 : !this.state.hours24});
  };
  
  formatTime = (hourChange, suffix) => {
   return (this.state.date.getHours()-hourChange) + ":" + ("0" + this.state.date.getMinutes()).slice(-2) + suffix;
  };
  
  getFormattedTime = (date) => {
    if (!this.state.hours24) {
      if (date.getHours() < 12){
        return this.formatTime(0, "am");
      } else if (date.getHours() === 12) {
        return this.formatTime(0,"pm");
      } else {
        return this.formatTime(12,"pm");
      }
    } else {
      return this.formatTime(0, "");
    }
  };

  getFormattedDate = (date) => {
    return date.getDate() + '-' + this.months[date.getMonth()]
  }
  
  render() {
    return (
     <div id="clock" onClick={this.toggleFormat}>
      <div id="info">
        <div id="time">{this.getFormattedTime(this.state.date)}</div>
        <p id="date">{this.getFormattedDate(this.state.date)}</p>
      </div>
      <div id="controls">
        <span id="slider">
          <div id="slider1" className={this.state.hours24 ? 'active' : 'fade'}/>
          <div id="slider2" className={this.state.hours24 ? 'fade' : 'active'}/>
        </span>
      </div>
      </div>
    );
  }
}

export default Clock;
