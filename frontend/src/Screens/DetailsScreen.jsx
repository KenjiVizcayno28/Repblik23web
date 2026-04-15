import { useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Card, Col, Container, Row } from 'react-bootstrap';
import Header from '../Components/Header';
import Footer from '../Components/Footer';

export default function DetailsScreen() {
  const navigate = useNavigate();
  const visionMissionRef = useRef(null);
  const [isVlogOpen, setIsVlogOpen] = useState(false);

  const scrollToSection = (sectionRef) => {
    if (!sectionRef.current) {
      return;
    }

    const y = sectionRef.current.getBoundingClientRect().top + window.scrollY - 96;
    window.scrollTo({ top: y, behavior: 'smooth' });
  };

  return (
    <main className="page-shell details-shell">
      <Container fluid="xl" className="page-wrap">
        <nav className="home-nav" aria-label="Details page navigation">
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
            <button type="button" className="home-nav-button" onClick={() => scrollToSection(visionMissionRef)}>
              Vision &amp; Mission
            </button>
            <button type="button" className="home-nav-button" onClick={() => navigate('/')}>
              Home
            </button>
          </div>
        </nav>

        <Header
          title="REPBLIK23"
          subtitle={null}
        >
          <div className="profile-intro-grid">
            <p className="profile-intro-copy">
              Repblik23 is a proud Filipino apparel brand founded in 2013 by Hernan Vizcayno.
              What started as a small home-based tailoring venture has grown into a trusted
              maker of high-quality sportswear and custom garments. Repblik23 specializes in
              durable, comfortable uniforms, including basketball jerseys, team wear, and
              customized clothing for schools, organizations, and local communities. With a
              strong commitment to craftsmanship and Filipino pride, Repblik23 continues to be
              a reliable choice for custom apparel.
            </p>
            <div className="profile-intro-ceo-wrap">
              <img className="profile-intro-ceo" src="/images/ceo.jpg" alt="Repblik CEO" />
            </div>
          </div>
        </Header>

        <header className="details-header">
          <div>
            <h1 className="details-title-custom">
              <span className="details-title-company">Company</span>{' '}
              <span className="details-title-profile">Profile</span>
            </h1>
            <p>
              A concise snapshot of Repblik23's growth, values, and future direction.
            </p>
          </div>
        </header>

        <Row className="g-4 align-items-stretch">
          <Col lg={7}>
            <Card className="poster-card full-height-card">
              <Card.Body>
                <div className="section-title-row">
                  <h2>Company Timeline</h2>
                  <span className="section-tag">Milestones</span>
                </div>
                <div className="detail-timeline">
                  <article className="timeline-item">
                    <span className="timeline-year">2012</span>
                    <p>
                      Armed with passion and determination, Repblik23 started in a humble home. Hernan Vizcayno personally sewed sportswear, especially basketball jerseys. Which slowly gained recognition for their quality and workmanship.
                    </p>
                  </article>
                  <article className="timeline-item">
                    <span className="timeline-year">2014</span>
                    <p>
                      The CEO of Repblik23 needed more manpower for production. By hiring more tailors and workers, he provided livelihood opportunities to many individuals in the community. From a one-man operation, Repblik23 grew into a thriving clothing business known for its reliability and crafstmanship.
                    </p>
                  </article>
                  <article className="timeline-item">
                    <span className="timeline-year">2015</span>
                    <p>
                      A major milestone came in 2015 when Hernan formed a strategic partnership with Mark Joseph Ocampo, CEO of Mjcshap Sport Supplies Trading. With Mark Joseph taking the lead in Public Relations, he played a vital role in building public trust, expanding network connections, and elevating the brand's reputation.
                    </p>
                  </article>
                  <article className="timeline-item">
                    <span className="timeline-year">Today</span>
                    <p>
                      Together, they continued to foster lasting relationships by consistently delivering high-quality products and excellent customer service. Earning loyalty and continued support of their customers and partners.
                    </p>
                  </article>

                  <div className="timeline-video-dropdown">
                    <button
                      type="button"
                      className="timeline-video-trigger"
                      onClick={() => setIsVlogOpen((current) => !current)}
                      aria-expanded={isVlogOpen}
                      aria-controls="company-vlog-panel"
                    >
                      <span className="timeline-video-trigger-copy">
                        <span>Company Vlog</span>
                        <span className="timeline-video-trigger-description">
                          Provided by MarCelo Yumul, a known vlogger who has been actively documenting local businesses in San Basilio, Sta. Rita, Pampanga. Check out the vlog for an authentic glimpse into Repblik23's operations and culture.
                        </span>
                      </span>
                      <span className="timeline-video-trigger-state">{isVlogOpen ? 'Hide' : 'Watch'}</span>
                    </button>

                    {isVlogOpen ? (
                      <div id="company-vlog-panel" className="timeline-video-panel">
                        <div className="timeline-video-frame">
                          <iframe
                            src="https://www.facebook.com/plugins/video.php?href=https%3A%2F%2Fwww.facebook.com%2Freel%2F913188605043364%2F&show_text=false&width=360&adapt_container_width=true"
                            title="Repblik23 company vlog"
                            width="360"
                            height="640"
                            style={{ border: 0, overflow: 'hidden' }}
                            scrolling="no"
                            frameBorder="0"
                            allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
                            loading="lazy"
                            allowFullScreen
                          />
                        </div>
                        <p className="timeline-video-note">
                          Watch the company vlog on Facebook if the embedded preview does not load in your browser.
                        </p>
                      </div>
                    ) : null}
                  </div>
                </div>
              </Card.Body>
            </Card>
          </Col>

          <Col lg={5}>
            <div id="visionmission" ref={visionMissionRef} className="section-anchor">
              <Card className="poster-card full-height-card">
                <Card.Body>
                  <div className="section-title-row">
                    <h2>Company Mission &amp; Vision</h2>
                    <span className="section-tag">Guiding principles</span>
                  </div>

                  <div className="detail-mv-stack">
                    <article className="detail-mv-item">
                      <img className="detail-mv-image detail-mv-image-featured" src="/images/partner.jpg" alt="Partner logo" />
                      <div className="detail-mv-copy">
                        <h3>Company Mission</h3>
                        <p>
                          To design and deliver high-quality, performance-ready sportswear tailored to the needs of youth, schools, and local leagues.
                          To celebrate Filipino talent, teamwork, and culture through personalized designs that reflects unity, pride, and passion.
                          To build lasting partnerships with teams, coaches, and organizations by offering reliable service, creative design, and local craftsmanship.
                        </p>
                      </div>
                    </article>
                    <article className="detail-mv-item">
                      <img className="detail-mv-image detail-mv-image-secondary" src="/images/partner2.jpg" alt="Partner logo" />
                      <div className="detail-mv-copy">
                        <h3>Company Vision</h3>
                        <p>
                          To be the leading Filipino brand in custom sportswear. Empowering every athlete, team, and community to wear their identity with pride and play with purpose.
                        </p>
                      </div>
                    </article>
                  </div>
                </Card.Body>
              </Card>
            </div>
          </Col>
        </Row>

        <Footer />
      </Container>
    </main>
  );
}