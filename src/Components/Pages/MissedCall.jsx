import React from 'react'
import Navbar2 from '../Common/Navbar2'
import Navbar1 from '../Common/Navbar1'
import MissedCallService from "../MissedCallFiles/MissedCallServices";
import Footer from "../Common/Footer";
import { Helmet } from 'react-helmet';

const MissedCall = () => {
  return (
   <>
    <Helmet>
        <title>Missed Call Service Provider in India | Best Missed Call Services - Qmize</title>

        <meta
          name="description"
          content="Qmize is a trusted missed call service provider in India offering secure missed call services for lead generation, verification, and campaigns at the best missed call service price."
        />

       

        <link rel="canonical" href="https://qmize.com/missed-call-service" />
      </Helmet>

      <Navbar1/>
      <Navbar2/>
      <MissedCallService/>
      <Footer/>

   
   
   
   
   </>
  )
}

export default MissedCall