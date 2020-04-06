import React from "react";

class TwitterMessage extends React.Component {
  constructor() {
    super();

    this.state = {
      message: ""
    };
  }

  onChange = (event) => {
    this.setState({
      message: event.target.value
    })
  }

  render() {
    return ( 
      <div>
        <strong>Your message:</strong>
        <input onChange={this.onChange} value={this.state.message} type="text" name="message" id="message" />
        <p>{this.props.maxChars - this.state.message.length}</p>
      </div>
    );
  }
}

export default TwitterMessage;
