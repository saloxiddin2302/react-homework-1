import React, { Component } from 'react'
import './office.css'
import galochka from '../../assets/images/galochka.svg'
import officeIMG from '../../assets/images/Office.png'

export default class Office extends Component {
  render() {
    return (
      <section>
        <div className="container">
            <div className="office">
                <div className='office-img'>
                    <img src={officeIMG} alt="house" />
                </div>


                <div className='office-item'>
                    <div>
                        <h2>We cover all areas of your home or office</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.</p>
                    </div>
                    <div className='lists'>
                        <div>
                            <li className='success'><img src={galochka} alt=""/> <h5>Bathrooms</h5></li>
                            <br />
                            <li className='success'><img src={galochka} alt=""/> <h5>Bathrooms</h5></li>
                            <br />
                            <li className='success'><img src={galochka} alt=""/> <h5>Bathrooms</h5></li>
                            <br />
                            <li className='success'><img src={galochka} alt=""/> <h5>Bathrooms</h5></li>
                        </div>
                        <div>
                            <li className='success'><img src={galochka} alt=""/> <h5>Bathrooms</h5></li>
                            <br />
                            <li className='success'><img src={galochka} alt=""/> <h5>Bathrooms</h5></li>
                            <br />
                            <li className='success'><img src={galochka} alt=""/> <h5>Bathrooms</h5></li>
                            <br />
                            <li className='success'><img src={galochka} alt=""/> <h5>Bathrooms</h5></li>

                            <button className='btn office-btn'>Get a free quote</button>
                        </div>
                        <div></div>
                    </div>
                </div>
            </div>
        </div>
      </section>
    )
  }
}
