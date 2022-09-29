import "./footer.css";
import googlePlay from "../../assets/images/GooglePlay.svg";
import appStore from "../../assets/images/AppStore.svg";

// Footer component
const Footer = () => {
  return (
    <div className="footer">
      {/* Sections */}
      <div className="footer-sections">
        {/* Mealz */}
        <div className="footer-Mealz">
          <h6 className="footer-section-title">Mealz</h6>
          <ul>
            <li className="footer-section-item">About Us</li>
            <li className="footer-section-item">Jobs</li>
            <li className="footer-section-item">Become a partner</li>
            <li className="footer-section-item">Join as a driver</li>
            <li className="footer-section-item">Releases</li>
          </ul>
        </div>
        {/* Support */}
        <div className="footer-support">
          <h6 className="footer-section-title">Support</h6>
          <ul>
            <li className="footer-section-item">Contact Us</li>
            <li className="footer-section-item">Help Center</li>
            <li className="footer-section-item">Terms of service</li>
            <li className="footer-section-item">Legal</li>
            <li className="footer-section-item">Privacy Policy</li>
          </ul>
        </div>
        {/* Follow US */}
        <div className="footer-followUs">
          <h6 className="footer-section-title">Follow Us</h6>
          <ul>
            <li className="footer-section-item">Facebook</li>
            <li className="footer-section-item">Twitter</li>
            <li className="footer-section-item">Instgram</li>
            <li className="footer-section-item">LinkedIn</li>
          </ul>
        </div>
        {/* Download App */}
        <div className="footer-DownloadApp">
          <h6 className="footer-section-title">Download App</h6>
          <li className="footer-section-item">
            <img src={googlePlay} className="" />
          </li>
          <li className="footer-section-item">
            <img src={appStore} className="" />
          </li>
        </div>
      </div>
      {/* rights reserved */}
      <div className="footer-reservedRights">
        <h2 className="footer-logo">Mealz</h2>
        <p>&copy; {new Date().getFullYear()} Mealz | All Rights Reserved</p>
      </div>
    </div>
  );
};
export default Footer;
