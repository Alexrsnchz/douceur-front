import Navbar from '@/components/misc/Navbar.jsx';
import Header from '@/components/home/Header.jsx';
import About from '@/components/home/About.jsx';
import Featured from '@/components/home/Featured.jsx';
import Testimonials from '@/components/home/Testimonials.jsx';
import Footer from '@/components/misc/Footer.jsx';

function Home() {
  return (
    <>
      <Navbar />
      <Header />
      <About />
      <Featured />
      <Testimonials />
      <Footer />
    </>
  );
}

export default Home;
