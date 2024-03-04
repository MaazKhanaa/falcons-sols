import styles from './about.module.css';
import SubHeading from '../../common/typography/subheading/subHeading';
import MainHeading from '../../common/typography/mainheading/mainHeading';
import { aboutText } from '../../constants/about/about.ts';
import { aboutPoints } from '../../constants/about/about.ts';
import AboutPoint from './aboutPoint';
import Card from '../../common/card/card';
const About = () => {
  return (
    <>
      <div className='sectionSpacing' id='about'>
        <div className='text-center'>
          <SubHeading text={aboutText.subHeading} />
          <MainHeading text={aboutText.mainHeading} />
        </div>
        <div className='row'>
          <div className='col-lg-5 mb-4 mb-lg-0'>
            <Card>
              <img className='h-100' src={aboutText.image} />
            </Card>
          </div>
          <div className='col-lg-7'>
            <Card>
              <p>{aboutText.aboutParagraph}</p>
              <SubHeading text={aboutText.aboutInnerSub} />

              <div className='row'>
                {Array.isArray(aboutPoints) &&
                  aboutPoints.map((item, index) => (
                    <div className='col-sm-6' key={index}>
                      <AboutPoint abouttext={item.text} />
                    </div>
                  ))}
              </div>
            </Card>
          </div>
        </div>
      </div>
      <hr />
    </>
  );
};

export default About;
