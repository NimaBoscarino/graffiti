import React, {Component} from 'react';
import Wall from './Wall.jsx'

const messages = ['hello']

class App extends Component {
  render() {
    return (
      <Wall messages={messages}/>
    );
  }
}
export default App;
