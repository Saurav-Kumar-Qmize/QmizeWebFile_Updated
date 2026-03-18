import React from 'react'
import Navbar2 from '../Common/Navbar2'
import Navbar1 from '../Common/Navbar1'
import PromotionalSMS from "../PromotionalFiles/PromotionalSMS";
import Footer from "../Common/Footer";
import { Helmet } from 'react-helmet';

const Promotional = () => {
  return (
    <>

     <Helmet>
        <title>Promotional SMS Service in India - Qmize</title>

        <meta
          name="description"
          content="Qmize offers a reliable promotional SMS service in India. Reach customers instantly with the best promotional bulk SMS provider. Affordable pricing & high delivery."
        />

        <meta
          name="keywords"
          content="WhatsApp Business API, Qmize, WhatsApp marketing, WhatsApp automation"
        />

        <link rel="canonical" href="https://qmize.com/promotional-sms" />
      </Helmet>
    
    <Navbar1/>
    <Navbar2/>
    <PromotionalSMS/>
    <Footer/>

    
    
    
    
    
    </>
  )
}

export default Promotional