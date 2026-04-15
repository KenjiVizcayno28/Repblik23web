function CompanyImage() {
  return (
    <div className="header-image-panel" aria-label="Company image">
      <img src="/images/repblik23.jpg" alt="" />
    </div>
  );
}

export default function Header({ title = 'REPBLIK23', subtitle, children }) {
  return (
    <header className="top-accent-row app-header-block">
      <CompanyImage />
      <div className="header-content-panel">
        <div className="header-title-area">
          <div className="eyebrow">{title}</div>
          {subtitle ? <p className="header-subtitle">{subtitle}</p> : null}
        </div>
        {children ? (
        <div className="header-children">
          {children}
        </div>
        ) : null}
      </div>
    </header>
  );
}