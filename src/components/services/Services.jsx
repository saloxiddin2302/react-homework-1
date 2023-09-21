import React, { Component } from 'react'
import './service.css'
import serCard1 from '../../assets/images/service1.svg'
import serCard2 from '../../assets/images/service2.svg'
import serCard3 from '../../assets/images/service3.svg'

export default class Services extends Component {
  render() {
    return (
      <section>
        <div className="container">
        <section className='services'>
          <div className='services-title'>
            <h2>How our service works?</h2>
            <p>Sagittis nibh scelerisque vitae eget vulputate sem elementum sed <br /> neque nisi felis non ultrices massa id egestas quam velit pretium nu.</p>
          </div>
          <div className='service-cards'>
            <div>
              <img src={serCard1} alt="service1" />
              <h3 className='service-h3'>1. Schedule online</h3>
              <p className='sp1'>Sagittis nibh scelerisque vitae egetolment vulputate sem elementum sed n.</p>
            </div>
            <div>
              <img src={serCard2} alt="service1" />
              <h3 className='service-h3'>1. Schedule online</h3>
              <p className='sp1'>Sagittis nibh scelerisque vitae egetolment vulputate sem elementum sed n.</p>
            </div>
            <div>
              <img src={serCard3} alt="service1" />
              <h3 className='service-h3'>1. Schedule online</h3>
              <p className='sp1'>Sagittis nibh scelerisque vitae egetolment vulputate sem elementum sed n.</p>
            </div>
          </div>
          <div className='service-buttons'>
            <button className='btn'>Get a free quote</button>
            <button className='btn btn-white'>Explore services</button>
          </div>
        </section>
        </div>
      </section>
    )
  }
}
