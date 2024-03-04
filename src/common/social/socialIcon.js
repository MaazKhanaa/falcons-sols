import styles from './soicalIcon.module.css';
import { FaFacebookF, FaTwitter, FaInstagram } from 'react-icons/fa';

const socialIcon = ({ links }) => {
  return (
    <div className={`${styles.socialIcon}`}>
      {links.map((link, index) => (
        <a key={index} href={link.url} target="_blank">
          {link.icon === 'facebook' && <FaFacebookF />}
          {link.icon === 'twitter' && <FaTwitter />}
          {link.icon === 'insta' && <FaInstagram />}
        </a>
      ))}
    </div>
  );
};

export default socialIcon;
