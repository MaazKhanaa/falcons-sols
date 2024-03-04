import Card from '../../common/card/card';
import CardHeading from '../../common/typography/cardheading/cardHeading';
import styles from './portfolio.module.css';
import { AiOutlineHeart } from 'react-icons/ai';

const PortfolioCard = ({ image, subHeading, likeCounter, mainHeading }) => {
  return (
    <Card>
      <img src={image} />
      <div className="d-flex justify-content-between mt-4">
        <span className={styles.subHeading}>{subHeading}</span>
        <span className={styles.counterText}>
          <span className="d-inline-block pe-1">
            <AiOutlineHeart />
          </span>
          {likeCounter}
        </span>
      </div>
      <CardHeading text={mainHeading} />
    </Card>
  );
};

export default PortfolioCard;
