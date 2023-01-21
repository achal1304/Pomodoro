import React, { Component } from 'react'
import { connect } from 'react-redux';
import { addTimer } from '../Redux/Actions/timerActions';
import { MINUTE, SECOND } from '../constants/timerConstant';
import Timer from '../components/Timer';

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedMinutes: 0,
      selectedSeconds: 0,
      totalTimer: 0
    }
    this.handleTotalTime = this.handleTotalTime.bind(this);
    this.handleMinutes = this.handleMinutes.bind(this);
    this.handleSeconds = this.handleSeconds.bind(this);
  }

  handleMinutes = (e) => {
    console.log(e.target.value)
    this.setState({
      selectedMinutes: e.target.value
    })
  }

  handleSeconds = (e) => {
    console.log(e.target.value)

    this.setState({
      selectedSeconds: e.target.value
    })
  }
  handleTotalTime = () => {
    console.log(this.state.selectedSeconds, this.state.selectedMinutes)
    var totalTime = (parseInt(this.state.selectedMinutes) * SECOND) + (parseInt(this.state.selectedSeconds));

    console.log(parseInt(this.state.selectedMinutes) * SECOND);
    console.log(parseInt(this.state.selectedSeconds));
    console.log('totaltime',totalTime)

    this.setState({
      totalTimer: totalTime
    }, () => {
      console.log(this.state.totalTimer);
    })
  }

  render() {
    return (
      <>
        <input type='number' max={60} min={0} placeholder='Minutes'  onChange={(e) => this.handleMinutes(e)} />
        <input type='number' max={60} min={0} placeholder='Seconds'  onChange={(e) => this.handleSeconds(e)} />
        <button onClick={() => this.handleTotalTime()}>Start Timer</button>
        <h1>{this.state.totalTimer}</h1>
        {this.state.totalTimer != 0 ? <Timer timeRemaining={this.state.totalTimer} key={this.state.totalTimer}/> : null}
      </>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    timer: state.timer.time
  }
}

export default connect(mapStateToProps, { addTimer })(Home)