import {Component} from 'react'
import './index.css'

const headsImage = 'https://assets.ccbp.in/frontend/react-js/heads-img.png'
const tailsImage = 'https://assets.ccbp.in/frontend/react-js/tails-img.png'

class CoinToss extends Component {
  state = {headsCount: 0, tailsCount: 0, resultImage: headsImage}

  handleToss = () => {
    const {headsCount, tailsCount} = this.state
    let latestHeadsCount = headsCount
    let latestTailsCount = tailsCount
    let tossImage = headsImage

    const randomNumber = Math.floor(Math.random() * 2)
    if (randomNumber === 0) {
      latestHeadsCount += 1
      tossImage = headsImage
    } else {
      latestTailsCount += 1
      tossImage = tailsImage
    }
    this.setState({
      headsCount: latestHeadsCount,
      tailsCount: latestTailsCount,
      resultImage: tossImage,
    })
  }

  render() {
    const {headsCount, tailsCount, resultImage} = this.state
    const total = headsCount + tailsCount
    return (
      <div className="app-container">
        <div className="coin-toss-container">
          <h1 className="heading">Coin Toss Game</h1>
          <p className="description">Heads (or) Tails</p>
          <img
            src={resultImage}
            alt="toss result"
            className="toss-result-img"
          />
          <button type="button" className="button" onClick={this.handleToss}>
            Toss Coin
          </button>
          <div className="counts-container">
            <p className="count">Total: {total}</p>
            <p className="count">Heads: {headsCount}</p>
            <p className="count">Tails: {tailsCount}</p>
          </div>
        </div>
      </div>
    )
  }
}

export default CoinToss
