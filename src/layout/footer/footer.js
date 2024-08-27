import styles from './footer.module.css';
import SocialIcon from '../../common/social/socialIcon';
import {
  FooterLink1,
  FooterLink2,
  FooterLink3,
  FooterText,
  footerLogo,
} from '../../constants/footer/footer.ts';
import FooterLast from './footerLast';
import WhatsAppChat from '../../components/whatsapp/whatsappButton.js';
import { FaWhatsapp } from "react-icons/fa";

const Footer = () => {
  const socialLinks = [
    {
      url: 'https://www.facebook.com/falconsols?mibextid=LQQJ4d',
      icon: 'facebook',
    },
    {
      url: 'https://www.linkedin.com/company/falconsolution/',
      icon: 'twitter',
    },
    {
      url: 'https://www.instagram.com/falconsols?igsh=YzNlcGl3Zmt4NTZ5',
      icon: 'insta',
    },
  ];
  return (
    <div className="container">
      <div className="row">
        <div className="col-lg-4 col-md-5 col-sm-6 mb-4">
          <h3 className="mb-4">
            <img
              src={footerLogo.footerMainLogo}
              style={{ width: '120px', height: 'auto' }} alt='footer img'
            />
          </h3>
          <div className='d-flex'>
              <SocialIcon links={socialLinks} />
              <WhatsAppChat phoneNumber="+923149231923">
                <FaWhatsapp />
              </WhatsAppChat>
              </div>
        </div>
        <div className="col-lg-3 col-md-4 col-sm-6 mb-4">
          <h6 className={styles.footerHeading}>{FooterText.header1}</h6>
          <div>
            {FooterLink1.map((item, index) => (
              <a className={styles.footerAncher} key={index} href={item.href}>
                {item.text}
              </a>
            ))}
          </div>
        </div>
        <div className="col-lg-3 col-md-4 col-sm-6 mb-4">
          <h6 className={styles.footerHeading}>{FooterText.header2}</h6>
          <div>
            {FooterLink2.map((item, index) => (
              <a className={styles.footerAncher} key={index} href={item.href}>
                {item.text}
              </a>
            ))}
          </div>
        </div>
        <div className="col-lg-2 col-md-3 col-sm-6 mb-4">
          <h6 className={styles.footerHeading}>{FooterText.header3}</h6>
          <div>
            {FooterLink3.map((item, index) => (
              <a className={styles.footerAncher} key={index} href={item.href}>
                {item.text}
              </a>
            ))}
          </div>
        </div>
      </div>
      <hr />

      <FooterLast />
    </div>
  );
};

export default Footer;
