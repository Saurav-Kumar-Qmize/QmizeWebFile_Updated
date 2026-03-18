import React from 'react'
import Navbar2 from '../Common/Navbar2'
import Navbar1 from '../Common/Navbar1';
import CloudTelephony from "../CloudFiles/CloudTelephonyServices";
import Footer from '../Common/Footer'; 
import { Helmet } from 'react-helmet';
const Cloudtelephony = () => {
  return (
    <>

    <Helmet>

     <title>Cloud Telephony Service in India | Best Cloud Telephony Solution – Qmize</title>

        <meta
          name="description"
          content="Qmize offers a powerful cloud telephony service in India with smart IVR, call analytics, and CRM integration. Choose the best cloud telephony solution for businesses."
        />

       

        <link rel="canonical" href="https://qmize.com/cloud-telephony-service" />


    </Helmet>
    
    <Navbar1/>
    <Navbar2/>
    <CloudTelephony/>
    <Footer/>
    
    
    
    </>
  )
}

export default Cloudtelephony