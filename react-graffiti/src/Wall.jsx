import React, {Component} from 'react';
import styled from 'styled-components'
import Graffiti from './Graffiti.jsx'

const FullscreenDiv = styled.div`
  height: 100%;
  width: 100;
  background: url('build/bricks.jpg');
`

class Wall extends Component {
  constructor(props) {
    super(props)

    this.socket = props.socket
    this.handleClick = this.handleClick.bind(this)
  }

  handleClick(event) {
    const text = prompt('Enter some text:')

    // send text to server, with coords
    this.socket.send(JSON.stringify({
      x: event.pageX,
      y: event.pageY,
      text: text,
      id: Math.random(),
      color: '#'+(Math.random()*0xFFFFFF<<0).toString(16), //https://stackoverflow.com/a/5092846
      font: Math.floor(Math.random() * (7 - 0 + 1)) + 0,
      rotation: Math.floor(Math.random() * (120 - 0 + 1)) + 0 - 60,
      size: Math.floor(Math.random() * (60 - 0 + 1)) + 40
    }));

  }

  render() {
    // return a fullscreen div with "Graffiti" components
    return (
      <FullscreenDiv onClick={this.handleClick}>
        {
          this.props.messages.map(message => <Graffiti message={message} key={message.id}/>)
        }
      </FullscreenDiv>
    );
  }
}
export default Wall;
