import React, { Component } from 'react'
import './article.css'
import artcl1 from '../../assets/images/artcl1.png'
import artcl2 from '../../assets/images/artcl2.png'

export default class Article extends Component {
  render() {
    return (
      <section>
        <div className="container">
            <div className="article">
                <div className="article-title">
                  <div className="article-item">
                     <h2>Articles & resources</h2>
                     <p>Lobortis mattis odio leo eget mauris met aliquet <br /> semper molestie sollicitudin congue massa <br /> mauris lectus.</p>
                     </div>
                     <div className="article-buttons">
                      <button className='btn'>Get a free quote</button>
                      <button className='btn btn-white'>Browse articles</button>
                     </div>
                </div>
                <div className="article-cards">
                  <div className='article-card-img'>
                    <img src={artcl1} alt="artcl1" />
                    <img src={artcl2} alt="artcl2" />
                  </div>
                  <div className="article-card">
                  <div className='article-card-item'>
                    <div>
                      <h2>8 best vacuum cleaners to clean any mess for your home in 2022</h2>
                      <p>Lorem ipsum dolor sit amet conse ctetur adip <br /> iscing elit justo quis odio sit <br /> sit ac port titor sit males.</p>
                      <div className='article-card-item-set'>
                        <div><h4>Feb 1, 2022</h4></div>
                        <div className='blue-kd'></div>
                      </div>
                    </div>
                    
                  </div>

                  <div className='article-card-item'>
                    <div>
                      <h2>8 best vacuum cleaners to clean any mess for your home in 2022</h2>
                      <p>Lorem ipsum dolor sit amet conse ctetur adip <br /> iscing elit justo quis odio sit <br /> sit ac port titor sit males.</p>
                      <div className='article-card-item-set'>
                        <div><h4>Feb 1, 2022</h4></div>
                        <div className='blue-kd'></div>
                      </div>
                    </div>
                    
                  </div>
                  </div>
                  
                </div>
            </div>
        </div>
      </section>
    )
  }
}
