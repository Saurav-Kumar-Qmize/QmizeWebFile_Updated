import React from 'react'
import Navbar2 from '../Common/Navbar2'
import Navbar1 from '../Common/Navbar1'
import TransactionalSMS from "../TransactionalFiles/TransactionalSMS";
import Footer from "../Common/Footer";
import { Helmet } from 'react-helmet';

const Promotional = () => {
  return (
    <>



    <Helmet>
        <title>Transactional SMS Service in India | Reliable SMS Gateway & API</title>
        <meta
          name="description"
          content="Reliable transactional SMS service in India for OTPs, alerts, and notifications. Secure SMS gateway, fast delivery, API integration, and transparent pricing."
        />
        <link rel="canonical" href="https://qmize.com/transactional-sms" />
      </Helmet>
    
    <Navbar1/>
    <Navbar2/>
    <TransactionalSMS/>
    <Footer/>

    
    
    
    
    
    </>
  )
}

export default Promotional