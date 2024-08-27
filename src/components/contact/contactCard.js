import SubHeading from '../../common/typography/subheading/subHeading';
import SocialIcon from '../../common/social/socialIcon';
import { contactData } from '../../constants/contact/contact.ts';
import styles from './contact.module.css';
import WhatsAppChat from '../whatsapp/whatsappButton.js';
import { FaWhatsapp } from "react-icons/fa";


const ContactCard = () => {
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
    <div className={`${styles.contactCard} h-100`}>
      <img className="mb-3" src={contactData.Image} alt='contact img'/>
      <h4 className="mb-3">{contactData.ownerName}</h4>
      <p className="falconParagraph mb-3">{contactData.position}</p>
      <p className="falconParagraph mb-3">{contactData.detail}</p>
      <p className="falconParagraph mb-3">{contactData.detail1}</p>
      <p className="falconParagraph mb-0">
      Phone: <a className={styles.emailLink} href={`tel:${contactData.phoneNumber}`}>{contactData.phoneNumber}</a>
      </p>
      <p className="falconParagraph mb-0">
      Email: <a className={styles.emailLink} href={`mailto:${contactData.email}`}>{contactData.email}</a>
      </p>

      <div className="my-4">
        <SubHeading text={contactData.socialHeading} isFirstSection={true} />
      </div>
      <div className='d-flex'>
              <SocialIcon links={socialLinks} />
              <WhatsAppChat phoneNumber="+923365563138">
                <FaWhatsapp />
              </WhatsAppChat>
              </div>
    </div>
  );
};

export default ContactCard;
