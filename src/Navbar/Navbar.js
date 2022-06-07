import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faFacebookF,
  faTwitter,
  faInstagram,
} from '@fortawesome/free-brands-svg-icons';
import style from './Navbar.module.css';

function Navbar() {
  return (
    <div className={style.navbar}>
      <div className={style.navbarLogo}>
        <img src="../images/default-logo.png" />
      </div>
      <div className={style.navbarIcon}>
        <FontAwesomeIcon icon={faFacebookF} size="lg"/>
        <FontAwesomeIcon icon={faTwitter} size="lg" />
        <FontAwesomeIcon icon={faInstagram} size="lg"/>
      </div>
    </div>
  );
}

export default Navbar;
