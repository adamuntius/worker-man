import React from 'react'
import PropTypes from 'prop-types'

class Clock extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      initTime: 0,
      timeSince: 0,
      year: 2020,
      month: 1,
      monthName: "January",
      day: 1,
      firstRun: true
    }
  }
  setInitTime = ()  => {
    if (this.state.firstRun) {
      var date = new Date();
      var init = date.getTime();
      console.log(init);
      this.setState({initTime: init});
      this.setState({firstRun: false});
    }
  }
  updateClock() {
    var newDate;
    var now;
    const updateTime = setInterval(() => {
    newDate = new Date();
    now = newDate.getTime();
    var timeSince = now - this.state.initTime;
    console.log(timeSince);
    this.setState({timeSince: timeSince});}
      , 1000
    );
  }
  render () {
    this.setInitTime();
    this.updateClock();
    return (
      <div style = {clockContainerStyle}>
        {this.state.monthName} {this.state.day}, {this.state.year} {this.state.timeSince}
      </div>
    )
  }
}

export default Clock;

const clockContainerStyle = {
  margin: "10px auto",
  textAlign: "center"
}
