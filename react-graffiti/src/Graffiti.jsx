import React, {Component} from 'react';
import styled from 'styled-components'

const fonts = [
  'Bungee Shade',
  'Creepster',
  'Frijole',
  'Lobster',
  'Monoton',
  'Pacifico',
  'Permanent Marker',
  'Rock Salt'
]

const StyledH1 = styled.h1`
  position: absolute;
  left: ${props => props.x}px;
  top: ${props => props.y}px;
  font-family: ${props => fonts[props.font]};
  transform: rotate(${props => props.rotation}deg);
  color: ${props => props.color};
  font-size: ${props => props.size}px;
`

class Graffiti extends Component {
  render() {
    return (
      <StyledH1
        x={this.props.message.x}
        y={this.props.message.y}
        font={this.props.message.font}
        color={this.props.message.color}
        rotation={this.props.message.rotation}
        size={this.props.message.size}
      >
        {this.props.message.text}
      </StyledH1>
    );
  }
}
export default Graffiti;
