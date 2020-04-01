import React from "react";

class TwitterMessage extends React.Component {
  state = {
      tweet: ''
  }

  handleChange = event => {
    this.setState({
      tweet: event.target.value
    })
  }

  render() {
    let charsLeft = this.props.maxChars - this.state.tweet.length;
    return (
      <div>
        <strong>Your tweet:</strong>
        <input type="text" onChange={this.handleChange} value={this.state.tweet}/>
        <p>You have {charsLeft} characters remaining</p>
      </div>
    );
  }
}


export default TwitterMessage;


