import React, { Component } from 'react';
import WAVES from 'vanta/dist/vanta.waves.min';
import BIRDS from 'vanta/dist/vanta.birds.min';

export default class Theme extends Component {

    constructor() {
        super()
        this.vantaRef = React.createRef()
      }
      componentDidMount() {
        this.vantaEffect = WAVES({
          el: this.vantaRef.current
        })
      }
      componentWillUnmount() {
        if (this.vantaEffect) this.vantaEffect.destroy()
      }

  render() {
    return <div ref={this.vantaRef}>
        Foreground content goes here
    </div>
  }
}
