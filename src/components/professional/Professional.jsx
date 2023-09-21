import React, { Component } from 'react'
import './professional.css'
import pn1 from '../../assets/images/pn1.svg'
import pn2 from '../../assets/images/pn2.svg'
import pn3 from '../../assets/images/pn3.svg'

export default class Professional extends Component {
  render() {
    return (
      <section>
        <div className="container">
            <div className="professional">
                <div className='prof-title'>
                    <div>
                        <h2>Take a look at our <br /> professional services</h2>
                    </div>
                    <div>
                        <button className='btn btn-white'>Explore services</button>
                    </div>
                </div>
                <div className='prof-cards'>
                    <div className='prof-card'>
                        <img src={pn1} alt="" />
                        <h4>House cleaning</h4>
                        <p>Lorem ipsum dolor sit amet consecte tur adipiscing elit semper dalaracc lacus vel facilisis volutpat est.</p>
                    </div>
                    <div className='prof-card'>
                        <img src={pn2} alt="" />
                        <h4>House cleaning</h4>
                        <p>Lorem ipsum dolor sit amet consecte tur adipiscing elit semper dalaracc lacus vel facilisis volutpat est.</p>
                    </div>
                    <div className='prof-card'>
                        <img src={pn3} alt="" />
                        <h4>House cleaning</h4>
                        <p>Lorem ipsum dolor sit amet consecte tur adipiscing elit semper dalaracc lacus vel facilisis volutpat est.</p>
                    </div>
                </div>
            </div>
        </div>
      </section>
    )
  }
}
