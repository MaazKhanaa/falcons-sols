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

const Footer = () => {
  const socialLinks = [
    {
      url: 'https://www.facebook.com/',
      icon: 'facebook',
    },
    {
      url: 'https://www.twitter.com/',
      icon: 'twitter',
    },
    {
      url: 'https://www.instagram.com/',
      icon: 'insta',
    },
  ];
  return (
    <div className="container">
      <div className="row">
        <div className="col-lg-3 col-md-4 col-sm-6 mb-4">
          <h3 className="mb-4">
            <img
              src={footerLogo.footerMainLogo}
              style={{ width: '120px', height: 'auto' }}
            />
          </h3>
          <SocialIcon links={socialLinks} />
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
        <div className="col-lg-3 col-md-4 col-sm-6 mb-4">
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
