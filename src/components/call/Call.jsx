import React, { Component } from 'react'
import './call.css'
import telLogo from '../../assets/images/tel-image.svg'
export default class Call extends Component {
  render() {
    return (
      <section>
        <div className="container">
             <div className="call">
                <div className='call-title'>
                    <div>
                        <h2 className='call-h2'>Request a free cleaning quote today</h2>
                        <p>In dignissim euismod pretium amet enim a eu nam ut urna accumsan pellentesque lacus duis pharetra eutortor.</p>
                        <div className='call-sw'>
                        <span className='tel-img'>
                    <img src={telLogo} alt="tel-logo" />
                  </span>
                  <span className='quality-title-tet'>
                    <h4>Call us now</h4>
                    <p>(414) 567 - 2109</p>
                  </span>
                        </div>

                    </div>
                    <div className='call-fw'>
                        <h2>Not convinced yet?</h2>
                        <p>Massa bibendum consectetur maurisid gravida <br /> purus, dolor dui amet morbi non nunc urna <br /> purus diam.</p>
                        <button className='btn btn-white btn-sw'>Browse our packages</button>
                    </div>
                </div>
                <div className='inputs'>
                    <div  className='inputs-w'> <div> <h4>Full name</h4>
                    <input type="text" />
                         </div>

                         <div> <h4>Full name</h4>
                         <input type="text" />
                         </div>

                         <div> <h4>Full name</h4>
                         <input type="text" />
                         </div>
                        
                    </div>

                    <div  className='inputs-w'> <div> <h4>Full name</h4>
                    <input type="text" />
                         </div>

                         <div> <h4>Full name</h4>
                         <input type="text" />
                         </div>

                         <div> <h4>Full name</h4>
                         <input type="text" />
                         </div>
                        
                    </div>
                    <span className='text-input'> <h4>Add a note</h4>
                    <input  type="text" />
                    <button  className='btn btn-sq '>submit message</button></span>
                    
                    
                </div>
             </div>
        </div>
      </section>
    )
  }
}
