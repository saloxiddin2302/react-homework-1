import React, { Component } from 'react'
import './cleaning.css'
import clean1 from '../../assets/images/clean1.svg'
import clean2 from '../../assets/images/clean2.svg'
import clean3 from '../../assets/images/clean3.svg'
import big2 from '../../assets/images/Big2.png'


export default class Cleaning extends Component {
  render() {
    return (
      <section>
        <div className="container">
         <div className="cleaning">
            <div className="cleaning-title">
                    <h2>Our cleaning services have <br /> no comparison</h2>
                    <p>Lobortis mattis odio leo eget mauris met aliquet semper molestie <br /> sollicitudin congue massa mauris lectus vitae cras viverra gravida sapien.</p>
            </div>
            <div className="cleaning-cards">
            <div className='card-item'>
                        <div>
                            <img src={clean1} alt="clean1" />
                        </div>
                        <div className='card-item-el'>
                            <h4>Jobs done</h4>
                            <p>12,540+</p>
                        </div>
                        </div>

                        <div className='card-item'>
                        <div>
                            <img src={clean2} alt="clean1" />
                        </div>
                        <div className='card-item-el'>
                            <h4>Jobs done</h4>
                            <p>12,540+</p>
                        </div>
                        </div>

                        <div className='card-item'>
                        <div>
                            <img src={clean3} alt="clean1" />
                        </div>
                        <div className='card-item-el'>
                            <h4>Jobs done</h4>
                            <p>12,540+</p>
                        </div>
                        </div>
            </div>
            <div className="cleaning-img">
                <img src={big2} alt="big-img" />
            </div>
         </div>
        </div>
      </section>
    )
  }
}

