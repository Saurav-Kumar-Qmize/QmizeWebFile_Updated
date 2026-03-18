import React from 'react'
import Navbar1 from "../Common/Navbar1"
import Navbar2 from "../Common/Navbar2"
import OTPSMSServices from "../OTPFiles/OTPSMS"
import Footer from '../Common/Footer'
import { Helmet } from 'react-helmet';

const OTPsms = () => {
  return (
    <>

     <Helmet>
        <title>OTP SMS Service Provider in India | Secure OTP Verification</title>
        <meta
          name="description"
          content="Reliable OTP SMS service provider in India offering fast, secure OTP verification with high delivery rates, compliant SMS gateway, and scalable API solutions."
        />
        <link rel="canonical" href="https://qmize.com/otp-sms-service-provider" />
      </Helmet>
    

    <Navbar1/>
    <Navbar2/>
    <OTPSMSServices/>
    <Footer/>

    
    
    
    </>
  )
}

export default OTPsms