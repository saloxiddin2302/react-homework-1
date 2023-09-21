import React from 'react'
import Header from '../components/header/Header'
import Services from '../components/services/Services'
import Cleaning from '../components/cleaning/Cleaning'
import Professional from '../components/professional/Professional'
import Covid from '../components/covid/Covid'
import Office from '../components/office/Office'
import Makes from '../components/makes/Makes'
import Article from '../components/article/Article'
import Call from '../components/call/Call'
import Footer from '../components/footer/Footer'


export default function HomePage() {
  return (
    <>
    
      <Header/>
      <Services/>
      <Cleaning/>
      <Professional/>
      <Covid/>
      <Office/>
      <Makes/>
      <Article/>
      <Call/>
      <Footer/>
    </>
  )
}
