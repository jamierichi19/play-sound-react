import React, { Component } from 'react';

import hello from './audioClips/hello.mp3';
import { Howl, Howler } from 'howler';

const audioClips = [{
  sound: hello, label: 'hello'
}]

class App extends Component {

  SoundPlay = (src) => {
    const sound = new Howl({
      src
    })
    sound.play();
  }
  renderButtonandSound = () => {
    return audioClips.map((soundObj, index) => {
      return(
        <button key={index} onClick={() => this.SoundPlay(soundObj.sound)}>
          {soundObj.label}
        </button>
      )
    })
  }
  render() {
    Howler.volume(2)
    return (
      <div>
      {this.renderButtonandSound()}
      </div>
    )
  }
}

export default App
