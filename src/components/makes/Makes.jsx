import React, { Component } from 'react'
import './makes.css'
import make1 from '../../assets/images/make1.svg'
import make2 from '../../assets/images/make2.svg'
import make3 from '../../assets/images/make3.svg'
import makeBig from '../../assets/images/make-big.png'

export default class Makes extends Component {
  render() {
    return (
      <section>
        <div className="container">
            <div className="makes">
            <div>
                <div className='makes-item'>
                    <h2>What makes us different?</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.</p>
                    <p>Sed ut perspiciatis unde omnis iste natus error sit atem accusantium doloremque laudantiu sed ut.</p>
                </div>
                <div className='makes-s'>
                    <div><img src={make1} alt="" /></div>
                    <div><img src={make2} alt="" /></div>
                    <div><img src={make3} alt="" /></div>
                </div>
                <div>
                    <button className='btn makes-btn'>Get a free quote</button>
                </div>
            </div>

            <div>
                <img src={makeBig} alt="" />
            </div>
            </div>
        </div>
      </section>
    )
  }
}
