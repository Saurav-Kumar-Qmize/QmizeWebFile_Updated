import Navbar2 from '../Common/Navbar2'
import Navbar1 from '../Common/Navbar1'
import UAEPricing from "../UAEPricing/UaePricing";
import Footer from '../Common/Footer';
import {Helmet} from "react-helmet";
import FormContact from '../Common/FormContact';

const WABA = () => {
  return (
    <>


     <Helmet>
        <title>WhatsApp Business API Provider in India | Best WhatsApp API Services</title>
        <meta
          name="description"
          content="Official WhatsApp Business API provider in India offering secure automation, CRM integration, and transparent WhatsApp Business API pricing. Choose Qmize for scalable WhatsApp API services."
        />
        <link rel="canonical" href="https://qmize.com/whatsapp-business-api" />
      </Helmet>
    <Navbar1/>
    <Navbar2/>
    <UAEPricing/>
    <FormContact/>
    <Footer/>
    </>
  )
}

export default WABA