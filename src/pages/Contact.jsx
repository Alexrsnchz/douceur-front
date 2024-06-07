import Navbar from '@/components/misc/Navbar.jsx';
import Footer from '@/components/misc/Footer.jsx';
import FindUs from '@/components/contact/FindUs.jsx';
import ContactForm from '@/components/contact/ContactForm.jsx';

import { Toaster } from '@/components/ui/toaster';

function Contact() {
  return (
    <>
      <Navbar />
      <FindUs />
      <ContactForm />
      <Toaster />
      <Footer />
    </>
  );
}

export default Contact;
