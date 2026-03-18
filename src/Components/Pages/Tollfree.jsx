import React from 'react'
import Navbar2 from '../Common/Navbar2'
import Navbar1 from '../Common/Navbar1'
import Footer from '../Common/Footer'
import TollfreeSection from '../TollfreeFiles/TollfreeServices'
import { Helmet } from 'react-helmet'

const Tollfree = () => {
  return (
    <>


    
       <Helmet>
                 <title>Toll Free Number for Business | 1800 Toll Free Number Provider in India - Qmize</title>
                 <meta
                   name="description"
                   content="Get a toll free number for business at Qmize. Trusted 1800 toll free number provider in India offering affordable pricing, advanced call features, and easy setup."
                 />
                 <link rel="canonical" href="https://qmize.com/toll-free-number-for-business" />
               </Helmet>
    
    <Navbar1/>
    <Navbar2/>
    <TollfreeSection/>
    <Footer/>
    
    
    </>
  )
}

export default Tollfree