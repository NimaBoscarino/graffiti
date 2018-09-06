import React, {Component} from 'react';
import styled from 'styled-components'
import Graffiti from './Graffiti.jsx'

const FullscreenDiv = styled.div`
  height: 100%;
  width: 100;
  background: url('build/bricks.jpg');
`

class Wall extends Component {
  handleClick(event) {
    console.log(event.pageX, event.pageY)
    const text = prompt("Enter some text:")

    // send text to server, with coords
  }

  render() {
    // return a fullscreen div with "Graffiti" components
    return (
      <FullscreenDiv onClick={this.handleClick}>
        {
          this.props.messages.map(message => <Graffiti />)
        }
      </FullscreenDiv>
    );
  }
}
export default Wall;
