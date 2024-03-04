import SubHeading from '../../common/typography/subheading/subHeading';
import SocialIcon from '../../common/social/socialIcon';
import { contactData } from '../../constants/contact/contact.ts';
import styles from './contact.module.css';

const ContactCard = () => {
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
    <div className={`${styles.contactCard} h-100`}>
      <img className="mb-3" src={contactData.Image} />
      <h4 className="mb-3">{contactData.ownerName}</h4>
      <p className="falconParagraph mb-3">{contactData.position}</p>
      <p className="falconParagraph mb-3">{contactData.detail}</p>
      <p className="falconParagraph mb-0">Phone: {contactData.phoneNumber}</p>
      <p className="falconParagraph mb-0">Email: {contactData.email}</p>

      <div className="my-4">
        <SubHeading text={contactData.socialHeading} isFirstSection={true} />
      </div>
      <div>
        <SocialIcon links={socialLinks} />
      </div>
    </div>
  );
};

export default ContactCard;
