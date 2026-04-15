import { Card } from 'react-bootstrap';

const defaultContacts = [
  ['Phone', '0998 421 2018'],
  ['Email', 'hernanvizcayno@gmail.com'],
  ['Facebook', 'https://www.facebook.com/Repblik23'],
  ['Address', 'REPBLIK23, Zone-1, Arizona Ville, San Basilio, Sta. Rita, Pampanga, 2002'],
];

export default function Contacts({ title = 'Contact Us Today', items = defaultContacts }) {
  return (
    <Card className="poster-card contact-card">
      <Card.Body>
        <div className="section-title-row">
          <h2>{title}</h2>
          <span className="section-tag">Company Info</span>
        </div>
        <div className="contact-grid">
          {items.map(([label, value]) => (
            <div className="contact-row" key={label}>
              <span className="contact-label">{label}</span>
              <span className="contact-value">{value}</span>
            </div>
          ))}
        </div>
        <div className="small-copy">
          Join the revolution. Rep your game. Rep your team. Rep your roots.
        </div>
      </Card.Body>
    </Card>
  );
}