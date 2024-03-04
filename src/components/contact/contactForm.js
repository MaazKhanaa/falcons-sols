import { useState } from 'react';
import styles from './contact.module.css';
import Input from '../../common/form/input/input';
import PrimaryButton from '../../common/form/button/primaryButton';
import TextArea from '../../common/form/input/textarea';

const ContactForm = () => {
  const [userName, setName] = useState('');
  const [userPhone, setPhone] = useState('');
  const [userEmail, setEmail] = useState('');
  const [userSubject, setSubject] = useState('');
  const [userMessage, setMessage] = useState('');

  const inputNameHandler = (event) => {
    setName(event.target.value);
  };

  const inputPhoneHandler = (event) => {
    setPhone(event.target.value);
  };

  const inputEmailHandler = (event) => {
    setEmail(event.target.value);
  };

  const inputSubjectHandler = (event) => {
    setSubject(event.target.value);
  };

  const inputMessageHandler = (event) => {
    setMessage(event.target.value);
  };
  const contactFormHandler = (event) => {
    event.preventDefault();
    setName((event.target.value = ''));
    setPhone((event.target.value = ''));
    setEmail((event.target.value = ''));
    setSubject((event.target.value = ''));
    setMessage((event.target.value = ''));

    console.log('Name', userName);
    console.log('Phone', userPhone);
    console.log('Email', userEmail);
    console.log('Subject', userSubject);
    console.log('Message', userMessage);
  };
  return (
    <div className={`${styles.contactCard} h-100`}>
      <form onSubmit={contactFormHandler}>
        <div className="row">
          <div className="col-sm-6">
            <Input
              label="Name"
              type="text"
              name={userName}
              id="name"
              value={userName}
              onChange={inputNameHandler}
            />
          </div>
          <div className="col-sm-6">
            <Input
              label="Phone"
              type="number"
              name={userPhone}
              id="phone"
              value={userPhone}
              onChange={inputPhoneHandler}
            />
          </div>
          <div className="col-12">
            <Input
              label="Email"
              type="email"
              name={userEmail}
              id="email"
              value={userEmail}
              onChange={inputEmailHandler}
            />
          </div>

          <div className="col-12">
            <Input
              label="Subject"
              type="text"
              name={userSubject}
              id="subject"
              value={userSubject}
              onChange={inputSubjectHandler}
            />
          </div>

          <div className="col-12">
            <TextArea
              label="Message"
              name={userMessage}
              value={userMessage}
              onChange={inputMessageHandler}
            />
          </div>

          <div className="col-12 text-end">
            <PrimaryButton text="Submit" type="submit" />
          </div>
        </div>
      </form>
    </div>
  );
};
export default ContactForm;
