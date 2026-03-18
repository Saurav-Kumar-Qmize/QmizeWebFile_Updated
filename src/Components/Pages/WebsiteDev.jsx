import React from 'react';
import Navbar1 from '../Common/Navbar1';
import Navbar2 from '../Common/Navbar2';
import WebsiteService from '../WebsiteDevFiles/WebDevService';
import Footer from '../Common/Footer';
import {Helmet } from "react-helmet"

const WebsiteDev = () => {
  return (
    <>


    <Helmet>
        <title>Website Development Company And Digital Agency || Qmize </title>
        <meta
          name="description"
          content="Website Development Company and Digital Agency"
        />
        <link rel="canonical" href="https://qmize.com/website-development-company-and-digital-agency" />
      </Helmet>
    <Navbar1/>
    <Navbar2/>
    <WebsiteService/>
    <Footer/>















   


    
    
    </>
  )
}

export default WebsiteDev