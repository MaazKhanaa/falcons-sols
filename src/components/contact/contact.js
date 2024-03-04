import styles from './contact.module.css';
import { contactData } from '../../constants/contact/contact.ts';
import SubHeading from '../../common/typography/subheading/subHeading';
import MainHeading from '../../common/typography/mainheading/mainHeading';
import ContactCard from './contactCard';
import ContactForm from './contactForm';

const ContactUs = () => {
  return (
    <>
      <div className='sectionSpacing' id='contact'>
        <div className='text-center'>
          <SubHeading text={contactData.subHeading} />
          <MainHeading text={contactData.mainHeading} />
        </div>
        <div className='row'>
          <div className='col-md-4'>
            <ContactCard />
          </div>
          <div className='col-md-8'>
            <ContactForm />
          </div>
        </div>
      </div>
      <hr />
    </>
  );
};

export default ContactUs;
