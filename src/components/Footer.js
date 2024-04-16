import "./styles/Footer.css";

export default function Footer() {

  return (
    <div className="footer">
      <div className="footer-content">
        <div className="footer-left-group">
          <span className="footer-text"><p>&#xA9;2024 ConnectiFind</p></span>
          <span className="footer-text"><p>hello@connectifind.com</p></span>
        </div>
        <div className="footer-right-group">
            <div className="footer-text">
                <p>About Us</p>
            </div>
            <div className="footer-text">
                <p>Terms of Service & Privacy Policy</p>
            </div>
        </div>
      </div>
    </div>
  );
}
