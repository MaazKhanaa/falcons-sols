import styles from './feature.module.css';

// REACT ICONS
import { AiOutlineAppstore, AiOutlineMobile } from 'react-icons/ai';
import {
  MdOutlineDesignServices,
  MdOutlineScreenSearchDesktop,
} from 'react-icons/md';
import { BsDatabase, BsBoxes } from 'react-icons/bs';
import CardHeading from '../../common/typography/cardheading/cardHeading';
import Card from '../../common/card/card';

const FeatureCard = ({ iconName, heading, description }) => {
  return (
    <Card>
      <div className={styles.featureCardIcon}>
        {iconName === 'AiOutlineAppstore' && <AiOutlineAppstore />}
        {iconName === 'AiOutlineMobile' && <AiOutlineMobile />}
        {iconName === 'MdOutlineDesignServices' && <MdOutlineDesignServices />}
        {iconName === 'MdOutlineScreenSearchDesktop' && (
          <MdOutlineScreenSearchDesktop />
        )}
        {iconName === 'BsDatabase' && <BsDatabase />}
        {iconName === 'BsBoxes' && <BsBoxes />}
      </div>
      <CardHeading text={heading} />
      <p className={styles.featueCardDesc}>{description}</p>
    </Card>
  );
};

export default FeatureCard;
