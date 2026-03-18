
import Navbar1 from '../Common/Navbar1'
import Navbar2 from '../Common/Navbar2'
import HeroSection from '../Home/HeroSection'
import ServiceSection from '../Home/ServiceSection';
import Solutions from "../Home/Solutions";
import Footer from "../Common/Footer";
import { Helmet } from 'react-helmet';

const Home = () => {
  return (
    <>


    <Helmet>
        <title>Qmize || Best WhatsApp Business API Platform</title>
        <meta
          name="description"
          content="Find the best WhatsApp Business API provider in India. Detailed comparison of features, pricing, reviews & WhatsApp API platforms for businesses."
        />
        <link rel="canonical" href="https://qmize.com" />
      </Helmet>


    <Navbar1/>
    <Navbar2/>
    <HeroSection/>
    <ServiceSection/>
    <Solutions/>
    <Footer/>
    </>
  )
}

export default Home