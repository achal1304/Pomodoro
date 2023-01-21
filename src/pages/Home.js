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
      totalTimer: 0,
      timerType: 'custom',
      timertypeToTime: {
        'short': 300,
        'long': 600,
        'pomodoro': 1500,
        'custom': 0
      }
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
    var totalTime = (parseInt(this.state.selectedMinutes) * SECOND) + (parseInt(this.state.selectedSeconds));

    this.setState({
      totalTimer: totalTime,
      timertypeToTime: { ...this.state.timertypeToTime, 'custom': totalTime }
    }, () => {
      console.log(this.state.timertypeToTime)
    })
  }

  handleTimerType = (e) => {
    this.setState({
      timerType: e.target.value,
      totalTimer: this.state.timertypeToTime[e.target.value]
    })
  }
  render() {
    return (
      <>
        {this.state.timerType == 'custom'
          ? <div>
            <input type='number' max={60} min={0} placeholder='Minutes' onChange={(e) => this.handleMinutes(e)} />
            <input type='number' max={60} min={0} placeholder='Seconds' onChange={(e) => this.handleSeconds(e)} />
            <button onClick={() => this.handleTotalTime()}>Start Timer</button>
          </div>
          : null}

        <div>
          <button value='short' onClick={(e) => this.handleTimerType(e)}>Short Break</button>
          <button value='long' onClick={(e) => this.handleTimerType(e)}>Long Break</button>
          <button value='pomodoro' onClick={(e) => this.handleTimerType(e)}>Pomodoro</button>
          <button value='custom' onClick={(e) => this.handleTimerType(e)}>Custom</button>
        </div>
        <h1>{this.state.totalTimer}</h1>
        
        <Timer timeRemaining={this.state.totalTimer} key={this.state.totalTimer} />
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