export default function Footer() {
  return (
    <footer className="bottom-banner app-footer-block" aria-label="Footer">
      <div className="footer-court-mark" aria-hidden="true">
        <span />
      </div>
      <div className="footer-brand">
        <img className="footer-logo" src="/images/repbliklogo.png" alt="Repblik logo" />
        <div className="footer-text">
          <strong className="footer-title">REPBLIK23</strong>
          <span className="footer-subtitle">Rep your game. Rep your style.</span>
        </div>
      </div>
      <p className="footer-note" aria-label="Footer highlights">
        <span>Game-ready kits</span>
        <span>Team identity</span>
        <span>Fast turnaround</span>
      </p>
    </footer>
  );
}