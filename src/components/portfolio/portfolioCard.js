import Card from '../../common/project-card/card';
import CardHeading from '../../common/typography/cardheading/cardHeading';
import styles from './portfolio.module.css';
import { AiOutlineHeart } from 'react-icons/ai';

const PortfolioCard = ({ image, subHeading, likeCounter, mainHeading }) => {
  return (
    <Card>
      <img className={styles.projectImg} src={image} />
      <div className="d-flex justify-content-between m-4 mb-0">
        <span className={styles.subHeading}>{subHeading}</span>
        <span className={styles.counterText}>
          <span className="d-inline-block pe-1">
            <AiOutlineHeart />
          </span>
          {likeCounter}
        </span>
      </div>
      <div className='mx-4 mb-4'>
      <CardHeading text={mainHeading} />
      </div>
    </Card>
  );
};

export default PortfolioCard;
