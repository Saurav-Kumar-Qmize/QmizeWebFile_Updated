import React from 'react'
import Navbar2 from '../Common/Navbar2'
import Navbar1 from '../Common/Navbar1'
import SeoServices from "../SEOFiles/SeoServices";
import Footer from '../Common/Footer';
import {Helmet} from "react-helmet";

const SeoService = () => {
  return (
   <>

    <Helmet>
           <title>SEO Services and Digital Marketing  || Qmize </title>
           <meta
             name="description"
             content="SEO Services and Digital Marketing"
           />
           <link rel="canonical" href="https://qmize.com/search-engine-optimization" />
         </Helmet>
   
   <Navbar1/>
   <Navbar2/>
   <SeoServices/>
   <Footer/>
   
   
   </>
  )
}

export default SeoService