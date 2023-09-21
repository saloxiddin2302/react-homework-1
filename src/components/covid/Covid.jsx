import React, { Component } from 'react'
import './covid.css'
import Frame from '../../assets/images/Frame.png'

export default class Covid extends Component {
  render() {
    return (
      <section>
        <div className="container">
            <div className="covid">
                <img src={Frame} alt="frame" />
            </div>
        </div>
      </section>
    )
  }
}
