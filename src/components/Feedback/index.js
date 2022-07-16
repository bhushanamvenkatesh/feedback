import './index.css'
import {Component} from 'react'

class Feedback extends Component {
  state = {emojiClicked: true}

  change = () => {
    this.setState({emojiClicked: false})
  }

  render() {
    const {resources} = this.props
    const {emojis, loveEmojiUrl} = resources
    const {emojiClicked} = this.state

    console.log(emojiClicked)

    return emojiClicked ? (
      <div>
        <div className="app-container">
          <div className="emogies-container">
            <div>
              <h1 className="text">
                How satisfied are you with our customer support performance
              </h1>
              <div className="emogis">
                <li className="each-emoji">
                  <img
                    src={emojis[0].imageUrl}
                    className="emoji"
                    alt={emojis[0].name}
                    onClick={this.change}
                  />
                  <p>{emojis[0].name}</p>
                </li>
                <li className="each-emoji">
                  <img
                    src={emojis[1].imageUrl}
                    className="emoji"
                    alt={emojis[1].name}
                    onClick={this.change}
                  />
                  <p>{emojis[1].name}</p>
                </li>
                <li className="each-emoji">
                  <img
                    src={emojis[2].imageUrl}
                    className="emoji"
                    alt={emojis[2].name}
                    onClick={this.change}
                  />
                  <p>{emojis[2].name}</p>
                </li>
              </div>
            </div>
          </div>
        </div>
      </div>
    ) : (
      <div className="app-container">
        <div className="Thankyou-container">
          <div className="love">
            <img src={loveEmojiUrl} className="emoji" alt="love emoji" />
            <h1>Thank You</h1>
          </div>
          <p>we will your feed back </p>
        </div>
      </div>
    )
  }
}

export default Feedback
