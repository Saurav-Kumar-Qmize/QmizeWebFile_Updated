import React from 'react'
import Navbar1 from '../Common/Navbar1'
import Navbar2 from '../Common/Navbar2'
import PRServices from "../PRFiles/PRServices";
import Footer from '../Common/Footer';
import {Helmet} from "react-helmet";

const PRservice = () => {
  return (
    <>

     <Helmet>
           <title>Press Release Services || Qmize </title>
           <meta
             name="description"
             content="Press Release Services at Qmize"
           />
           <link rel="canonical" href="https://qmize.com/press-release-services" />
         </Helmet>

    <Navbar1/>
    <Navbar2/>
    <PRServices/>
    <Footer/>
    </>
  )
}

export default PRservice