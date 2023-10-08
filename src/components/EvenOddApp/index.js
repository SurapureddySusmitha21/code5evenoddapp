// Write your code here
import {Component} from 'react'
import './index.css'

class EvenOddApp extends Component {
  state = {count: 0}

  getRandomnum = () => Math.ceil(Math.random() * 100)

  clickIncrement = () => {
    const randomNumber = this.getRandomnum()
    this.setState(prevsState => ({count: prevsState.count + randomNumber}))
  }

  render() {
    const {count} = this.state
    const evenROdd = count % 2 === 0 ? 'Event' : 'Odd'
    return (
      <div className="bg-container">
        <h1 className="heading">Count {count}</h1>
        <p className="paragraph">Count is {evenROdd}</p>
        <button
          className="increment-btn"
          type="button"
          onClick={this.clickIncrement}
        >
          Increment
        </button>
        <p className="num_bet-paragraph">
          *Increase By Random Number Between 0 to 100
        </p>
      </div>
    )
  }
}
export default EvenOddApp
