import React, { Component } from 'react'
import { connect } from 'react-redux';
import { addTimer } from '../Redux/Actions/timerActions';

class Home extends Component {

  setTimer = (e) => {
    this.props.addTimer('21');
  }

  render() {
    return (
      <>
        <button onClick={() => {this.setTimer()}}>Click me!</button>
        <h1>{this.props.timer}</h1>
        <div>Home</div>
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