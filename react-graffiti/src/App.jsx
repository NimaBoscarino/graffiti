import React, {Component} from 'react';
import Wall from './Wall.jsx'


class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      messages: []
    }

    this.socket = new WebSocket('ws://localhost:8080');

    this.onMessage = this.onMessage.bind(this)

    this.socket.onmessage = this.onMessage
  }

  onMessage(payload) {
    console.log(payload.data)
    this.setState({
      messages: JSON.parse(payload.data)
    })
  }

  render() {
    return (
      <Wall messages={this.state.messages} socket={this.socket}/>
    );
  }
}
export default App;
