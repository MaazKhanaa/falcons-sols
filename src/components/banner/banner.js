import MainHeading from '../../common/typography/mainheading/mainHeading';
import SubHeading from '../../common/typography/subheading/subHeading';
import SocialIcon from '../../common/social/socialIcon';
import styles from './banner.module.css';
import { bannerData } from '../../constants/banner/banner.ts';
import bannerImg from '../../assets/banner.png';

const Banner = (id) => {
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
    <>
      <div className='my-5' id='home'>
        <div className='row'>
          <div className='col-lg-7 mb-4'>
            <SubHeading text={bannerData.subHeading} isFirstSection={true} />
            <MainHeading text={bannerData.mainHeading} />
            <p className='falconParagraph'>{bannerData.description}</p>

            <div className={styles.SocialMain}>
              <SubHeading text='Find with me' isFirstSection={true} />
              <SocialIcon links={socialLinks} />
            </div>
          </div>
          <div className='col-lg-5'>
            <img className='w-100 h-100' src={bannerImg} />
          </div>
        </div>
      </div>
      <hr />
    </>
  );
};

export default Banner;
