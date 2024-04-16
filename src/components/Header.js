import './styles/Header.css';

export default function Header() {

  return (
    <nav className="header">
      <div className="header-container">
        <div className='header-title'>
            <h3>ConnectiFind</h3>
        </div>
        <div className="header-nav-links-container">
            <p className="header-button-navbar header-text-navbar">Home</p>
            <p className="header-button-get-started header-text-white">Get Started</p>
        </div>
      </div>
    </nav>
  );
}
