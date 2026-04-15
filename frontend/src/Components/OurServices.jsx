import { useState } from 'react';
import { Card } from 'react-bootstrap';

const defaultServices = [
  {
    id: 'custom-sportwear',
    title: 'Custom Sportwear',
    description:
      'We create and customize sportwear and apparel for teams, individuals, and organizations. ',
  },
  {
    id: 'apparel-design-layout',
    title: 'Apparel Design and Layout',
    description:
      'Send us your team information, colors, and designs, and we will create a custom layout for your sportwear. We can also work with your existing design files to prepare them for production.',
  },
  {
    id: 'team-uniform-production',
    title: 'Team Uniform Production',
    description:
      'We produce high-quality team uniforms in a variety of styles and materials. Our production process ensures that your uniforms are durable, comfortable, and visually appealing. For more information on our production capabilities, please contact us directly.',
  },
  {
    id: 'partnership-collaboration-services',
    title: 'Partnership and Collaboration',
    logoSrc: '/images/shapsports.jpg',
    logoAlt: 'Shapsports logo',
    description:
      'We are in partnership with Mjcshap Sport Supplies Trading, a trusted provider of service and support for custom apparel. You can contact them directly at https://www.facebook.com/mjcshapsports',
  },
];

export default function OurServices({ items = defaultServices }) {
  const [openId, setOpenId] = useState(items[0]?.id || items[0]?.title || null);

  const normalizedItems = items.map((item, index) => {
    if (typeof item === 'string') {
      return {
        id: `service-${index}`,
        title: item,
        description: 'Add your full service details here.',
      };
    }

    return {
      id: item.id || `service-${index}`,
      title: item.title,
      logoSrc: item.logoSrc || null,
      logoAlt: item.logoAlt || '',
      description: item.description || 'Add your full service details here.',
    };
  });

  return (
    <section className="services-section">
      <div className="service-grid">
        {normalizedItems.map((service) => {
          const isOpen = openId === service.id;

          return (
            <Card className={`service-pill ${isOpen ? 'is-open' : ''}`} key={service.id}>
              <button
                type="button"
                className="service-dropdown-trigger"
                aria-expanded={isOpen}
                onClick={() => setOpenId(isOpen ? null : service.id)}
              >
                <span className="service-title">{service.title}</span>
                <span className={`service-arrow ${isOpen ? 'is-open' : ''}`} aria-hidden="true">
                  v
                </span>
              </button>
              {isOpen ? (
                <div className="service-dropdown-body">
                  {service.logoSrc ? (
                    <div className="service-logo-wrap">
                      <img className="service-logo" src={service.logoSrc} alt={service.logoAlt || service.title} />
                    </div>
                  ) : null}
                  {Array.isArray(service.description) ? (
                    service.description.map((paragraph) => (
                      <p key={paragraph} className="service-description">
                        {paragraph}
                      </p>
                    ))
                  ) : (
                    <p className="service-description">{service.description}</p>
                  )}
                </div>
              ) : null}
            </Card>
          );
        })}
      </div>
    </section>
  );
}