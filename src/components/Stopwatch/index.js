import {Component} from 'react'
import './index.css'

class Stopwatch extends Component {
  state = {time: 0, isTimerRunning: false}

  componentWillUnmount() {
    clearInterval(this.timerId)
  }

  renderMinutes = () => {
    const {time} = this.state
    const minutes = Math.floor(time / 60)
    if (minutes < 10) {
      return `0${minutes}`
    }
    return minutes
  }

  renderSeconds = () => {
    const {time} = this.state
    const seconds = Math.floor(time % 60)
    if (seconds < 10) {
      return `0${seconds}`
    }
    return seconds
  }

  startButton = () => {
    this.timerId = setInterval(this.runClock, 1000)
    this.setState({isTimerRunning: true})
  }

  runClock = () => {
    this.setState(prevState => ({time: prevState.time + 1}))
  }

  stopButton = () => {
    clearInterval(this.timerId)
    this.setState({isTimerRunning: false})
  }

  resetButton = () => {
    this.setState({isTimerRunning: false, time: 0})
    clearInterval(this.timerId)
  }

  render() {
    const {isTimerRunning} = this.state
    const displayText = `${this.renderMinutes()}:${this.renderSeconds()}`

    return (
      <div className="bg-container">
        <div className="main-container">
          <h1 className="heading">Stopwatch</h1>
          <div className="timer-container">
            <div className="timer-header">
              <img
                src="https://assets.ccbp.in/frontend/react-js/stopwatch-timer.png"
                alt="stopwatch"
                className="clock-img"
              />
              <p className="timer-text">Timer</p>
            </div>
            <h1 className="time">{displayText}</h1>
            <div className="button-container">
              <button
                type="button"
                className="button start"
                onClick={this.startButton}
                disabled={isTimerRunning}
              >
                Start
              </button>
              <button
                type="button"
                className="button stop"
                onClick={this.stopButton}
              >
                Stop
              </button>
              <button
                type="button"
                className="button reset"
                onClick={this.resetButton}
              >
                Reset
              </button>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Stopwatch
