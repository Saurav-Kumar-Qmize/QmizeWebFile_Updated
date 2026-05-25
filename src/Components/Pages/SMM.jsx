import React from 'react'
import Navbar1 from '../Common/Navbar1'
import Navbar2 from '../Common/Navbar2'
import SMMServices from "../SMMStuff/SMMServices";
import Footer from '../Common/Footer';
import {Helmet} from "react-helmet";
import FormContact from '../Common/FormContact';

const SMM = () => {
  return (
    <>

   <Helmet>
             <title>Social Media and Digital Marketing  || Qmize </title>
             <meta
               name="description"
               content="Social Media and Digital Marketing"
             />
             <link rel="canonical" href="https://qmize.com/social-media-marketing" />
           </Helmet>
    
    <Navbar1/>
    <Navbar2/>
    <SMMServices/>
    <FormContact/>
    <Footer/>
    </>
  )
}

export default SMM