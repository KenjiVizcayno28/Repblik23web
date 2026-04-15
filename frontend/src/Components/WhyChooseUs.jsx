import { Card } from 'react-bootstrap';

const defaultReasons = [
  'Trusted quality and craftsmanship',
  'Skilled and experienced tailors',
  'Strong customer support and PR',
  'Fast, reliable, and personalized service',
];

export default function WhyChooseUs({ title = 'Why Choose Us?', items = defaultReasons }) {
  return (
    <Card className="poster-card why-card">
      <Card.Body>
        <div className="section-title-row">
          <h2>{title}</h2>
          <span className="section-tag">Rep your team.</span>
        </div>
        <div className="reason-list">
          {items.map((reason) => (
            <div className="reason-item" key={reason}>
              <span>{reason}</span>
              <span className="check-badge" aria-hidden="true">✓</span>
            </div>
          ))}
        </div>
      </Card.Body>
    </Card>
  );
}