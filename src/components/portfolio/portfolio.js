import styles from './portfolio.module.css';
import PortfolioCard from './portfolioCard';
import { ProtfolioCardData } from '../../constants/portfolio/portfolio.ts';
import { PortfolioData } from '../../constants/portfolio/portfolio.ts';
import SubHeading from '../../common/typography/subheading/subHeading';
import MainHeading from '../../common/typography/mainheading/mainHeading';

const Portfolio = () => {
  return (
    <>
      <div className='sectionSpacing' id='portfolio'>
        <div className='text-center'>
          <SubHeading text={PortfolioData.subHeading} />
          <MainHeading text={PortfolioData.heading} />
        </div>
        <div className='row'>
          {ProtfolioCardData.map((item, index) => (
            <div className='col-lg-4 col-md-6 mb-4' key={index}>
              <PortfolioCard
                image={item.cardImage}
                subHeading={item.subHeading}
                likeCounter={item.counter}
                mainHeading={item.heading}
              />
            </div>
          ))}
        </div>
      </div>

      <hr />
    </>
  );
};

export default Portfolio;
