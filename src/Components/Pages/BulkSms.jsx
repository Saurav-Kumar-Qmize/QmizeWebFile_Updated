import React from 'react'
import Navbar2 from '../Common/Navbar2';
import Navbar1 from "../Common/Navbar1";
import BulkSmsServices from "../BulkSmsServices/BulkSmsServices";
import Footer from '../Common/Footer';
import { Helmet } from 'react-helmet';

const BulkSms = () => {
  return (
    <>

    <Helmet>
        <title>Bulk SMS Service Provider in India | SMS Gateway</title>
        <meta
          name="description"
          content="Qmize is a reliable bulk SMS service provider in India offering promotional, transactional & OTP SMS with powerful SMS gateway API."
        />
        <link rel="canonical" href="https://qmize.com/bulk-sms-services" />
      </Helmet>
    
    <Navbar1/>
    <Navbar2/>
    <BulkSmsServices/> 
    <Footer/>   
    
    </>
  )
}

export default BulkSms