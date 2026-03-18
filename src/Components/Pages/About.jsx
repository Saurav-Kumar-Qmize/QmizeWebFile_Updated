
import Navbar1 from '../Common/Navbar1'
import Navbar2 from '../Common/Navbar2'
import AboutHeroSec from '../About/AboutHeroSec'
import Footer from '../Common/Footer'
import { Helmet } from 'react-helmet'


const About = () => {
  return (
    <>



    <Helmet>
        <title>About Us - Qmize | WhatsApp Business API Platform</title>

        <meta
          name="description"
          content="Find the best WhatsApp Business API provider in India. Detailed comparison of features, pricing, reviews & WhatsApp API platforms for businesses."
        />

        <meta
          name="keywords"
          content="WhatsApp Business API, Qmize, WhatsApp marketing, WhatsApp automation"
        />

        <link rel="canonical" href="https://qmize.com/about" />
      </Helmet>

    <Navbar1/>
    <Navbar2/>
    <AboutHeroSec/>
    <Footer/>
   
    </>
  )
}

export default About