import React from 'react'
import './Semantics.css'
import Section from './Section'
import Navbar from './Navbar'
import Article from './Article'
import Footer from './Footer'
import Aside from './Aside'

function Semantics() {
  return (
    <main>

      <Navbar/>

      <div className="container">

        <div className="contain">
            <Section/>
            <Article/>
        </div>

        <Aside/>

      </div>

      <Footer/>

    </main>
  )
}

export default Semantics
