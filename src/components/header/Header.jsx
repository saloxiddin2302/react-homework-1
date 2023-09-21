import React, { Component } from 'react'
import './Header.css'
import NavLogo from '../../assets/images/nav-logo.svg'
import telLogo from '../../assets/images/tel-image.svg'
import bigImg from '../../assets/images/IMAGE.png'

export default class Header extends Component {
  render() {
    return (
      <section>
        <div className="container">
          <section className='navigation'>
            <div className='nav-title'>
              <img src={NavLogo} alt="navlogo" />
              <ul className='nav-ul'>
                <li>Home</li>
                <li>about</li>
                <li>services</li>
                <li>Pages</li>
                <li>contact</li>
              </ul>
            </div>
            <div className='nav-item'>
               <p>cart(0)</p>
               <button className='btn'>Get a free quote</button>

            </div>
          </section>
          <section className='quality'>
            <div className='quality-title'>
                <h2>Quality cleaning for your home</h2>
                <p>Condimentum mauris sit cursus amet id non neque pharetra nulla ornare sed facilisis senectus dapibus nibh ultrices eget suscipit aliquet et nulla magna lacus penatibus.</p>
                <div className='quality-title-set'>
                  <span><button className='btn'>Get a free quote</button></span>
                  <span className='tel-img'>
                    <img src={telLogo} alt="tel-logo" />
                  </span>
                  <span className='quality-title-tet'>
                    <h4>Call us now</h4>
                    <p>(414) 567 - 2109</p>
                  </span>
                </div>
            </div>
            <div className='quality-item'>
                <img src={bigImg} alt="s" />
            </div>
          </section>
        </div>
      </section>
    )
  }
}
