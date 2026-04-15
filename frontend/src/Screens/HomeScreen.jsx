import { useRef } from 'react';
import { Container } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import Header from '../Components/Header';
import Footer from '../Components/Footer';
import OurServices from '../Components/OurServices';
import WhyChooseUs from '../Components/WhyChooseUs';
import Contacts from '../Components/Contacts';

export default function HomeScreen() {
  const navigate = useNavigate();
  const servicesRef = useRef(null);
  const whyRef = useRef(null);
  const contactsRef = useRef(null);

  const scrollToSection = (sectionRef) => {
    if (!sectionRef.current) {
      return;
    }

    const y = sectionRef.current.getBoundingClientRect().top + window.scrollY - 96;
    window.scrollTo({ top: y, behavior: 'smooth' });
  };

  return (
    <main className="page-shell landing-shell">
      <Container fluid="xl" className="page-wrap">
        <nav className="home-nav" aria-label="Landing section navigation">
          <div className="home-nav-brand">
            <a href="/" className="home-nav-logo-link" aria-label="Repblik home">
              <img className="home-nav-logo" src="/images/repbliklogo.png" alt="Repblik logo" />
            </a>
            <div className="home-nav-brand-copy">
              <span className="home-nav-brand-title">REPBLIK23</span>
              <span className="home-nav-brand-subtitle">Rep your game. Rep your style.</span>
            </div>
          </div>
          <div className="home-nav-links">
            <button type="button" className="home-nav-button" onClick={() => scrollToSection(servicesRef)}>
              Our Services
            </button>
            <button type="button" className="home-nav-button" onClick={() => scrollToSection(whyRef)}>
              Why Choose Us
            </button>
            <button type="button" className="home-nav-button" onClick={() => scrollToSection(contactsRef)}>
              Contacts
            </button>
            <button type="button" className="home-nav-button" onClick={() => navigate('/details')}>
              Profile
            </button>
          </div>
        </nav>

        <section id="ourservices" ref={servicesRef} className="section-anchor">
          <Header title="Our Services" subtitle={null}>
            <OurServices />
          </Header>
        </section>

        <section className="home-right-wrap">
          <div className="home-images-gallery">
            <img src="/images/6.jpg" alt="Gallery 6" className="gallery-image" />
            <img src="/images/7.jpg" alt="Gallery 7" className="gallery-image" />
            <img src="/images/8.jpg" alt="Gallery 8" className="gallery-image" />
          </div>

          <aside className="home-right-column">
            <section id="whychooseus" ref={whyRef} className="section-anchor">
              <WhyChooseUs />
            </section>
            <section id="contacts" ref={contactsRef} className="section-anchor">
              <Contacts />
            </section>
          </aside>
        </section>

        <Footer />
      </Container>
    </main>
  );
}