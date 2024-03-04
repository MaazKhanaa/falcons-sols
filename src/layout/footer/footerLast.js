import styles from './footer.module.css';
import { FooterText } from '../../constants/footer/footer.ts';

const FooterLast = () => {
  return (
    <div className='mb-5'>
      <p className='text-center'>&copy; {FooterText.footerLast}</p>
    </div>
  );
};

export default FooterLast;
